import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import qs from 'qs';
import instance from '../utils/api/instance';

const getTypeRecipes = async (type: string | null, offset: number, ingredients?: string[], time?: string, level?: string) => {
    const endpoint = type ? `/recipes/${type}` : `/recipes`;
    const response = await instance.get(endpoint, {
        params: {
            page: offset,
            size: 15,
            ingredientName: ingredients,
            recipeCookingTime: time,
            recipeLevel: level,
        },
        paramsSerializer: (params) => {
            return qs.stringify(params, { arrayFormat: 'repeat' });
        },
    });

    if (response.data.code !== 'OK') {
        throw new Error(response.data.message || '레시피 조회에 실패했습니다. 잠시 후 다시 시도해주세요');
    }

    return response.data.data;
};

export function useGetRecipes(type: string = 'all', ingredients?: string[], time?: string, level?: string) {
    const { refetch, isLoading, isFetching, isError, error, fetchNextPage, hasNextPage, data } = useSuspenseInfiniteQuery({
        queryKey: ['recipes', type, { time, level, ingredients }], // time, level, ingredients 순서는 중요하지 않음
        queryFn: ({ pageParam = 0 }) => getTypeRecipes(type == 'all' ? null : type, pageParam, ingredients, time, level),
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages) => {
            return allPages.length * 15 < lastPage.totalRecipes ? allPages.length : null;
        },
        staleTime: 1000 * 60 * 5,
    });

    return { refetch, data, isLoading, isFetching, isError, error, hasNextPage, fetchNextPage, ingredients, time, level };
}
