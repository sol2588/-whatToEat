import { createSlice } from '@reduxjs/toolkit';
import { RecipeProps } from '../../types/recipe';

interface BookmarkActionState {
    bookmark: boolean;
    booklist: RecipeProps[];
}
const bookmarkSlice = createSlice({
    name: 'bookmark',
    initialState: { bookmark: false, booklist: [] } as BookmarkActionState,
    reducers: {
        addBookmark: (state, action) => {
            state.booklist.push(action.payload);
        },
        removeBookmark: (state, action) => {
            state.booklist = state.booklist.filter((item) => item.recipeId !== action.payload);
        },
    },
});

export const { addBookmark, removeBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
