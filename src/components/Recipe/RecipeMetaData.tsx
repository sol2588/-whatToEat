import { FaStairs, FaRegClock, FaRegStar } from 'react-icons/fa6';
import styled from 'styled-components';

interface Props {
    time: string;
    level: string;
    rate: number;
}
export default function RecipeMetaData({ time, level, rate }: Props): JSX.Element {
    return (
        <S_RecipeInfo>
            <FaRegClock />
            <S_RecipeInfoItem>{time}</S_RecipeInfoItem>
            <FaStairs />
            <S_RecipeInfoItem>{level}</S_RecipeInfoItem>
            <FaRegStar />
            <S_RecipeInfoItem>{rate}</S_RecipeInfoItem>
        </S_RecipeInfo>
    );
}

const S_RecipeInfo = styled.div`
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const S_RecipeInfoItem = styled.span`
    margin: 0 8px 0 5px;
`;
