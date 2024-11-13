import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import instance from '../../../utils/api/instance.js';
import { S_RecipeContainer } from '../../../styles/RecipeContainer.js';
import AllRecipes from './AllRecipes.js';
import { RecipeLimitProps } from './AllRecipesView.js';
import { convertLevel, convertTime } from '../../../common/convertFunc.js';
import { RecipeProps } from '../PopularRecipes/PopularRecipeData.js';

export default function AllRecipesData({ limit }: RecipeLimitProps) {
    const [recipes, setRecipes] = useState<RecipeProps[]>([]);
    const [offset, setOffset] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const { pathname } = useLocation();

    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = async () => {
        if (isLoading && !hasMore) return;
        setIsLoading(true);
        try {
            const response = await instance.get(`/recipes?page=${offset}&size=15`);
            console.log(response);

            if (response.data.code == 'OK') {
                const totalRecipes = response.data.data.totalRecipes;
                const newRecipes: RecipeProps[] = response.data.data.recipes.map((recipe: RecipeProps) => ({
                    ...recipe,
                    recipeLevel: convertLevel(recipe.recipeLevel),
                    recipeCookingTime: convertTime(recipe.recipeCookingTime),
                }));
                setRecipes((prev) => [...prev, ...newRecipes]);
                setOffset((prev) => prev + 1);
                // 현재 레시피의 총 개수와 전체 레시피 개수를 비교하여 hasMore 업데이트
                if (recipes.length + newRecipes.length >= totalRecipes) {
                    setHasMore(false); // 더 이상 불러올 데이터가 없으면 false로 설정
                }
            }
        } catch (err: any) {
            console.log('전체레시피 error: ', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <S_RecipeContainer>
            <AllRecipes hasMore={hasMore} limit={limit} recipes={recipes} fetchRecipes={fetchRecipes} isLoading={isLoading} />
        </S_RecipeContainer>
    );
}
