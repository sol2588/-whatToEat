import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BsCartCheckFill } from 'react-icons/bs';
import RecipeMetaData from '../../../components/Recipe/RecipeMetaData';
import CommentsView from '../../Comments/CommentsView';
import { convertLevel, convertTime } from '../../../common/convertFunc';
import styled from 'styled-components';
import axios from 'axios';
import { RootState } from '../../../redux/store/store';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { useRecipeDelete } from '../../../hooks/useRecipeDelete';
import Loading from '../../../components/Loading/Loading';

interface Props {
    recipeId: number;
    recipeAuthor: string;
    recipeName: string;
    recipeLevel: string;
    recipeCookingTime: string;
    recipeRating: number;
    recipeThumbnail: string;
    recipeIngredients: Record<string, string>[];
    recipesManuals: Record<string, string>[];
}

export default function DetailRecipe(): JSX.Element {
    const { id } = useParams();
    const [recipe, setRecipe] = useState<Props | null>(null);
    const [message, setMessage] = useState<string>();
    //게시물삭제
    const { handleMyRecipeDelete } = useRecipeDelete();

    //로그인된 유저 닉네임
    const nickname = useSelector((state: RootState) => state.user.value.nickname);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/recipes/${id}`);
                if (response.data.code === 'OK') {
                    const data = response.data.data;
                    const convertData = {
                        ...data,
                        recipeLevel: convertLevel(data.recipeLevel),
                        recipeCookingTime: convertTime(data.recipeCookingTime),
                    };

                    setRecipe(convertData);
                    setMessage(response.data.message);
                }
            } catch (err: any) {
                console.log(err);
                setMessage(err.response.data.message);
            }
        };
        fetchData();
    }, [id]);

    // recipeAuthor와 loggedNickname이 일치할 경우 수정, 삭제 버튼을 보여줌
    const isAuthor = recipe && recipe.recipeAuthor === nickname;
    console.log('loggedNickname:', nickname);
    console.log('recipeAuthor :', recipe && recipe.recipeAuthor);
    console.log('isAuthor :', isAuthor);
    console.log('detailPage message:', message);

    if (!recipe) {
        return <Loading />;
    }

    return (
        <S_DetailContainer>
            <S_DetailRecipeWrapper>
                {/* 요리명, 썸네일 */}
                <S_DetailMain>
                    <S_DetailMainFigure>
                        <img src={recipe.recipeThumbnail} alt="썸네일 이미지" />
                        <S_DetailMainFigcaption>{recipe.recipeName}</S_DetailMainFigcaption>
                    </S_DetailMainFigure>
                    <S_DetailMainInfo>
                        <span>레시피 작성자 : {recipe.recipeAuthor}</span>
                        <RecipeMetaData time={recipe.recipeCookingTime} level={recipe.recipeLevel} rate={recipe.recipeRating} />
                    </S_DetailMainInfo>
                    {isAuthor && (
                        <S_DetailBtnWrapper>
                            <S_StyledLink to={`/recipes/update/${id}`}>수정</S_StyledLink>
                            <S_StyledButton onClick={() => handleMyRecipeDelete(Number(id))}>삭제</S_StyledButton>
                        </S_DetailBtnWrapper>
                    )}
                </S_DetailMain>
                <S_DetailIngredientsWrapper>
                    <S_DetailSubtitle>Ingredients</S_DetailSubtitle>
                    <DetailIngredientsTable>
                        <thead>
                            <tr>
                                <th>재료</th>
                                <th>개수</th>
                                <th>구매</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recipe.recipeIngredients &&
                                recipe.recipeIngredients.map((ingredient, idx) => (
                                    <tr key={`${ingredient.ingredientName}+${idx}`}>
                                        <td>{ingredient.ingredientName}</td>
                                        <td>{ingredient.ingredientQuantity}</td>
                                        <td>
                                            <Link to={`https://www.coupang.com/np/search?component=&q=${ingredient.ingredientName}`}>
                                                <S_CartIcon />
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </DetailIngredientsTable>
                </S_DetailIngredientsWrapper>
                {/* 요리방법 */}
                <S_DetailSubtitle>Directions</S_DetailSubtitle>
                <S_DetailRecipeInstruction>
                    {recipe.recipesManuals &&
                        recipe.recipesManuals.map((step, idx) => (
                            <S_DetailRecipeFigure key={idx} idx={idx}>
                                <img src={`${step.recipeOrderImage}`} alt="단계별 이미지" />
                                <S_DetailRecipeFigcapton>
                                    {`step${idx + 1}`}
                                    <br />
                                    {`${step.recipeOrderContent}`}
                                </S_DetailRecipeFigcapton>
                            </S_DetailRecipeFigure>
                        ))}
                </S_DetailRecipeInstruction>

                <CommentsView />
            </S_DetailRecipeWrapper>
        </S_DetailContainer>
    );
}
const S_DetailContainer = styled.section`
    width: 100vw;
    height: 100%;
    background-color: #f9f9f9;
`;
const S_DetailRecipeWrapper = styled.div`
    margin: 0 auto;
    padding-top: 50px;
    width: 70vw;
    height: 100%;
    background-color: #fff;
`;
const S_DetailMain = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 20px solid #f9f9f9;
`;
const S_DetailMainInfo = styled.div`
    display: flex;
    gap: 16px;
    justify-content: space-between;
    align-items: center;
`;
const S_DetailBtnWrapper = styled.div`
    display: flex;
    gap: 16px;
    position: absolute;
    top: 10%;
    right: 5%;
`;
const S_DetailMainFigure = styled.figure`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        max-width: 60%;
        height: auto;
        object-fit: cover;
        border: 0.8 solid #656565;
        border-radius: 8px;
    }
`;

const S_DetailMainFigcaption = styled.figcaption`
    margin-bottom: 20px;
    font-size: 38px;
    font-weight: 700;
    text-align: start;
    color: #622b18;
    flex-grow: 1;
    order: -1;
`;
const S_DetailSubtitle = styled.h4`
    margin: 40px 0 30px;
    font-size: 28px;
    text-align: center;
`;

const S_DetailRecipeInstruction = styled.div`
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(2, 1fr);
    justify-items: stretch;
    border-bottom: 20px solid #f9f9f9;
`;
const S_DetailRecipeFigure = styled.figure<{ idx: number }>`
    display: flex;
    flex-grow: 0;
    flex-direction: column;
    align-items: center;
    text-align: center;
    img {
        display: block;
        width: 80%;
        height: 250px;
        object-fit: cover;
        border: 1px solid #a59d9d;
        border-top-left-radius: ${({ idx }) => (idx % 2 === 0 ? '40%' : '5%')};
        border-top-right-radius: ${({ idx }) => (idx % 2 === 0 ? '5%' : '40%')};
        border-bottom-left-radius: ${({ idx }) => (idx % 2 === 0 ? '5%' : '40%')};
        border-bottom-right-radius: ${({ idx }) => (idx % 2 === 0 ? '40%' : '5%')};
    }

    @media screen and (min-width: 1400px) {
        img {
            max-height: 300px;
        }
    }
`;
const S_DetailRecipeFigcapton = styled.figcaption`
    margin-bottom: 16px;
    line-height: 2rem;
    word-break: keep-all;
    font-size: 16px;

    @media screen and (min-width: 1400px) {
        font-size: 18px;
    }
`;

const S_DetailIngredientsWrapper = styled.div`
    margin: 16px auto;
    text-align: center;
    border-bottom: 20px solid #f9f9f9;
`;

const DetailIngredientsTable = styled.table`
    margin: 0 auto 40px;
    border-collapse: collapse;
    th,
    td {
        text-align: center;
        padding: 10px;
        border: 1px solid #656565;
    }
    th {
        background-color: #f2f2f2;
        border-bottom: 2px double #622b18;
        font-weight: normal;
    }
    td:first-child,
    td:last-child,
    th:first-child,
    th:last-child {
        border-left: none;
        border-right: none;
    }
    a {
        text-decoration: none;
        color: #000;
    }
`;

const S_CartIcon = styled(BsCartCheckFill)`
    &:hover {
        color: #efb63e;
    }
    cursor: pointer;
`;

const S_StyledLink = styled(Link)`
    margin-right: 8px;
    font-size: 16px;
    width: 50px;
    height: 30px;
    border: none;
    border-radius: 8px;
    color: #fff;
    background-color: #0173f6;
    cursor: pointer;
`;

const S_StyledButton = styled(Button)`
    font-size: 16px;
    width: 50px;
    height: 30px;
    border: none;
    border-radius: 8px;
    color: #fff;
    background-color: #ff6b6b;
    cursor: pointer;
`;
