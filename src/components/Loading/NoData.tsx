import styled from 'styled-components';

export default function NoData() {
    return <S_NoDataConatiner>No more recipes to load.</S_NoDataConatiner>;
}

const S_NoDataConatiner = styled.div`
    margin-top: 30px;
    font-size: 36px;
    font-weight: 600;
    display: flex;
    justify-content: center;
`;
