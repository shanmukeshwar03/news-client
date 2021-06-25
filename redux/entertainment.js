import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { URL } from 'utils/constants';

export const fetchEntertainment = createAsyncThunk(
  'entertainment',
  async (payload) => {
    return await fetch(`${URL}/entertainment?page=${Math.round(payload / 10 + 1)}&pageSize=10`).then(r => r.json());
  });

const slice = createSlice({
  name: 'entertainment',
  initialState: {
    articles: [],
    title: 'Top Entertainment news',
    limit: true,
    loading: false,
  },
  extraReducers: {
    [fetchEntertainment.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchEntertainment.fulfilled]: (state, action) => {
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
