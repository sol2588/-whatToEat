import { http, HttpResponse } from 'msw';
import { store } from '../redux/store/store';
import { showModal } from '../redux/reducer/modalSlice';
import { recipes } from './data/recipes';
import { RecipeProps } from '../types/recipe';

export let scrapped: RecipeProps[] = [];

export const scrapHandler = [
    http.post(`${import.meta.env.VITE_BASE_URL}/recipes/:recipeId/scrap`, async ({ cookies, params }) => {
        try {
            const { recipeId } = params as { recipeId: string };
            const token = store.getState().user.value.token;
            const refreshToken = cookies.refresh;
            if (!refreshToken || !token) {
                store.dispatch(
                    showModal({
                        isOpen: true,
                        content: `로그인 후 이용하시기 바랍니다.`,
                        onConfirm: () => {
                            window.location.href = '/login';
                        },
                    }),
                );
                return;
            }

            if (token) {
                const expriedToken = store.getState().user.value.expiredIn! < Date.now();
                if (expriedToken) {
                    return HttpResponse.json({ code: 'Bad Request', message: 'Unauthorized' }, { status: 401 });
                }
            }
            const existRecipe = scrapped.find((scrap) => scrap.recipeId == Number(recipeId));

            if (existRecipe) {
                scrapped = scrapped.filter((scrap) => scrap.recipeId != Number(recipeId));

                return HttpResponse.json({
                    code: 'OK',
                    data: { status: 'CANCELED' },
                    message: '찜하기를 취소하였습니다.',
                });
            } else {
                const targetRecipe = recipes.find((recipe) => recipe.recipeId == Number(recipeId));
                if (targetRecipe) {
                    scrapped.push(targetRecipe);
                }
                return HttpResponse.json({
                    code: 'OK',
                    data: { scrapData: targetRecipe, status: 'SCRAPED' },
                    message: '레시피를 찜하였습니다. 마이페이지에서 확인가능합니다. ',
                });
            }
        } catch (err) {
            console.log('스크랩', err);
        }
    }),
];
