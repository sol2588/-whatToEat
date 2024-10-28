import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components';

export default function Loading() {
    return (
        <S_LoadingConatiner>
            <span>잠시만 기다려주세요</span>
            <CircularProgress />
        </S_LoadingConatiner>
    );
}

const S_LoadingConatiner = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
        margin-bottom: 30px;
        font-size: 30px;
        font-weight: 600;
    }
`;
