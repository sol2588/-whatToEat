import { http, HttpResponse } from 'msw';
import { users } from './userHandlers';
import { scrapped } from './scrapHandler';
import { recipes } from './data/recipes';

export const myinfoHandlers = [
    // 작성 레시피
    http.get(`${import.meta.env.VITE_BASE_URL}/users/recipes`, async () => {
        // const url = new URL(request.url);
        // const myRecipePage = url.searchParams.get('myRecipePage');
        // const scrapRecipePage = url.searchParams.get('scrapRecipePage');

        const scrapRecipe = recipes.filter((recipe) => scrapped.some((scrap) => Number(scrap) == recipe.recipeId));
        const pageNum = Math.ceil(scrapRecipe.length / 4);
        return HttpResponse.json({
            code: 'OK',
            message: '유저 데이터 조회',
            data: {
                myRecipes: {
                    dataList: [],
                    totalPage: 0,
                },
                myScrapedRecipes: {
                    dataList: scrapRecipe,
                    totalPage: pageNum,
                },
            },
        });
    }),

    // 유저 정보
    http.get(`${import.meta.env.VITE_BASE_URL}/users/:userId`, ({ params }) => {
        const { userId } = params;
        if (!userId) {
            return HttpResponse.json({
                code: 'Bad Request',
                message: '로그인 후 이용하시기 바랍니다.',
            });
        }
        const targetUser = users.find((user) => user.email == userId);
        const email = targetUser?.email;
        const nickname = targetUser?.password;

        return HttpResponse.json({
            code: 'OK',
            message: '유저 정보 조회',
            data: {
                email: email,
                nickname: nickname,
            },
        });
    }),
];
