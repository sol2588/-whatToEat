import { useState, useEffect } from 'react';
import instance from '../utils/api/instance';

export default function useNotify() {
    const [notifyList, setNotifyList] = useState<number[]>([]);

    const fetchNotify = async () => {
        try {
            const response = await instance.get('/notify/list');
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

            if (response.data.code == 'OK') {
                fetchNotify();
            }
        } catch (err) {
            console.log(err);
        }
    };

    return { notifyList, toggleNotify };
}
