import { useState, useEffect, useCallback } from 'react';
import useAuthToken from './useAuthToken';
import instance from '../utils/api/instance';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';

export const useGetUserInfo = () => {
    const token = useAuthToken();
    const userData = useSelector((state: RootState) => state.user.value.userId);
    const [userInfo, setUserInfo] = useState({ email: '', nickname: '', img: '' });

    const fetchUserInfo = useCallback(async () => {
        try {
            const response = await instance.get(`/users/${userData}`);

            const { email, nickname } = response.data.data;
            setUserInfo({
                email: email,
                nickname: nickname,
                img: 'https://cdn.pixabay.com/photo/2014/04/02/10/48/food-304597_1280.png',
            });
        } catch (error) {
            console.error('유저정보를 불러오는 데 실패했습니다', error);
        }
    }, [token]);

    // 최초 실행 시 유저 정보를 불러옴
    useEffect(() => {
        if (token) {
            fetchUserInfo();
        }
    }, [token, fetchUserInfo]);

    return {
        userInfo,
        setUserInfo,
        refetchUserInfo: fetchUserInfo,
    };
};
