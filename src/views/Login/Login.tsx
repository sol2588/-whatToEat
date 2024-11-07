import { useNavigate } from 'react-router-dom';
import { userFormHandler } from '../../handler/userFormHandler';
import { Container, Box, Typography, TextField, Button, Divider } from '@mui/material';
import styled from 'styled-components';
import colors from '../../styles/colors';

export default function Login(): JSX.Element {
    const navigate = useNavigate();

    const { email, setEmail, password, setPassword, clickedButEmpty, handleEmptyInput, clearInputMessage, inputMessage, handleLogin } =
        userFormHandler();

    return (
        <Container maxWidth="sm">
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
                }}
            >
                <Typography variant="h4" component="h1" gutterBottom>
                    로그인
                </Typography>
                <form method="POST" onSubmit={handleLogin} style={{ width: '100%' }}>
                    <TextField
                        fullWidth
                        label="이메일"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => handleEmptyInput('email')}
                        onFocus={() => clearInputMessage('email')}
                        error={!!inputMessage.email && clickedButEmpty.email}
                        helperText={inputMessage.email && clickedButEmpty.email && inputMessage.email}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="비밀번호"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={() => handleEmptyInput('password')}
                        onFocus={() => clearInputMessage('password')}
                        error={!!inputMessage.password && clickedButEmpty.password}
                        helperText={inputMessage.password && clickedButEmpty.password && inputMessage.password}
                        margin="normal"
                    />

                    <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        sx={{
                            mt: 3,
                            backgroundColor: `${colors[300]}`,
                            color: 'white',
                            fontWeight: 'bold',
                            ':hover': { backgroundColor: `${colors[200]}` },
                        }}
                    >
                        로그인
                    </Button>
                </form>

                <Divider sx={{ width: '100%', mt: 4 }} />
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <Typography variant="body1">아직 회원이 아니세요?</Typography>
                    <ButtonWrapper>
                        <Button variant="text" color="primary" onClick={() => navigate('/signup')}>
                            회원가입
                        </Button>
                    </ButtonWrapper>
                </Box>
            </Box>
        </Container>
    );
}

const ButtonWrapper = styled.div`
    display: flex;
`;
