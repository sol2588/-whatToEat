import { Dispatch, SetStateAction, useState } from 'react';
import instance from '../utils/api/instance';

interface ScrabRecipe {
    recipeAuthor: string;
    recipeId: number;
    recipeName: string;
    recipeThumbnail: string;
}

export const useBookmark = (setScrapedRecipes: Dispatch<SetStateAction<ScrabRecipe[]>>) => {
    //map함수에서 개별 게시물 북마크 상태관리 상태배열
    const [bookmarkRecipes, setBookmarkRecipes] = useState<Record<string, boolean>>({});
    //북마크 아이콘 클릭핸들 함수
    const handleClickBookmark = async (recipeId: number) => {
        try {
            const response = await instance.post(`/recipes/${recipeId}/scrap`);
            console.log('북마크 response :', response);
            console.log('북마크 response.data :', response.data);
            if (response.data.data === 'SCRAPED') {
                //스크랩 성공 : 해당 게시물 스크랩 상태로 설정
                setBookmarkRecipes((prev) => ({
                    ...prev,
                    [recipeId]: true,
                }));
            } else if (response.data.data === 'CANCELED') {
                //스크랩 취소: 해당 게시물 스크랩 해제
                setScrapedRecipes((prevRecipes: any) => prevRecipes.filter((recipe: any) => recipe.recipeId !== recipeId));
            }
        } catch (error) {
            console.error('스크랩 처리 중 오류 발생', error);
        }
    };

    return {
        bookmarkRecipes,
        setBookmarkRecipes,
        handleClickBookmark,
    };
};
