import { useState, useEffect } from 'react';
import instance from '../utils/api/instance';

export default function useNotify() {
    const [notifyList, setNotifyList] = useState<number[]>([]);

    const fetchNotify = async () => {
        try {
            const response = await instance.get('/notify/list');
            console.log('notify list response', response);
            if (response.data.code == 'OK') {
                setNotifyList(response.data.data);
            }
        } catch (err) {
            console.log;
        }
    };
    useEffect(() => {
        fetchNotify();
    }, []);

    const toggleNotify = async (id: number) => {
        try {
            const response = await instance.get(`/notify/toggle/${id}`);
            console.log('toggle', response);
            if (response.data.code == 'OK') {
                // ! 데이터 내려주는 값 확인필요(id가 제거된 notiList주면 바로 setState로 갱신)
                setNotifyList((prev) => (prev.includes(id) ? prev.filter((noti) => noti != id) : [...prev, id]));
            }
        } catch (err) {
            console.log(err);
        }
    };

    return { notifyList, toggleNotify };
}
