import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Carousel from './Carousel';
import styled from 'styled-components';
import AllRecipesConatiner from '../Recipes/AllRecipes/AllRecipesConatiner';
import question from '../../assets/img/main.jpeg';
import all from '../../assets/img/all.jpeg';
import createRecipe from '../../assets/img/create.jpeg';
import recommend from '../../assets/img/recommend.jpeg';
import bookmark from '../../assets/img/bookmark.jpeg';
// import Visited from '../../components/Visited/Visited';

const CAROUSEL_LISTS = [
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

export default function Home(): JSX.Element {
    const [limit, setLimit] = useState<number>(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && window.innerWidth < 1025) {
                setLimit(2);
            } else if (window.innerWidth < 769) {
                setLimit(1);
            } else {
                setLimit(3);
            }
        };
        window.addEventListener('resize', handleResize);
    }, [limit]);

    return (
        <section>
            <HomeMain>
                <HomeContent>
                    <h2>오늘의 레시피 추천</h2>
                    <p>아침, 점심, 저녁 메뉴를 추천받아보세요.</p>
                    <StyledLink to="/recipes/recommended">추천 레시피</StyledLink>
                    {/* <VisitedContainer><Visited /></VisitedContainer> */}
                </HomeContent>
                <Carousel carouselLists={CAROUSEL_LISTS} />
            </HomeMain>
            <RecipesList>
                <h3>전체 레시피</h3>
                <AllRecipesConatiner limit={limit} />
                <StyledLink to="/recipes/all">view more</StyledLink>
            </RecipesList>
        </section>
    );
}

const HomeMain = styled.div`
    padding: 30px 70px;
    background-color: #d8dced;
    display: grid;
    grid-template-columns: 27% 73%;

    @media screen and (max-width: 769px) {
        display: block;
    }
`;
const HomeContent = styled.div`
    padding-right: 30px;
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

    @media screen and (max-width: 769px) {
        padding-bottom: 0;
        text-align: center;
        border-bottom: 3px solid #3f51b515;
        h2 {
            border-bottom: 0;
            margin-bottom: 10px;
            padding-bottom: 0;
        }
        a {
            margin-top: 16px;
        }
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

// const VisitedContainer = styled.div`
//     margin-top: 20px;
// `;
