import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { URL } from 'utils/constants';

export const fetchScience = createAsyncThunk('science', async (payload) => {
  return await fetch(`${URL}/science?page=${Math.round(payload / 10 + 1)}&pageSize=10`).then(r => r.json());
});

const slice = createSlice({
  name: 'science',
  initialState: {
    articles: [],
    title: 'Top Science news',
    limit: true,
    loading: false,
  },
  extraReducers: {
    [fetchScience.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchScience.fulfilled]: (state, action) => {
      if (!action.payload.length) state.limit = false;
      else if (action.payload) {
        for (let article of action.payload) {
          state.articles.push(article);
        }
      }
      state.loading = false;
    },
  },
});

export default slice.reducer;
