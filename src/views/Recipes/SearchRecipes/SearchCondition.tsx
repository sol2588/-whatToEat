import { useState, useEffect, ChangeEvent, FormEvent, KeyboardEvent, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { SearchBox } from './SearchBox';
import { SearchResult } from './SearchResult';
import { levelOptions, timeOption } from '../../../common/options';
import { convertLevel, convertTime } from '../../../common/convertFunc.js';
import { showModal } from '../../../redux/reducer/modalSlice';
import { useGetRecipes } from '../../../hooks/useGetRecipes.js';
import { RecipeProps } from '../../../types/recipe.js';
import colors from '../../../styles/colors';
import styled from 'styled-components';

export default function SearchCondition(): JSX.Element {
    const dispatch = useDispatch();
    const [recipes, setRecipes] = useState<RecipeProps[]>([]); // 레시피 데이터 저장
    const [searchIngredients, setSearchIngredients] = useState<string>(''); // 입력 검색어
    const [ingredientsList, setIngredientsList] = useState<string[]>([]); // 입력 검색어 저장 리스트
    const [time, setTime] = useState<string>(''); // 소요시간(select에서 선택)
    const [level, setLevel] = useState<string>(''); // 난이도(select에서 선택)

    const { data, isFetching, hasNextPage, fetchNextPage } = useGetRecipes('search', ingredientsList, time, level);

    console.log(data);

    // 검색어에 따른 재료 리스트 설정
    useEffect(() => {
        // 입력값이 있는 경우
        if (searchIngredients.trim()) {
            const ingredients = searchIngredients.split(' ').filter((ingredient) => ingredient);
            setIngredientsList(ingredients);
            // 입력값이 없는 경우 빈배열 설정
        } else {
            setIngredientsList([]);
        }
    }, [searchIngredients]);

    // 검색레시피 불러오기
    const getSearchedRecipes = () => {
        setRecipes(
            data?.pages.flatMap((page) =>
                page.recipes.map((recipe: RecipeProps) => ({
                    ...recipe,
                    recipeLevel: convertLevel(recipe.recipeLevel),
                    recipeCookingTime: convertTime(recipe.recipeCookingTime),
                })),
            ) || [],
        );
    };

    // handler
    // 1. 검색 재료 저장
    const handleChangeSearchIngre = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchIngredients(e.target.value);
    };
    // 2. 검색 : 버튼
    const handleSubmitSearch = async (e: FormEvent) => {
        e.preventDefault();
        if (!ingredientsList.length && !time && !level) {
            dispatch(showModal({ isOpen: true, content: '재료명, 조리시간, 난이도 중 하나는 입력해주시기 바랍니다.', onConfirm: null }));
            return;
        }
        await getSearchedRecipes();
    };
    // 3. 검색 : enterKey
    const handleKeyDown = async (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key == 'Enter') {
            await handleSubmitSearch(e);
        }
    };
    // 4. 검색 초기화
    const handleInit = () => {
        setTime('');
        setLevel('');
        setSearchIngredients('');
        setIngredientsList([]);
        setRecipes([]);
    };
    // 5. 난이도 변경
    const handleLevel = (e: MouseEvent<HTMLButtonElement>) => {
        if (recipes.length > 0) {
            handleInit();
        }
        const { value } = e.currentTarget;
        if (level == value) {
            setLevel('');
        } else {
            setLevel(value);
        }
    };
    // 6. 소요시간 변경
    const handleTime = (e: MouseEvent<HTMLButtonElement>) => {
        if (recipes.length > 0) {
            handleInit();
        }
        const { value } = e.currentTarget;
        if (time == value) {
            setTime('');
        } else {
            setTime(value);
        }
    };

    return (
        <S_ConditionContainer>
            <S_ConditionList>
                <S_SearchItem>
                    <S_SearchItemTitle>재료를 입력해주세요.</S_SearchItemTitle>
                    <SearchBox value={searchIngredients} onChange={handleChangeSearchIngre} handleKeyDown={handleKeyDown} />
                    {ingredientsList.length != 0 && (
                        <S_SearchIngredientsList length={ingredientsList.length}>
                            {ingredientsList.map((ingredient, idx) => (
                                <span key={idx}>{ingredient}</span>
                            ))}
                        </S_SearchIngredientsList>
                    )}
                </S_SearchItem>
                <S_SearchTimeLevelWrapper>
                    <S_SearchItem>
                        <S_SearchItemTitle>난이도를 선택해주세요</S_SearchItemTitle>
                        <S_SelectBtnWrapper>
                            {levelOptions.map((levelData) => (
                                <S_SelectBtn key={levelData.value} value={levelData.value} onClick={handleLevel} active={level == levelData.value}>
                                    {levelData.label}
                                </S_SelectBtn>
                            ))}
                        </S_SelectBtnWrapper>
                    </S_SearchItem>
                    <S_SearchItem>
                        <S_SearchItemTitle>조리시간을 선택해 주세요.</S_SearchItemTitle>
                        <S_SelectBtnWrapper>
                            {timeOption.map((timeData) => (
                                <S_SelectBtn key={timeData.value} value={timeData.value} onClick={handleTime} active={time == timeData.value}>
                                    {timeData.label}
                                </S_SelectBtn>
                            ))}
                        </S_SelectBtnWrapper>
                    </S_SearchItem>
                </S_SearchTimeLevelWrapper>
                <S_ButtonWrapper>
                    <S_SearchButton type="button" searchBtn={false} onClick={handleInit}>
                        초기화
                    </S_SearchButton>
                    <S_SearchButton
                        type="button"
                        onClick={handleSubmitSearch}
                        searchBtn={true}
                        disabled={ingredientsList.length == 0 && !level && !time}
                    >
                        검색
                    </S_SearchButton>
                </S_ButtonWrapper>
                <p>재료명, 조리시간, 난이도 중 필요한 정보를 입력하여주시기 바랍니다. </p>
            </S_ConditionList>

            <SearchResult isFetching={isFetching} hasNextPage={hasNextPage} recipes={recipes} fetchNextPage={fetchNextPage} />
        </S_ConditionContainer>
    );
}
const S_ConditionContainer = styled.div`
    padding: 30px;
`;
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
