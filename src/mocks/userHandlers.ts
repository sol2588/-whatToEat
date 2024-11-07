import { generateAccessToken, generateRefreshToken, verifyToken } from '../jwt/jwt';
import { http, HttpResponse } from 'msw';
import { store } from '../redux/store/store';
import { loginSuccess } from '../redux/reducer/userSlice';

interface User {
    email: string;
    password: string;
    nickname: string;
}
const users: User[] = [
    {
        email: 'sd@naver.com',
        password: '12345678',
        nickname: 'kim',
    },
    {
        email: 'test@test.com',
        password: '12345678',
        nickname: 'test',
    },
];

export const userHandlers = [
    // 로그인
    http.post(`${import.meta.env.VITE_BASE_URL}/users/login`, async ({ request }) => {
        try {
            const reqData = (await request.json()) as { email: string; password: string };

            if (!reqData.email) {
                return HttpResponse.json({ code: 'BadRequest', message: '이메일을 입력해주세요.' });
            } else if (!reqData.password) {
                return HttpResponse.json({ code: 'BadRequest', message: '비밀번호를 입력해주세요.' });
            }
            const userInfo = users.find((user) => user.email == reqData.email);

            if (!userInfo) {
                return HttpResponse.json({ code: 'Unauthorized', message: '이메일이 존재하지 않습니다.' });
            } else if (userInfo.password !== reqData.password) {
                return HttpResponse.json({ code: 'Unauthorized', message: '잘못된 비밀번호입니다.' });
            }

            const token = await generateAccessToken(userInfo?.email);
            const refreshToken = await generateRefreshToken(userInfo?.email);

            return HttpResponse.json(
                { code: 'OK', data: [userInfo?.nickname, userInfo?.email] },
                {
                    headers: {
                        'Set-Cookie': `refreshToken=${refreshToken}`,
                        'access-token': `Bearer ${token}`,
                    },
                },
            );
        } catch (err) {
            console.log(err);
        }
    }),

    // 액세스토큰 재발급
    http.get(`${import.meta.env.VITE_BASE_URL}/auth/token/refresh`, async ({ request, cookies }) => {
        console.log('ㅇ여기로 들어왔는지가 가장중요해');
        try {
            const userId = (await request.json()) as string;
            const token = store.getState().user.value.token;
            const refreshToken = cookies.refreshToken;
            console.log(userId);

            if (!token) {
                window.location.href = '/login';
                return HttpResponse.json({ message: '로그인 후 이용하시기 바랍니다.' });
            }
            if (!refreshToken) {
                window.location.href = '/login';
                return HttpResponse.json({ message: '인증이 만료되었습니다. 로그인 후 이용하시기 바랍니다.' });
            }

            const verified = await verifyToken(token);
            console.log('verifyed', verified);
            if (!verified) {
                const parsedData = JSON.parse(sessionStorage.getItem('persist:root')!);
                const userData = JSON.parse(parsedData.user);
                const parsedNickname = userData.value.nickname;
                const parsedProvider = userData.value.provider;
                const duration = 1 * 60 * 1000; // 10분
                const newAccessToken = await generateAccessToken(userId);
                store.dispatch(
                    loginSuccess({
                        isLoggedIn: true,
                        token: newAccessToken,
                        nickname: parsedNickname,
                        userId: userId,
                        provider: parsedProvider,
                        expiredIn: Date.now() + duration,
                    }),
                );
                console.log('new!!!!', newAccessToken);
                return HttpResponse.json(
                    { code: 'OK', data: [, userId] },
                    {
                        headers: {
                            'access-token': `Bearer ${newAccessToken}`,
                        },
                    },
                );
            }
        } catch (err) {
            console.log('!!!!!!!!!!!!!!!!!!!!!!!');
            console.log(err);
        }
    }),

    // 회원가입
    http.post(`${import.meta.env.VITE_BASE_URL}/users/signup`, async ({ request }) => {
        try {
            const userData = (await request.json()) as { email: string; password: string; nickname: string };

            if (!userData.email) {
                return HttpResponse.json({ code: 'BadRequest', message: '이메일을 입력해주세요.' });
            } else if (!userData.password) {
                return HttpResponse.json({ code: 'BadRequest', message: '비밀번호를 입력해주세요.' });
            } else if (!userData.nickname) {
                return HttpResponse.json({ code: 'BadRequest', message: '닉네임을 입력해주세요.' });
            }

            users.push(userData);

            return HttpResponse.json(
                {
                    message: '회원가입 성공',
                },
                {
                    status: 201,
                },
            );
        } catch (err) {
            console.log(err);
        }
    }),

    // 이메일 증복체크
    http.get(`${import.meta.env.VITE_BASE_URL}/auth/email-check?email`, async ({ request }) => {
        const url = new URL(request.url);
        const userEmail = url.searchParams.get('email');
        const existEmail = users.some((user) => user.email == userEmail);

        if (existEmail) {
            return HttpResponse.json({ code: 'EXIST', message: '이미 사용 중인 이메일입니다.', data: false });
        } else {
            return HttpResponse.json({ code: 'SUCCESS', message: '사용할 수 있는 이메일 입니다.', data: true });
        }
    }),

    // 닉네임 중복체크
    http.get(`${import.meta.env.VITE_BASE_URL}/auth/nickname-check?nickname`, async ({ request }) => {
        const url = new URL(request.url);
        const userNickname = url.searchParams.get('nickname');
        const existNickname = users.some((user) => user.email == userNickname);

        if (existNickname) {
            return HttpResponse.json({ code: 'EXIST', message: '이미 사용 중인 닉네임입니다.', data: false });
        } else {
            return HttpResponse.json({ code: 'SUCCESS', message: '사용할 수 있는 닉네임입니다.', data: true });
        }
    }),
];
