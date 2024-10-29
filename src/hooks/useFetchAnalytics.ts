import axios from 'axios';
import { useState, useEffect } from 'react';
export const useFetchAnalytics = () => {
    const [visitedInfo, setVisitedInfo] = useState({
        Monthly: 0,
        Today: 0,
    });

    const fetchAnalyticsDailyHandler = async () => {
        const dailyResponse = await axios.get(`${import.meta.env.VITE_BASE_URL}/statistics/daily`);
        console.log('일별 방문자 response :', dailyResponse);

        setVisitedInfo((prevInfo) => ({
            ...prevInfo,
            Today: dailyResponse.data.data,
        }));
    };

    const fetchAnalyticsMonthlyHandler = async () => {
        const momthlyResponse = await axios.get(`${import.meta.env.VITE_BASE_URL}/statistics/monthly`);
        console.log('월별 방문자 response : ', momthlyResponse);
        setVisitedInfo((prevInfo) => ({
            ...prevInfo,
            Monthly: momthlyResponse.data.data,
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
