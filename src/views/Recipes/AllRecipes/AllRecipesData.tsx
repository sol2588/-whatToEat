import AllRecipes from './AllRecipes.js';
import { RecipeLimitProps } from './AllRecipesView.js';
import { convertLevel, convertTime } from '../../../common/convertFunc.js';
import { RecipeProps } from '../../../types/recipe.js';
import { useGetRecipes } from '../../../hooks/useGetRecipes.js';
import { S_RecipeContainer } from '../../../styles/RecipeContainer.js';

export default function AllRecipesData({ limit }: RecipeLimitProps) {
    const { data, isFetching, hasNextPage, fetchNextPage } = useGetRecipes();

    const recipes: RecipeProps[] =
        data?.pages.flatMap((page) =>
            page.recipes.map((recipe: RecipeProps) => ({
                ...recipe,
                recipeCookingTime: convertTime(recipe.recipeCookingTime),
                recipeLevel: convertLevel(recipe.recipeLevel),
            })),
        ) || [];

    return (
        <S_RecipeContainer>
            <AllRecipes hasNextPage={hasNextPage} limit={limit} recipes={recipes} fetchNextPage={fetchNextPage} isFetching={isFetching} />
        </S_RecipeContainer>
    );
}
