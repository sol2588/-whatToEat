import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { showModal } from '../redux/reducer/modalSlice';
import { addBookmark, removeBookmark } from '../redux/reducer/bookmarkSlice';
import useAuthToken from './useAuthToken';
import instance from '../utils/api/instance';

export const useBookmark = () => {
    const dispatch = useDispatch();
    const token = useAuthToken();

    const handleClickBookmark = async (e: MouseEvent, recipeId: number) => {
        e.stopPropagation();
        try {
            const response = await instance.post(`/recipes/${recipeId}/scrap`);

            if (!token) {
                // window.location.href = '/login'; // msw 사용시 불필요
                return;
            }

            if (response.data.code == 'OK') {
                if (response.data.data == 'CANCELED') {
                    dispatch(removeBookmark(recipeId));
                    dispatch(showModal({ isOpen: true, content: response.data.message, onConfirm: null }));
                } else if (response.data.data == 'SCRAPED') {
                    dispatch(addBookmark(recipeId));
                    dispatch(showModal({ isOpen: true, content: response.data.message, onConfirm: null }));
                }
            }
        } catch (err: any) {
            console.log(err);
        }
    };

    return { handleClickBookmark };
};
