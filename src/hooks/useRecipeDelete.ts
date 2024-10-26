import axios from 'axios';
import useAuthToken from './useAuthToken';
import { useNavigate } from 'react-router-dom';
interface Recipe {
    myRecipeId: number;
    myRecipeThumbnail: string;
    myRecipeName: string;
}

type SetMyRecipes = React.Dispatch<React.SetStateAction<Recipe[]>>;

export const useRecipeDelete = (setMyRecipes?: SetMyRecipes) => {
    const token = useAuthToken();
    const navigate = useNavigate();
    const handleMyRecipeDelete = async (myRecipeId: number) => {
        try {
            const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}/recipes`, {
                headers: {
                    'access-token': `Bearer ${token}`,
                },
                data: {
                    recipeId: myRecipeId,
                },
            });

            console.log('삭제성공 , response : ', response);
            if (setMyRecipes) {
                setMyRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.myRecipeId !== myRecipeId));
            }
            navigate('/recipes/all');
        } catch (error) {
            console.error('레시피 삭제 실패', error);
        }
    };

    return {
        handleMyRecipeDelete,
    };
};
