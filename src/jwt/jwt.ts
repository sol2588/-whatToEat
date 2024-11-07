import { generateSecret, SignJWT, jwtVerify } from 'jose';

const secretKey = generateSecret('HS256'); // jose모듈로 대칭키 생성

// email로 accessToken 생성
const generateAccessToken = async (email: string) => {
    const payload = {
        userId: email,
    };
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setIssuer('urn:example:issuer')
        .setAudience('urn:example:audience')
        .setExpirationTime('1m')
        .sign(await secretKey);
};

const generateRefreshToken = async (email: string) => {
    const payload = {
        userId: email,
    };
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setIssuer('urn:example:issuer')
        .setAudience('urn:example:audience')
        .setExpirationTime('14d')
        .sign(await secretKey);
};

const verifyToken = async (token: string) => {
    try {
        const { payload } = await jwtVerify(token, await secretKey, {
            issuer: 'urn:example:issuer',
            audience: 'urn:example:audience',
        });
        console.log('payload: ', payload);
        return payload;
    } catch (err) {
        console.log(err);
        return null;
    }
};

export { generateAccessToken, generateRefreshToken, verifyToken };
