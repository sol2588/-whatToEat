import RecipeList from '../../../components/Recipe/RecipeList.js';
import { convertTime, convertLevel } from '../../../common/convertFunc.js';
import { RecipeProps } from '../../../types/recipe.js';
import { useGetRecipes } from '../../../hooks/useGetRecipes.js';
import { S_RecipeContainer } from '../../../styles/RecipeContainer.js';

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
            <RecipeList recipes={recipes} />
        </S_RecipeContainer>
    );
}
