import { useQuery } from '@tanstack/react-query';
import instance from '../utils/api/instance';

const getId = async (recipeId: number) => {
    const response = await instance.get(`/recipes/${recipeId}`);
    if (response.data.code !== 'OK') {
        throw new Error('레시피 조회에 실패했습니다. 잠시 후 다시 시도해주세요');
    }
    return response.data.data;
};

export function useGetRecipeId(recipeId: number) {
    const { isLoading, isFetching, isError, error, data } = useQuery({
        queryKey: ['recipe-id', recipeId],
        queryFn: () => getId(recipeId),
    });
    return { data, isLoading, isFetching, isError, error };
}
