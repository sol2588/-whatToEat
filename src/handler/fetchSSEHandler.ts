import { useState, useEffect, useRef, useCallback } from 'react';
import { EventSourcePolyfill, NativeEventSource } from 'event-source-polyfill';
import useAuthToken from '../hooks/useAuthToken';
import reissueToken from '../utils/api/reissueToken';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { loginSuccess } from '../redux/reducer/userSlice';

export interface SSEProps {
    recipeName: string;
    message: string;
    rating: number;
    commentUser: string;
}

interface SSEState {
    isConnected: boolean;
    error: Error | null;
    reconnectCount: number;
}

export default function fetchSSEHandler() {
    const [alarmData, setAlarmData] = useState<SSEProps[]>([]); // 서버가 푸쉬한 데이터 저장
    const [sseState, setSseState] = useState<SSEState>({
        isConnected: false,
        error: null,
        reconnectCount: 0,
    });
    const dispatch = useDispatch();
    const eventSource = useRef<EventSource | null>(null);
    let token = useAuthToken();

    const MAX_RECONNECT_ATTEMPTS = 5;
    let reconnecting = false;

    const closeConnection = useCallback(() => {
        if (eventSource.current) {
            eventSource.current.close();
            eventSource.current = null;
            setSseState((prev) => ({ ...prev, isConnected: false }));
            console.log('SSE connection closed');
        }
    }, []);

    useEffect(() => {
        if (token) {
            fetchSSE();
        }
        return () => {
            closeConnection();
        };
    }, [token, closeConnection]);

    const fetchSSE = useCallback(async () => {
        if (!token) return;

        // 기존 연결이 있다면 종료
        closeConnection();

        try {
            const EventSource = EventSourcePolyfill || NativeEventSource; // request header에 token을 보내기 위해 EventSourcePolyfill(EventSource는 header 수정불가)
            // 새로운 EventSource생성
            eventSource.current = new EventSource(`${import.meta.env.VITE_BASE_URL}/notify`, {
                headers: {
                    'Cache-Control': 'no-cache',
                    'access-token': `Bearer ${token}`,
                },
                withCredentials: true,
                heartbeatTimeout: 5 * 60 * 1000 + 5 * 1000, // 5분 5초
            });

            // 연결
            eventSource.current.onopen = () => {
                console.log('SSE Connection established');
                setSseState((prev) => ({ ...prev, isConnected: true, error: null, reconnectCount: 0 }));
            };

            // event data
            eventSource.current.onmessage = (event) => {
                console.log('Raw SSE message:', event.data);

                try {
                    if (event.data === 'Alarm Init Message') {
                        console.log('Initial connection message received');
                        return;
                    } else if (event.data === 'Connection closed') {
                        closeConnection();
                        if (!reconnecting) {
                            reconnecting = true;
                            setTimeout(() => {
                                fetchSSE();
                                reconnecting = false;
                            }, 5000);
                        }
                        return;
                    }
                    const parsedData = JSON.parse(event.data);
                    console.log('SSE Event data : ', parsedData);
                    setAlarmData((prev) => [...prev, parsedData]); // recipeId, comment, reviewer, createdAt
                } catch (err) {
                    console.error('Error parsing SSE message:', err);
                }
            };

            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/auth/token/refresh`, {
                headers: {
                    'access-token': `Bearer ${token}`,
                },
                withCredentials: true,
            });

            if (response.status == 401) {
                console.log('401 response in SSE', response);
                const newToken = await reissueToken();
                const parsedData = JSON.parse(sessionStorage.getItem('persist:root')!);
                const userData = JSON.parse(parsedData.user);
                const parsedProvider = userData.value.provider;
                if (newToken) {
                    token = newToken;
                    dispatch(loginSuccess({ isLoggedIn: true, token: newToken, nickname: response.data.data, provider: parsedProvider }));
                    fetchSSE();
                }
                return;
            } else {
                console.error('Failed to reissue token');
            }

            // 종료시 onerror로 처리
            eventSource.current.onerror = async (err: any) => {
                console.log('SSE connection error', err);

                setSseState((prev) => {
                    const newState = {
                        ...prev,
                        isConnected: false,
                        error: err as Error,
                        reconnectionCount: prev.reconnectCount + 1,
                    };

                    if (newState.reconnectCount < MAX_RECONNECT_ATTEMPTS) {
                        setTimeout(() => {
                            console.log(`Attempting to reconnect (${newState.reconnectCount}/${MAX_RECONNECT_ATTEMPTS})`);
                            fetchSSE();
                        }, 5000);
                    } else {
                        console.error('Max reconnection attempts reached');
                        closeConnection();
                    }

                    return newState;
                });
            };
        } catch (err) {
            console.error('Error initializing SSE:', err);
            setSseState((prev) => ({
                ...prev,
                error: err as Error,
                isConnected: false,
            }));
        }
    }, [token, closeConnection]);

    console.log('SSE State: ', sseState);

    return { alarmData, sseState };
}
