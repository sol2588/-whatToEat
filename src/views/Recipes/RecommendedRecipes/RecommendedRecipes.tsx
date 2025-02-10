import { Suspense } from 'react';
import RecipeList from '../../../components/Recipe/RecipeList.js';
import { convertTime, convertLevel } from '../../../common/convertFunc.js';
import { RecipeProps } from '../../../types/recipe.js';
import { useGetRecipes } from '../../../hooks/useGetRecipes.js';
import { S_RecipeContainer } from '../../../styles/RecipeContainer.js';
import CardSkeleton from '../../../components/Skeleton/CardSkeleton.js';

export default function RecommendedRecipes(): JSX.Element {
    const { data } = useGetRecipes('recommended');

    const recipes =
        data?.pages.flatMap((page) =>
            page.recipes.map((recipe: RecipeProps) => ({
                ...recipe,
                recipeLevel: convertLevel(recipe.recipeLevel),
                recipeCookingTime: convertTime(recipe.recipeCookingTime),
            })),
        ) || [];

    return (
        <S_RecipeContainer>
            <Suspense fallback={<CardSkeleton />}>
                <RecipeList recipes={recipes} />
            </Suspense>
        </S_RecipeContainer>
    );
}
