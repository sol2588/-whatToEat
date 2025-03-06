import { Link, useNavigate } from 'react-router-dom';
import useNotify from '../../hooks/useNotify';
import { useRecipeDelete } from '../../hooks/useRecipeDelete';
import ToggleAlarm from '../../components/Alarm/ToggleAlarm';
import { Grid, Pagination, Box } from '@mui/material';
import colors from '../../styles/colors';
import styled from 'styled-components';

interface MyRecipe {
    myRecipeId: number;
    myRecipeName: string;
    myRecipeThumbnail: string;
}

interface MyscrapProps {
    myRecipes: MyRecipe[];
    setMyRecipes: React.Dispatch<React.SetStateAction<MyRecipe[]>>;
    myRecipesPage: number;
    setMyRecipesPage: React.Dispatch<React.SetStateAction<number>>;
    totalPage: number;
}

export default function MyRecipes({ myRecipes, setMyRecipes, myRecipesPage, setMyRecipesPage, totalPage }: MyscrapProps) {
    const { notifyList } = useNotify();
    const { handleMyRecipeDelete } = useRecipeDelete(setMyRecipes);
    const navigate = useNavigate();

    return (
        <S_MyPosting>
            <S_MyRecipeWrapper>
                <S_Subtitle>작성한 레시피</S_Subtitle>
                <Grid container spacing={2}>
                    {myRecipes.length > 0 ? (
                        myRecipes.map((myRecipe) => (
                            <Grid item xs={12} sm={6} md={6} key={myRecipe.myRecipeId}>
                                <S_MyFigure>
                                    <S_MyRecipeToggleButton>
                                        {notifyList && <ToggleAlarm id={myRecipe.myRecipeId} lists={notifyList} />}
                                    </S_MyRecipeToggleButton>
                                    <S_button onClick={() => handleMyRecipeDelete(myRecipe.myRecipeId)}>X</S_button>

                                    <S_thumbnail src={myRecipe.myRecipeThumbnail} alt="작성 레시피 이미지" />
                                    <M_Linked to={`/recipes/${myRecipe.myRecipeId}`}>
                                        <S_MyFigcaption>{myRecipe.myRecipeName}</S_MyFigcaption>
                                    </M_Linked>
                                </S_MyFigure>
                            </Grid>
                        ))
                    ) : (
                        <div style={{ marginTop: '16px', marginLeft: '20px' }}>
                            <p>아직 작성한 레시피가 없습니다.</p>
                            <S_CreateButton onClick={() => navigate('/recipes/create')}>레시피 작성하러 가기</S_CreateButton>
                        </div>
                    )}
                </Grid>
            </S_MyRecipeWrapper>
            <S_PagenationWrapper>
                {myRecipes.length > 0 ? (
                    <S_PaginationContainer>
                        <Pagination
                            count={totalPage} // 작성한 레시피 총 페이지 수
                            page={myRecipesPage}
                            onChange={(_, page) => setMyRecipesPage(page)} // 페이지 변경
                            variant="outlined"
                            color="primary"
                            shape="rounded"
                            size="large"
                            sx={{ mt: 2 }}
                        />
                    </S_PaginationContainer>
                ) : (
                    <Box></Box>
                )}
            </S_PagenationWrapper>
        </S_MyPosting>
    );
}

const S_MyPosting = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;
const S_MyRecipeWrapper = styled.div`
    flex-grow: 1;
`;
const S_Subtitle = styled.p`
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 8px;
`;
const S_MyFigure = styled.figure`
    position: relative;
    background-color: #fff;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;
    width: 100%;
    max-height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
        transform: translateY(-5px);
    }
`;
const S_MyRecipeToggleButton = styled.span`
    position: absolute;
    top: 10px;
    left: 10px;
`;
const S_button = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    color: black;
    border: none;
    cursor: pointer;
    &:hover {
        color: ${colors[400]};
        font-weight: bold;
    }
`;
const S_thumbnail = styled.img`
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    flex-shrink: 0;
`;
const M_Linked = styled(Link)({
    display: 'block',
    textDecorationLine: 'none',
    color: '#000',

    '&:hover': {
        color: colors[400],
        cursor: 'pointer',
    },
});
const S_MyFigcaption = styled.figcaption`
    margin-top: 8px;
    text-align: center;
    line-height: 22px;
    min-height: 40px;
    word-break: keep-all;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
`;
const S_CreateButton = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    background-color: #ff6f61;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: auto;
    margin-top: 12px;

    &:hover {
        background-color: rgba(255, 0, 0, 1);
    }
`;
const S_PaginationContainer = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
`;
const S_PagenationWrapper = styled.div`
    margin-top: auto;
    display: flex;
    justify-content: center;
`;
