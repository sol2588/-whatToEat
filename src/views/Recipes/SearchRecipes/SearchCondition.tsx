import { useState, useEffect, ChangeEvent, FormEvent, KeyboardEvent, MouseEvent } from 'react';
import { SearchBox } from './SearchBox';
import { SearchResult } from './SearchResult';
import { levelOptions, timeOption } from '../../../common/options';
import { useDispatch } from 'react-redux';
import { showModal } from '../../../redux/reducer/modalSlice';
import colors from '../../../styles/colors';
import styled from 'styled-components';
import instance from '../../../utils/api/instance';
import qs from 'qs';
import Navbar from '../../../components/Navbar/Navbar.js';
import { convertLevel, convertTime } from '../../../common/convertFunc.js';

export interface RecipeProps {
    recipeId: number;
    recipeName: string;
    recipeAuthor: string;
    recipeLevel: string;
    recipeCookingTime: string;
    recipeThumbnail: string;
    recipeRating: string;
    ingredients: Record<string, string | number>[];
    instructions: Record<number | string, string>[];
}

export default function SearchCondition(): JSX.Element {
    const dispatch = useDispatch();
    const [recipes, setRecipes] = useState<RecipeProps[]>([]); // 레시피 데이터 저장
    const [searchIngredients, setSearchIngredients] = useState<string>(''); // 입력 검색어
    const [ingredientsList, setIngredientsList] = useState<string[]>([]); // 입력 검색어 저장 리스트
    const [time, setTime] = useState<string>(''); // 소요시간(select에서 선택)
    const [level, setLevel] = useState<string>(''); // 난이도(select에서 선택)
    const [offset, setOffset] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [hasSearched, setHasSearched] = useState<boolean>(false);
    const [hasMore, setHasMore] = useState<boolean>(true);

    // 재료 입력시에 검색어 리스트 입력 재료로 갱신
    useEffect(() => {
        if (searchIngredients.trim()) {
            // 입력값이 공백이 아닐 경우에만 처리
            const ingredients = searchIngredients.split(' ').filter((ingredient) => ingredient);
            setIngredientsList([...ingredients]);
        } else {
            setIngredientsList([]); // 입력값이 공백인 경우 빈 배열 설정
        }
    }, [searchIngredients]);

    // 검색어 상태관리
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchIngredients(e.target.value);
    };

    // 검색 버튼 클릭시 api 통신
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!ingredientsList.length && !time && !level) {
            dispatch(showModal({ isOpen: true, content: '재료명, 조리시간, 난이도 중 하나는 입력해주시기 바랍니다.', onConfirm: null }));
            return;
        }
        await fetchRecipes();
    };

    const fetchRecipes = async () => {
        if (isLoading || !hasMore) return;
        setIsLoading(true);
        try {
            const response: any = await instance.get(`/recipes/search`, {
                params: {
                    ingredientName: ingredientsList,
                    ...(time && { recipeCookingTime: time }),
                    ...(level && { recipeLevel: level }),
                    page: offset,
                    size: 15,
                },
                paramsSerializer: (params) => {
                    return qs.stringify(params, { arrayFormat: 'repeat' });
                },
            });

            if (response.data.code == 'OK') {
                const totalRecipes = response.data.data.totalRecipes;
                const newRecipes: RecipeProps[] = response.data.data.recipes.map((recipe: RecipeProps) => ({
                    ...recipe,
                    recipeLevel: convertLevel(recipe.recipeLevel),
                    recipeCookingTime: convertTime(recipe.recipeCookingTime),
                }));
                setRecipes((prev) => [...prev, ...newRecipes]);
                setOffset((prev) => prev + 1);
                setHasSearched(true);
                dispatch(showModal({ isOpen: true, content: response.data.message, onConfirm: null }));

                if (recipes.length + newRecipes.length >= totalRecipes) {
                    setHasMore(false); // 더 이상 불러올 데이터가 없으면 false로 설정
                }
            } else {
                dispatch(showModal({ isOpen: true, content: '재료명을 다시 입력해주시기 바랍니다.', onConfirm: null }));
            }
        } catch (err) {
            console.log('레시피 검색 error : ', err);
            dispatch(showModal({ isOpen: true, content: '검색 중 오류가 발생했습니다. 다시 시도해주세요.', onConfirm: null }));
        } finally {
            setIsLoading(false);
        }
    };
    console.log(ingredientsList);

    // 재료 입력후 enter 키를 누른 경우 handleSumbit 호출
    const handleKeyDown = async (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key == 'Enter') {
            await handleSubmit(e);
        }
    };

    // 난이도를 변경하는 핸들러
    const handleLevel = (e: MouseEvent<HTMLButtonElement>) => {
        const { value } = e.currentTarget;
        setLevel(value);
    };

    // 소요시간을 변경하는 핸들러
    const handleTime = (e: MouseEvent<HTMLButtonElement>) => {
        const { value } = e.currentTarget;
        setTime(value);
    };

    const handleInit = () => {
        setTime('');
        setLevel('');
        setIngredientsList([]);
        setSearchIngredients('');
    };

    return (
        <S_ConditionContainer>
            <S_ConditionList>
                <S_SearchItem>
                    <S_SearchItemTitle>재료를 입력해주세요.</S_SearchItemTitle>
                    <SearchBox value={searchIngredients} onChange={handleChange} handleKeyDown={handleKeyDown} />
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
                        <S_SearchItemTitle>난이도를 선택해 주세요.</S_SearchItemTitle>
                        {timeOption.map((timeData) => (
                            <S_SelectBtn key={timeData.value} value={timeData.value} onClick={handleTime} active={time == timeData.value}>
                                {timeData.label}
                            </S_SelectBtn>
                        ))}
                    </S_SearchItem>
                    <S_SearchItem>
                        <S_SearchItemTitle>조리시간을 선택해주세요</S_SearchItemTitle>
                        {levelOptions.map((levelData) => (
                            <S_SelectBtn key={levelData.value} value={levelData.value} onClick={handleLevel} active={level == levelData.value}>
                                {levelData.label}
                            </S_SelectBtn>
                        ))}
                    </S_SearchItem>
                </S_SearchTimeLevelWrapper>
                <S_ButtonWrapper>
                    <S_SearchButton type="button" searchBtn={false} onClick={handleInit}>
                        초기화
                    </S_SearchButton>
                    <S_SearchButton type="button" onClick={handleSubmit} searchBtn={true} disabled={ingredientsList.length == 0 && !level && !time}>
                        검색
                    </S_SearchButton>
                </S_ButtonWrapper>
                <p>재료명, 조리시간, 난이도 중 필요한 정보를 입력하여주시기 바랍니다. </p>
            </S_ConditionList>

            <SearchResult hasMore={hasMore} recipes={recipes} isLoading={isLoading} hasSearched={hasSearched} fetchRecipes={fetchRecipes} />
            <Navbar />
        </S_ConditionContainer>
    );
}
const S_ConditionContainer = styled.div`
    padding: 38px;
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
    }
`;
const S_SearchItem = styled.li`
    margin: 8px 0 20px;
`;
const S_SearchItemTitle = styled.h4`
    font-size: 18px;
    padding: 0 8px 8px;
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
`;

const S_ButtonWrapper = styled.div`
    width: 80%;
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
        color: #fff;
        background-color: ${colors[200]};
        border: 1px solid ${colors[200]};
    }
`;
