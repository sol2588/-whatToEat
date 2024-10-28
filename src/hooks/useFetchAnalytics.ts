import instance from '../utils/api/instance';
import { useState, useEffect } from 'react';
export const useFetchAnalytics = () => {
    const [visitedInfo, setVisitedInfo] = useState({
        Monthly: 0,
        Today: 0,
    });

    const fetchAnalyticsDailyHandler = async () => {
        const dailyResponse = await instance.get('/statistics/daily');
        console.log('일별 방문자 response :', dailyResponse);

        setVisitedInfo((prevInfo) => ({
            ...prevInfo,
            Today: dailyResponse.data,
        }));
    };

    const fetchAnalyticsMonthlyHandler = async () => {
        const momthlyResponse = await instance.get('/statistics/monthly');
        console.log('월별 방문자 response : ', momthlyResponse);
        setVisitedInfo((prevInfo) => ({
            ...prevInfo,
            Monthly: momthlyResponse.data,
        }));
    };

    useEffect(() => {
        fetchAnalyticsDailyHandler();
        fetchAnalyticsMonthlyHandler();
    }, []);

    return {
        visitedInfo,
    };
};
