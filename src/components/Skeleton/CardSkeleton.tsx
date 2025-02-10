import styled from 'styled-components';
import photo from '../../assets/img/photo.png';
import { S_RecipeContainer } from '../../styles/RecipeContainer';

export default function CardSkeleton() {
    return (
        <S_RecipeContainer>
            <S_RecipeUlList>
                {Array(6)
                    .fill(0)
                    .map((_, idx) => (
                        <S_CardFigure key={idx}>
                            <S_CardImg src={photo} />
                            <S_CardContent>
                                <S_CardText />
                                <S_CardText />
                                <S_CardText />
                                <S_CardMeta />
                            </S_CardContent>
                        </S_CardFigure>
                    ))}
            </S_RecipeUlList>
        </S_RecipeContainer>
    );
}

const S_RecipeUlList = styled.ul`
    list-style: none;
    display: grid;
    gap: 30px;
    padding: 30px;
    grid-template-columns: repeat(3, minmax(345px, 1fr));

    @media screen and (min-width: 1025px) and (max-width: 1440px) {
        grid-template-columns: repeat(3, minmax(240px, 1fr));
    }
    @media screen and (min-width: 769px) and (max-width: 1024px) {
        grid-template-columns: repeat(2, minmax(240px, 1fr));
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const S_CardFigure = styled.figure`
    height: 100%;
    padding: 0;
    border: 1px solid #d7d8dc;
    border-radius: 8px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        flex-direction: row;
        width: 100%;
    }
`;
const S_CardImg = styled.img`
    display: inline-block;
    width: 100%;
    height: 260px;
    object-fit: cover;
    border-bottom: 1px solid lightgray;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    @media screen and (min-width: 769px) and (max-width: 1440px) {
        height: 200px;
        object-fit: contain;
    }
    @media screen and (max-width: 768px) {
        width: 30%;
        height: auto;
        max-height: 160px;
        flex-shrink: 0;
        border-bottom: none;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        border-top-right-radius: 0;
    }
`;

const S_CardContent = styled.figcaption`
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    position: relative;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;
const S_CardText = styled.p`
    margin: 4px 0;
    height: 20px;
    background-color: #f2f2f2;
`;
const S_CardMeta = styled.p`
    height: 20px;
    width: 50%;
    background-color: #f2f2f2;
`;
