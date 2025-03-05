import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useFilterContext } from '../../../hooks/useFilterContext.js';
import { showModal } from '../../../redux/reducer/modalSlice';
import SearchBar from './SearchBar';
import SearchLevel from './SearchLevel.js';
import SearchTime from './SearchTime.js';
import colors from '../../../styles/colors';
import styled from 'styled-components';

export default function SearchFilter(): JSX.Element {
    const { searchParams, actions } = useFilterContext();
    const dispatch = useDispatch();

    // 검색어에 따른 재료 리스트 설정, 입력값이 없으면 빈배열
    useEffect(() => {
        if (searchParams.searchTerm.trim()) {
            const ingredients = searchParams.searchTerm.split(' ').filter(Boolean);
            actions.updateSearchParams('ingredientsList', ingredients);
        } else {
            actions.updateSearchParams('ingredientsList', []);
        }
    }, [searchParams.searchTerm, actions]);

    const handleSearch = () => {
        if (!searchParams.ingredientsList.length && !searchParams.time && !searchParams.level) {
            dispatch(
                showModal({
                    isOpen: true,
                    content: '재료명, 조리시간, 난이도 중 하나는 입력해주시기 바랍니다.',
                    onConfirm: null,
                }),
            );
            return;
        }
        actions.updateSearchParams('canFetchData', true);
        actions.updateSearchParams('isSearching', true);
    };

    return (
        <S_ConditionList>
            <S_SearchItem>
                <S_SearchItemTitle>재료를 입력해주세요.</S_SearchItemTitle>
                <SearchBar handleSubmit={handleSearch} />
                {searchParams.ingredientsList.length != 0 && (
                    <S_SearchIngredientsList length={searchParams.ingredientsList.length}>
                        {searchParams.ingredientsList.map((ingredient, idx) => (
                            <span key={idx}>{ingredient}</span>
                        ))}
                    </S_SearchIngredientsList>
                )}
            </S_SearchItem>
            <S_SearchTimeLevelWrapper>
                <SearchLevel />
                <SearchTime />
            </S_SearchTimeLevelWrapper>
            <S_ButtonWrapper>
                <S_SearchButton
                    type="button"
                    searchBtn={false}
                    onClick={() => {
                        actions.handleInit();
                        actions.updateSearchParams('ingredientsList', []);
                    }}
                >
                    초기화
                </S_SearchButton>
                <S_SearchButton
                    type="button"
                    onClick={handleSearch}
                    searchBtn={true}
                    disabled={searchParams.ingredientsList.length === 0 && !searchParams.level && !searchParams.time}
                >
                    검색
                </S_SearchButton>
            </S_ButtonWrapper>
            <p>재료명, 조리시간, 난이도 중 필요한 정보를 입력하여주시기 바랍니다. </p>
        </S_ConditionList>
    );
}

const S_ConditionList = styled.ul`
    padding: 40px;
    margin: 0 auto;
    width: 80%;
    list-style: none;
    border: 1px solid #f3f3f3;
    border-radius: 16px;
    background-color: #f9fafc;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);

    p {
        margin-top: 20px;
        font-weight: 900;
        font-size: 12px;
        color: #f66767;

        @media screen and (min-width: 1500px) {
            font-size: 16px;
        }
    }
`;
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
const S_SearchTimeLevelWrapper = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    position: relative;

    &::after {
        content: '';
        width: 100%;
        position: absolute;
        top: -10%;
        border: 0.8px solid lightgray;
    }
    @media screen and (max-width: 1024px) {
        flex-direction: column;
    }
`;

const S_SearchIngredientsList = styled.ul<{ length: number }>`
    margin-top: 4px;
    display: flex;

    span {
        padding: 8px;
        margin: 4px;
        color: #fff;
        background-color: ${colors[200]};
        border-radius: 20px;
    }
    @media screen and (max-width: 1024px) {
        font-size: 12px;
        margin-bottom: 8px;
    }
`;

const S_ButtonWrapper = styled.div`
    margin: 30px auto 0px;
    display: flex;
    justify-content: space-between;
`;
const S_SearchButton = styled.button<{ searchBtn: boolean }>`
    padding: 10px 80px;
    outline: none;
    border: 1px solid lightgray;
    border-radius: 8px;
    background-color: ${(props) => (props.searchBtn ? `${colors[200]}` : '#fff')};
    cursor: pointer;

    &:hover {
        color: #fff;
        background-color: ${colors[200]};
        border: 1px solid ${colors[200]};
    }

    &:disabled {
        background-color: lightgray;
        color: #999;
        cursor: not-allowed;
    }
    @media screen and (min-width: 1500px) {
        font-size: 18px;
    }
    @media screen and (max-width: 1025px) {
        padding: 10px;
        min-width: 150px;
    }
    @media screen and (max-width: 769px) {
        min-width: 100px;
    }
`;
