import { generateAccessToken, generateRefreshToken, verifyToken } from '../jwt/jwt';
import { http, HttpResponse } from 'msw';

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
];

export const loginHandler = [
    http.post(`${import.meta.env.VITE_BASE_URL}/users/login`, async ({ request }) => {
        const reqData = (await request.json()) as { email: string; password: string };

        const loginUser = { email: reqData?.email, password: reqData?.password };
        const userInfo = users.find((user) => user.email == loginUser.email);

        if (!userInfo) {
            return HttpResponse.json({ code: 'Unauthorized', message: 'Invalid credentials' }, { status: 401 });
        }

        const token = await generateAccessToken(userInfo?.email);
        const refreshToken = await generateRefreshToken(userInfo?.email);
        console.log(token, refreshToken);
        return HttpResponse.json(
            { code: 'OK', data: [userInfo?.nickname, userInfo?.email] },
            {
                headers: {
                    'Set-Cookie': refreshToken,
                    'access-token': `Bearer ${token}`,
                },
            },
        );
    }),
];
