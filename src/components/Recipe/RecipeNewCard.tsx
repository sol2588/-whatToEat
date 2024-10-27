import { useState, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import RecipeMetaData from './RecipeMetaData';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa6';
import colors from '../../styles/colors';
import useAuthToken from '../../hooks/useAuthToken';
import instance from '../../utils/api/instance';
import useHeaderLogic from '../../hooks/useHeaderLogic';
import styled from 'styled-components';

// ! main 페이지가 아닌 all isMain을 콘솔에 찍으면 false값이 찍힘 -> 최적화 방안 생각(RecipeCard에서는 4번 : main, all, recipeList, recipeCard인듯

interface CardProps {
    page?: string;
    recipeId: number;
    recipeName: string;
    recipeAuthor: string;
    recipeLevel: string;
    recipeCookingTime: string;
    recipeThumbnail: string;
    recipeRating: string;
}

export default function RecipeNewCard({
    recipeId,
    recipeName,
    recipeThumbnail,
    recipeCookingTime,
    recipeLevel,
    recipeRating,
}: CardProps): JSX.Element {
    const [marked, setMarked] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');

    const token = useAuthToken();

    const { isActive } = useHeaderLogic();
    const handleClickBookmark = async (e: MouseEvent) => {
        e.stopPropagation();
        try {
            if (!token) {
                window.location.href = '/login';
                return;
            }
            const response = await instance.post(`/recipes/${recipeId}/scrap`);

            if (response.data.code == 'OK') {
                if (response.data.data == 'CANCELED') {
                    setMarked(false);
                } else if (response.data.data == 'SCRAPED') {
                    setMarked(true);
                }
                setMessage(response.data.message);
                alert(response.data.message);
            }
        } catch (err: any) {
            console.log(err);
            setMessage(marked ? '찜한 레시피에서 삭제하였습니다.' : '레시피를 찜하지 못했습니다.');
        }
    };
    console.log(message);
    return (
        <S_CardFigure>
            <S_CardImg alt="레시피이미지" src={recipeThumbnail} />
            <S_CardFigcaption>
                <S_BookmarkIcons onClick={handleClickBookmark} mark={marked}>
                    {marked ? <FaBookmark /> : <FaRegBookmark />}
                </S_BookmarkIcons>
                <S_CardCategory>{isActive} 레시피입니다.</S_CardCategory>

                <S_Link to={`/recipes/${recipeId}`}>
                    <S_CardTitle>{recipeName}</S_CardTitle>
                </S_Link>

                <S_CardDescription>자세한 레시피를 확인하고 싶다면 클릭해주세요.</S_CardDescription>
                <S_CardInfo>
                    <RecipeMetaData time={recipeCookingTime} level={recipeLevel} rate={recipeRating} />
                </S_CardInfo>
            </S_CardFigcaption>
        </S_CardFigure>
    );
}

const S_CardFigure = styled.figure`
    height: 100%;
    padding: 0;
    border: 1px solid #d7d8dc;
    border-radius: 8px;
    background-color: #f5f6fa;
    display: flex;
    flex-direction: column;

    &:hover {
        background-color: #fff;
    }
`;
const S_CardImg = styled.img`
    height: 260px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`;

const S_CardFigcaption = styled.figcaption`
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    position: relative;
    justify-content: space-between;

    &:last-child {
        padding-bottom: 16px;
    }
`;
const S_CardText = styled.p`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 5px;
`;
const S_CardCategory = styled(S_CardText)`
    font-size: 12px;
    color: #202020;
`;

const S_CardDescription = styled(S_CardText)`
    font-size: 14px;
    color: #626264;
`;

const S_CardTitle = styled(S_CardText)`
    word-break: break-all;
`;

const S_CardInfo = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 14px;
`;
const S_Link = styled(Link)`
    display: block;
    text-decoration: none;
    color: #000;

    &:hover {
        color: ${colors[400]};
        cursor: pointer;
    }
`;
const S_BookmarkIcons = styled.div<{ mark: boolean }>`
    position: absolute;
    top: 10px;
    right: 10px;
    color: ${(props) => (props.mark ? `${colors[400]}` : 'inherit')};
    &:hover {
        color: ${colors[100]};
        cursor: pointer;
    }
`;
