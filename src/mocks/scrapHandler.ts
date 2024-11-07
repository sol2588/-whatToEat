import { http, HttpResponse } from 'msw';
import { store } from '../redux/store/store';
import { showModal } from '../redux/reducer/modalSlice';

const scrapped: string[] = [];

export const scrapHandler = [
    http.post(`${import.meta.env.VITE_BASE_URL}/recipes/:recipeId/scrap`, async ({ cookies, params }) => {
        try {
            const { recipeId } = params;
            const token = store.getState().user.value.token;
            const refreshToken = cookies.refreshToken;
            console.log('아무거나');

            if (!refreshToken) {
                store.dispatch(showModal({ isOpen: true, content: '로그인 후 이용하시기 바랍니다.', onConfirm: null }));
                window.location.href = '/login';
                return;
            }
            if (!token) {
                return HttpResponse.json({ message: 'Unauthorized' }, { status: 401 });
            }
            const existRecipe = scrapped.some((scrap) => scrap == recipeId);

            if (existRecipe) {
                return HttpResponse.json({
                    code: 'OK',
                    data: 'CANCELED',
                    message: '찜하기를 취소하였습니다.',
                });
            } else {
                return HttpResponse.json({
                    code: 'OK',
                    data: 'SCRAPED',
                    message: '레시피를 찜하였습니다. 마이페이지에서 확인가능합니다. ',
                });
            }
        } catch (err) {
            console.log('스크랩 에러 발생');
        }
    }),
];
