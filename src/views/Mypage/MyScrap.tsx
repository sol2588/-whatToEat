import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { useBookmark } from '../../hooks/useBookmark';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa6';
import { Grid, Pagination, Box } from '@mui/material';
import colors from '../../styles/colors';
import styled from 'styled-components';

interface MyscrapProps {
    scrapPage: number;
    setScrapPage: React.Dispatch<React.SetStateAction<number>>;
    totalPage: number;
}

export default function MyScrap({ scrapPage, setScrapPage, totalPage }: MyscrapProps) {
    const scrapedRecipes = useSelector((state: RootState) => state.book.booklist);
    const { handleClickBookmark } = useBookmark();

    return (
        <S_MyScrap>
            <S_ScrapWrapper>
                <S_Subtitle>찜한 레시피</S_Subtitle>
                <Grid container spacing={2}>
                    {scrapedRecipes.length > 0 ? (
                        scrapedRecipes.map((scrapedRecipe) => (
                            <Grid item xs={12} sm={6} md={6} key={scrapedRecipe.recipeId}>
                                <S_MyFigure>
                                    <S_thumbnail src={scrapedRecipe.recipeThumbnail} alt="스크랩 이미지" />
                                    <M_Linked to={`/recipes/${scrapedRecipe.recipeId}`}>
                                        <S_MyFigcaption>{scrapedRecipe.recipeName}</S_MyFigcaption>
                                    </M_Linked>
                                    <S_BookmarkIcons onClick={(e) => handleClickBookmark(e, scrapedRecipe.recipeId)}>
                                        {scrapedRecipe ? <FaBookmark /> : <FaRegBookmark />}
                                    </S_BookmarkIcons>
                                </S_MyFigure>
                            </Grid>
                        ))
                    ) : (
                        <div style={{ marginTop: '16px', marginLeft: '20px' }}>
                            <p>아직 찜한 레시피가 없습니다.</p>
                        </div>
                    )}
                </Grid>
            </S_ScrapWrapper>
            <S_PagenationWrapper>
                {scrapedRecipes.length > 0 ? (
                    <S_PaginationContainer>
                        <Pagination
                            count={totalPage} // 스크랩 레시피 총 페이지 수
                            page={scrapPage}
                            onChange={(_, page) => setScrapPage(page)} // 페이지 변경
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
        </S_MyScrap>
    );
}

const S_MyScrap = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;
const S_ScrapWrapper = styled.div`
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
const M_Linked = styled(Link)({
    display: 'block',
    textDecorationLine: 'none',
    color: '#000',

    '&:hover': {
        color: colors[400],
        cursor: 'pointer',
    },
});
const S_thumbnail = styled.img`
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    flex-shrink: 0;
`;
const S_BookmarkIcons = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    color: ${colors[400]};
    cursor: pointer;
`;
