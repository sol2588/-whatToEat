import { Link } from 'react-router-dom';
import Carousel from './Carousel';
import styled from 'styled-components';
import AllRecipesView from '../Recipes/AllRecipes/AllRecipesView';
import question from '../../assets/img/main.jpeg';
import all from '../../assets/img/all.jpeg';
import createRecipe from '../../assets/img/create.jpeg';
import recommend from '../../assets/img/recommend.jpeg';
import bookmark from '../../assets/img/bookmark.jpeg';
// import Visited from '../../components/Visited/Visited';

export default function Home(): JSX.Element {
    const carouselLists = [
        {
            url: question,
            content: '오늘 뭘 먹을지 고민되지 않으신가요?',
        },
        {
            url: recommend,
            content: '하루에 3번, 오늘의 요리를 추천받아보세요.',
        },
        {
            url: bookmark,
            content: '나중에 도전하고 싶은 레시피를 저장할 수 있어요',
        },
        {
            url: all,
            content: '먹고 싶은 요리를 직접 고를수도 있어요',
        },
        {
            url: createRecipe,
            content: '직접 레시피를 작성할수 있어요',
        },
    ];
    return (
        <HomeContainer>
            <HomeMain>
                <HomeContent>
                    <h2>오늘의 레시피 추천</h2>
                    <p>아침, 점심, 저녁 메뉴를 추천받아보세요.</p>
                    <StyledLink to="/recipes/recommended">추천 레시피</StyledLink>
                    <VisitedContainer>{/*<Visited /> */}</VisitedContainer>
                </HomeContent>
                <Carousel carouselLists={carouselLists} />
            </HomeMain>
            <RecipesList>
                <h3>전체 레시피</h3>
                <AllRecipesView limit={3} />
                <StyledLink to="/recipes/all">view more</StyledLink>
            </RecipesList>
        </HomeContainer>
    );
}

const HomeContainer = styled.section``;
const HomeMain = styled.div`
    display: grid;
    grid-template-columns: 33% 67%;
`;

const HomeContent = styled.div`
    background-color: #d8dced;
    padding: 30px 70px;
    word-break: keep-all;
    h2 {
        font-size: 40px;
        border-bottom: 3px solid #3f51b515;
        margin-bottom: 20px;
        padding-bottom: 10px;
    }
    p {
        font-size: 20px;
        line-height: 24px;
        font-weight: 500;
        opacity: 0.8;
    }
    a {
        display: inline-block;
        padding: 12px 35px;
        margin-top: 40px;
        background-color: #3f51b5;
        color: #fff;
        border-radius: 50px;
        text-decoration: none;
        font-size: 14px;
        cursor: pointer;
    }
`;

const RecipesList = styled.section`
    margin-top: 60px;
    text-align: center;
    h3 {
        font-size: 40px;
        text-align: center;
    }
`;

const StyledLink = styled(Link)`
    display: inline-block;
    padding: 12px 35px;
    margin: 20px 0;
    background-color: #3f51b5;
    color: #fff;
    border-radius: 50px;
    text-decoration: none;
    font-size: 14px;
    cursor: pointer;
`;

const VisitedContainer = styled.div`
    margin-top: 20px;
`;
