import PopularRecipes from './PopularRecipes';
import { convertLevel, convertTime } from '../../../common/convertFunc.js';
import { RecipeProps } from '../../../types/recipe.js';
import { useGetRecipes } from '../../../hooks/useGetRecipes.js';
import { S_RecipeContainer } from '../../../styles/RecipeContainer.js';

export default function PopularRecipeData(): JSX.Element {
    const { data, isFetching, hasNextPage, fetchNextPage } = useGetRecipes('popular');

    const recipes: RecipeProps[] =
        data?.pages.flatMap((page) =>
            page.recipes.map((recipe: RecipeProps) => ({
                ...recipe,
                recipeLevel: convertLevel(recipe.recipeLevel),
                recipeCookingTime: convertTime(recipe.recipeCookingTime),
            })),
        ) || [];

    return (
        <S_RecipeContainer>
            <PopularRecipes hasNextPage={hasNextPage} recipes={recipes} fetchNextPage={fetchNextPage} isFetching={isFetching} />
        </S_RecipeContainer>
    );
}
