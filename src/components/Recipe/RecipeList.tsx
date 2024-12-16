import RecipeNewCard from './RecipeNewCard';
import styled from 'styled-components';
import { RecipeProps } from '../../types/recipe';

interface RecipeListProps {
    recipes: RecipeProps[];
    limit?: number;
}
export default function RecipeList({ recipes, limit }: RecipeListProps): JSX.Element {
    const mainRecipes = limit ? recipes.slice(0, limit) : recipes;
    return (
        <S_RecipeUlList>
            {mainRecipes.map((recipe: RecipeProps, idx) => (
                <li key={`${idx}_${recipe.recipeId}`}>
                    <RecipeNewCard key={recipe.recipeId} {...recipe} />
                </li>
            ))}
        </S_RecipeUlList>
    );
}

const S_RecipeUlList = styled.ul`
    list-style: none;
    display: grid;
    gap: 30px;
    padding: 30px;
    grid-template-columns: repeat(3, minmax(300px, 1fr));

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
