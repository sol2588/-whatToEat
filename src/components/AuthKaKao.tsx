import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/reducer/userSlice';
import Loading from './Loading/Loading';

export default function AuthKaKao() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const token = params.get('access-token');
        const nickname = params.get('nickname');
        const userId = params.get('userId');
        const provider = params.get('provider');
        const duration = 10 * 60 * 1000; // 10분

        if (token && nickname) {
            dispatch(
                loginSuccess({
                    isLoggedIn: true,
                    token: token,
                    nickname: nickname,
                    userId: userId,
                    provider: provider,
                    expiredIn: Date.now() + duration,
                }),
            );
            navigate('/');
        }
    }, [navigate]);

    return <Loading />;
}
