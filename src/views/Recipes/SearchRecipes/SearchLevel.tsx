import { MouseEvent } from 'react';
import { useFilterContext } from '../../../hooks/useFilterContext';
import { levelOptions } from '../../../common/options';
import colors from '../../../styles/colors';
import styled from 'styled-components';

export default function SearchLevel() {
    const { searchParams, actions } = useFilterContext();

    const handleLevel = (e: MouseEvent<HTMLButtonElement>) => {
        const { value } = e.currentTarget;
        actions.updateSearchParams('level', searchParams.level == value ? '' : value);
        actions.updateSearchParams('canFetchData', false);
    };
    return (
        <S_SearchItem>
            <S_SearchItemTitle>난이도를 선택해주세요</S_SearchItemTitle>
            <S_SelectBtnWrapper>
                {levelOptions.map((levelData) => (
                    <S_SelectBtn key={levelData.value} value={levelData.value} onClick={handleLevel} active={searchParams.level === levelData.value}>
                        {levelData.label}
                    </S_SelectBtn>
                ))}
            </S_SelectBtnWrapper>
        </S_SearchItem>
    );
}

const S_SearchItem = styled.li`
    margin: 8px 0 20px;
`;
const S_SearchItemTitle = styled.h4`
    font-size: 18px;
    padding: 0 8px 8px;
    min-width: 250px;

    @media screen and (min-width: 1500px) {
        font-size: 24px;
    }
    @media screen and (max-width: 1440px) {
        min-width: 200px;
    }
`;
const S_SelectBtnWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 1440px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
    @media screen and (max-width: 1024px) {
        display: flex;
    }
`;
const S_SelectBtn = styled.button<{ active: boolean }>`
    margin: 4px;
    padding: 8px;
    border: 1px solid lightgray;
    border-radius: 16px;
    color: ${(props) => (props.active ? '#fff' : '#000')};
    background-color: ${(props) => (props.active ? `${colors[200]}` : '#fff')};
    outline: none;
    cursor: pointer;

    &:hover {
        border: 1px solid ${colors[200]};
    }

    @media screen and (max-width: 1024px) {
        font-size: 12px;
    }
`;
