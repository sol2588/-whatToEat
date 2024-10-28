import { RootState } from '../../redux/store/store';
import instance from './instance';
import { useSelector } from 'react-redux';

const reissueToken = async () => {
    const tokenExpired = useSelector((state: RootState) => state.user.value.expiredIn);
    if (tokenExpired && tokenExpired > Date.now()) {
        console.log('토큰이 아직 유효합니다.');
        return null;
    }
    try {
        const response = await instance.get('/auth/token/refresh');
        console.log('reissue 문제야...:', response);

        if (response.data.code == 'OK') {
            console.log('response reissue', response.data);
            const token = response.headers['access-token'];
            const accessToken = token?.replace('Bearer ', '');
            return accessToken;
        }
    } catch (err: any) {
        console.log('reissue access token error', err);
        console.log('reissue access erro.response:', err.response);
    }
};

export default reissueToken;
