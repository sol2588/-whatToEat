import instance from './instance';
import { store } from '../../redux/store/store';

const reissueToken = async () => {
    const tokenExpired = store.getState().user.value.expiredIn;
    if (tokenExpired && tokenExpired > Date.now()) {
        console.log('토큰이 아직 유효합니다.');
        return null;
    }
    try {
        const response = await instance.get('/auth/token/refresh');

        if (response.data.code == 'OK') {
            console.log('토큰발급 성공', response.data);
            const token = response.headers['access-token'];
            const accessToken = token?.replace('Bearer ', '');
            const nickname = response.data.data;
            return { accessToken, nickname };
        }
    } catch (err: any) {
        console.log('reissue access token error', err);
    }
};

export default reissueToken;
