import { useState, useEffect } from 'react';
import { S_RecipeContainer } from '../../../styles/RecipeContainer.js';
import instance from '../../../utils/api/instance.js';
import PopularRecipes from './PopularRecipes';
import { useDispatch } from 'react-redux';
import { showModal } from '../../../redux/reducer/modalSlice.js';
import Navbar from '../../../components/Navbar/Navbar.js';
import { convertLevel, convertTime } from '../../../common/convertFunc.js';

export interface RecipeProps {
    recipeId: number;
    recipeName: string;
    recipeAuthor: string;
    recipeLevel: string;
    recipeCookingTime: string;
    recipeThumbnail: string;
    recipeRating: string;
}

export default function PopularRecipeData(): JSX.Element {
    const [recipes, setRecipes] = useState<RecipeProps[]>([]);
    const [offset, setOffset] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = async () => {
        if (isLoading && !hasMore) return;
        setIsLoading(true);
        try {
            const response = await instance.get(`/recipes/popular?page=${offset}&size=15`);

            if (response.data.code == 'OK') {
                const totalRecipes = response.data.data.totalRecipes;
                const newRecipes: RecipeProps[] = response.data.data.recipes.map((recipe: RecipeProps) => ({
                    ...recipe,
                    recipeLevel: convertLevel(recipe.recipeLevel),
                    recipeCookingTime: convertTime(recipe.recipeCookingTime),
                }));
                console.log('popular...', totalRecipes);
                console.log('each,,,', recipes.length, newRecipes.length);
                console.log('sum,,,', recipes.length + newRecipes.length);
                setRecipes((prev) => [...prev, ...newRecipes]);
                setOffset((prev) => prev + 1);
                if (recipes.length + newRecipes.length >= totalRecipes) {
                    console.log('들어오는지 쳌크');
                    setHasMore(false); // 더 이상 불러올 데이터가 없으면 false로 설정
                }
            }
        } catch (err: any) {
            console.log(err);
            dispatch(showModal({ isOpen: true, content: '인기 레시피 조회에 실패했습니다. 잠시 후 다시 시도해주세요.', onConfirm: null }));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <S_RecipeContainer>
            <PopularRecipes hasMore={hasMore} recipes={recipes} fetchRecipes={fetchRecipes} isLoading={isLoading} />
            <Navbar />
        </S_RecipeContainer>
    );
}
