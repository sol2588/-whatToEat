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
import colors from '../../../styles/colors';
import Loading from '../../../components/Loading/Loading';

interface Props {
    recipeId: number;
    recipeAuthor: string;
    recipeName: string;
    recipeLevel: string;
    recipeCookingTime: string;
    recipeRating: string;
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
        <S_DetailRecipeContainer>
            {/* 요리명, 썸네일 */}
            <S_DetailMain>
                <S_DetailMainFigure>
                    <img src={recipe.recipeThumbnail} alt="썸네일 이미지" />
                    <S_DetailMainFigcaption>{recipe.recipeName}</S_DetailMainFigcaption>
                </S_DetailMainFigure>
                <span>레시피 작성자 : {recipe.recipeAuthor}</span>
                <RecipeMetaData time={recipe.recipeCookingTime} level={recipe.recipeLevel} rate={recipe.recipeRating} />
                {isAuthor && (
                    <S_DetailBtnWrapper>
                        <S_StyledLink to={`/recipes/update/${id}`}>수정</S_StyledLink>
                        <S_StyledButton onClick={() => handleMyRecipeDelete(Number(id))}>삭제</S_StyledButton>
                    </S_DetailBtnWrapper>
                )}
            </S_DetailMain>
            {/* 요리방법 */}
            <S_DetailRecipeInstruction>
                <S_DetailSubtitle>Directions</S_DetailSubtitle>
                {recipe.recipesManuals &&
                    recipe.recipesManuals.map((step, idx) => (
                        <S_DetailRecipeFigure key={idx}>
                            <img src={`${step.recipeOrderImage}`} alt="단계별 이미지" />
                            <S_DetailRecipeFigcapton>
                                {`step${idx + 1}`}
                                <br />
                                {`${step.recipeOrderContent}`}
                            </S_DetailRecipeFigcapton>
                        </S_DetailRecipeFigure>
                    ))}
            </S_DetailRecipeInstruction>

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
            <CommentsView />
        </S_DetailRecipeContainer>
    );
}

const S_DetailRecipeContainer = styled.section`
    margin-top: 50px;
    height: 100vh;
    width: 80vw;
`;
const S_DetailMain = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;
const S_DetailBtnWrapper = styled.div`
    display: flex;
    gap: 16px;
    position: absolute;
    top: 20%;
    right: 20%;
`;
const S_DetailMainFigure = styled.figure`
    display: flex;
    align-items: flex-start;
    img {
        max-width: 50%;
        height: auto;
        object-fit: cover;
        border: 0.8 solid #656565;
    }
`;

const S_DetailMainFigcaption = styled.figcaption`
    font-size: 32px;
    color: #622b18;
    text-align: start;
    order: -1;
    flex-grow: 1;
`;
const S_DetailSubtitle = styled.h4`
    margin-top: 40px;
    font-size: 28px;
`;

const S_DetailRecipeInstruction = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 16px;
`;
const S_DetailRecipeFigure = styled.figure`
    width: 40%;
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    img {
        display: block;
        height: 200px;
        border: 1px solid #656565;
    }
`;
const S_DetailRecipeFigcapton = styled.figcaption`
    margin-bottom: 16px;
    line-height: 2rem;
    order: -1;
`;

const S_DetailIngredientsWrapper = styled.div`
    margin: 16px;
    text-align: center;
`;

const DetailIngredientsTable = styled.table`
    border-collapse: collapse;
    width: 100%;
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
    text-decoration: none;
    margin: 10px;
    color: ${colors[300]};
    font-size: 1.2rem;
`;

const S_StyledButton = styled(Button)`
    color: ${colors[300]};
    font-size: 1.2rem;
    margin-left: 10px;
`;
