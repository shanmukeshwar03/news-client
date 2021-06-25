import { createSlice } from '@reduxjs/toolkit';
import { CATEGORIES } from 'utils/constants';

const slice = createSlice({
  name: 'utils',
  initialState: {
    category: CATEGORIES[0],
    menuOpen: false,
  },
  reducers: {
    updateCategory: (state, action) => {
      state.category = action.payload;
      state.menuOpen = false;
    },
    updateMenuOpen: (state, action) => {
      state.menuOpen = !state.menuOpen;
    },
  },
});

export const { updateCategory, updateMenuOpen } = slice.actions;
export default slice.reducer;
