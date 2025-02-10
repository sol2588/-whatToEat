import { Suspense, useTransition } from 'react';
import CardSkeleton from '../../../components/Skeleton/CardSkeleton.js';
import { convertLevel, convertTime } from '../../../common/convertFunc.js';
import { RecipeProps } from '../../../types/recipe.js';
import { useGetRecipes } from '../../../hooks/useGetRecipes.js';
import { S_RecipeContainer } from '../../../styles/RecipeContainer.js';
import AllRecipes from './AllRecipes.js';

interface RecipeLimitProps {
    limit?: number;
}

export default function AllRecipesData({ limit }: RecipeLimitProps) {
    const [isPending, startTransition] = useTransition();
    const { data, isFetching, hasNextPage, fetchNextPage } = useGetRecipes();

    const recipes: RecipeProps[] =
        data?.pages.flatMap((page) =>
            page.recipes.map((recipe: RecipeProps) => ({
                ...recipe,
                recipeCookingTime: convertTime(recipe.recipeCookingTime),
                recipeLevel: convertLevel(recipe.recipeLevel),
            })),
        ) || [];

    const handleFetchNext = () => {
        startTransition(() => {
            fetchNextPage();
        });
    };

    return (
        <S_RecipeContainer>
            <Suspense fallback={<CardSkeleton />}>
                <AllRecipes
                    hasNextPage={hasNextPage}
                    limit={limit}
                    recipes={recipes}
                    fetchNextPage={handleFetchNext}
                    isFetching={isFetching || isPending}
                />
            </Suspense>
        </S_RecipeContainer>
    );
}
