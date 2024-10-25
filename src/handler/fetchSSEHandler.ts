import { useState, useEffect, useRef } from 'react';
import { EventSourcePolyfill, NativeEventSource } from 'event-source-polyfill';
import useAuthToken from '../hooks/useAuthToken';

export interface SSEProps {
    recipeName: string;
    message: string;
    rating: number;
    commentUser: string;
}

export default function fetchSSEHandler() {
    const [alarmData, setAlarmData] = useState<SSEProps[]>([]); // 서버가 푸쉬한 데이터 저장
    const token = useAuthToken();
    const eventSource = useRef<EventSource | null>(null);

    useEffect(() => {
        if (token) {
            fetchSSE();
        }
        return () => {
            if (eventSource.current) {
                eventSource.current.close();
                console.log('Close SSE connection');
            }
        };
    }, [token]);

    const fetchSSE = () => {
        // 기존 연결이 있다면 닫기
        if (eventSource.current) {
            eventSource.current.close();
            console.log('Exisiting Connetion CLOSED!!!');
        }

        const EventSource = EventSourcePolyfill || NativeEventSource; // request header에 token을 보내기 위해 EventSourcePolyfill(EventSource는 header 수정불가)
        // 새로운 EventSource생성
        eventSource.current = new EventSource(`${import.meta.env.VITE_BASE_URL}/notify`, {
            headers: {
                'access-token': `Bearer ${token}`,
            },
            withCredentials: true,
            heartbeatTimeout: 5 * 60 * 1000, // 5분
        });

        // 연결 -> 최초 연결시 "Alarm Init Message"
        eventSource.current.onopen = () => {
            console.log('Connection to SSE server stablished');
        };

        // 데이터 받아옴
        eventSource.current.onmessage = (evt) => {
            const res = evt.data;
            console.log('event data: ', res);

            if (res == 'Connection closed') {
                eventSource.current?.close();
                setTimeout(fetchSSE, 5000);
            } else if (res == 'Alarm Init Message') {
                console.log(res);
            } else {
                try {
                    const parsedData = JSON.parse(res);
                    setAlarmData((prev) => [...prev, parsedData]); // recipeId, comment, reviewer, createdAt
                } catch (error) {
                    console.log('other message not JSON: ', res);
                }
            }
        };

        // 종료시 onerror로 처리
        eventSource.current.onerror = (err: any) => {
            console.log('SSE connection error', err);
            setTimeout(fetchSSE, 600000); // 10분 후 연결
        };
    };

    return { alarmData };
}
