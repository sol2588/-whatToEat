import { http, HttpResponse } from 'msw';
import { recipes } from './data/recipes.js';

export const recipeHandlers = [
    http.get(`${import.meta.env.VITE_BASE_URL}/recipes`, ({ request }) => {
        const url = new URL(request.url);
        const page = Number(url.searchParams.get('page')) || 0;
        const size = 15;
        const allData = recipes.slice(page * size, (page + 1) * size);

        return HttpResponse.json({
            code: 'OK',
            message: '전체 레시피 조회 성공!',
            data: {
                recipes: allData,
                totalRecipes: 376,
            },
        });
    }),

    // http.get('/recipes/popular', () => {
    //     return HttpResponse.json({});
    // }),
];
