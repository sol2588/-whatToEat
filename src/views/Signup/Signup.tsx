import { useState } from 'react';
import { userFormHandler } from '../../handler/userFormHandler.ts';
import { validateEmail } from '../../utils/validation/validation.ts';
import { useDispatch } from 'react-redux';
import { showModal } from '../../redux/reducer/modalSlice.ts';
import colors from '../../styles/colors.ts';
import styled from 'styled-components';
import axios from 'axios';
import { Button, Container, Box, Typography, TextField } from '@mui/material';

export default function Signup(): JSX.Element {
    const dispatch = useDispatch();

    const [emailCheck, setEmailCheck] = useState<boolean>(false);
    const [nicknameCheck, setNicknameCheck] = useState<boolean>(false);
    const {
        email,
        setEmail,
        password,
        setPassword,
        passwordCheck,
        setPasswordCheck,
        nickname,
        setNickname,
        inputMessage,
        clickedButEmpty,
        handleEmptyInput,
        clearInputMessage,
        handleSignup,
    } = userFormHandler();

    const handleCheckEmail = async () => {
        if (!email) {
            dispatch(showModal({ isOpen: true, content: '이메일을 입력해주시기 바랍니다', onConfirm: null }));
            return;
        }

        const emailError = validateEmail(email);
        if (emailError) {
            dispatch(showModal({ isOpen: true, content: emailError, onConfirm: null }));
            return;
        }
        try {
            const response: any = await axios.get(`${import.meta.env.VITE_BASE_URL}/auth/email-check?email=${email}`);
            // 이메일 사용 가능 여부
            if (response.data.data === true) {
                setEmailCheck(true);
            } else if (response.data.data === false) {
                setEmailCheck(false);
                setEmail('');
            }
            dispatch(showModal({ isOpen: true, content: response.data.message, onConfirm: null }));
        } catch (err: any) {
            if (err.response) {
                dispatch(showModal({ isOpen: true, content: err.response.data, onConfirm: null }));
            } else {
                console.log(err);
            }
        }
    };

    const handleCheckNickname = async () => {
        if (!nickname) {
            dispatch(showModal({ isOpen: true, content: '닉네임을 입력해주시기 바랍니다', onConfirm: null }));
            return;
        }

        try {
            const response: any = await axios.get(`${import.meta.env.VITE_BASE_URL}/auth/nickname-check?nickname=${nickname}`);
            // 닉네임 사용 가능 여부에
            if (response.data.data === true) {
                setNicknameCheck(true);
            } else if (response.data.data === false) {
                setNicknameCheck(false);
                setNickname('');
            }
            dispatch(showModal({ isOpen: true, content: response.data.message, onConfirm: null }));
        } catch (err: any) {
            if (err.response) {
                dispatch(showModal({ isOpen: true, content: err.response.data, onConfirm: null }));
            } else {
                console.log(err);
            }
        }
    };

    return (
        <Container
            maxWidth="sm"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 0,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: 3,
                    padding: 4,
                    borderRadius: 2,
                    mt: 8,
                    mb: 8,
                    width: '700px',
                }}
            >
                <Typography variant="h4" component="h1" gutterBottom>
                    회원가입
                </Typography>
                <form method="POST" onSubmit={handleSignup} style={{ width: '80%', display: 'flex', flexDirection: 'column' }}>
                    <SignupFieldset>
                        <legend>Welcome, Register your account</legend>
                        <SignupEmailWrapper>
                            <TextField
                                label="이메일"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={() => handleEmptyInput('email')}
                                onFocus={() => clearInputMessage('email')}
                                error={!!inputMessage.email && clickedButEmpty.email}
                                helperText={inputMessage.email && clickedButEmpty.email}
                                margin="normal"
                                sx={{ width: '70%' }}
                            />
                            <Button
                                type="button"
                                variant="contained"
                                onClick={() => {
                                    handleCheckEmail();
                                }}
                                sx={{ width: '100px', backgroundColor: colors[300] }}
                            >
                                중복확인
                            </Button>
                        </SignupEmailWrapper>
                        <ErrorMessage visible={!!inputMessage.email && clickedButEmpty.email}>{inputMessage.email}</ErrorMessage>
                        <NicknameWrapper>
                            <TextField
                                label="닉네임"
                                value={nickname}
                                onChange={(e) => setNickname(e.target.value)}
                                onBlur={() => handleEmptyInput('nickname')}
                                onFocus={() => clearInputMessage('nickname')}
                                error={!!inputMessage.nickname && clickedButEmpty.nickname}
                                helperText={inputMessage.nickname && clickedButEmpty.nickname}
                                margin="normal"
                                sx={{ width: '70%' }}
                            />
                            <Button
                                type="button"
                                variant="contained"
                                onClick={() => {
                                    handleCheckNickname();
                                }}
                                sx={{ width: '100px', backgroundColor: colors[300] }}
                            >
                                중복확인
                            </Button>
                        </NicknameWrapper>
                        <ErrorMessage visible={!!inputMessage.nickname && clickedButEmpty.nickname}>{inputMessage.nickname}</ErrorMessage>
                        <TextField
                            fullWidth
                            label="비밀번호"
                            name="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onBlur={() => handleEmptyInput('password')}
                            onFocus={() => clearInputMessage('password')}
                            error={!!inputMessage.password && clickedButEmpty.password}
                            helperText={inputMessage.password && clickedButEmpty.password}
                            margin="normal"
                        />
                        <ErrorMessage visible={!!inputMessage.pw && clickedButEmpty.password}>{inputMessage.password}</ErrorMessage>
                        <TextField
                            fullWidth
                            label="비밀번호 확인"
                            name="passwordCheck"
                            type="password"
                            value={passwordCheck}
                            onChange={(e) => setPasswordCheck(e.target.value)}
                            onBlur={() => handleEmptyInput('passwordCheck')}
                            onFocus={() => clearInputMessage('passwordCheck')}
                            error={!!inputMessage.passwordCheck && clickedButEmpty.passwordCheck}
                            helperText={inputMessage.passwordCheck && clickedButEmpty.passwordCheck}
                            margin="normal"
                        />
                        <ErrorMessage visible={!!inputMessage.passwordCheck && clickedButEmpty.passwordCheck}>
                            {inputMessage.passwordCheck}
                        </ErrorMessage>
                    </SignupFieldset>
                    <Button
                        type="submit"
                        variant="contained"
                        disabled={!(nicknameCheck && emailCheck)}
                        sx={{
                            backgroundColor: nicknameCheck && emailCheck ? 'primary.main' : 'grey.500',
                            ':hover': {
                                backgroundColor: nicknameCheck && emailCheck ? 'primary.dark' : 'grey.700',
                            },
                            textAlign: 'center',
                        }}
                    >
                        회원가입
                    </Button>
                </form>
            </Box>
        </Container>
    );
}

const SignupFieldset = styled.fieldset`
    width: 100%;
    padding: 0;
    margin: 10px auto;
    border: 0;
    text-align: center;
`;
const SignupEmailWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`;

const NicknameWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

// `visible` : 에러메세지가 있을 때 boolean으로 style적용
const ErrorMessage = styled.p<{ visible: boolean }>`
    margin-left: 14px;
    color: #d32f2f;
    font-size: 0.8rem;
    text-align: start;
    visibility: ${(props) => (props.visible ? 'visible' : 'none')};
`;
