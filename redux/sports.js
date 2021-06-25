import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { URL } from 'utils/constants';

export const fetchSports = createAsyncThunk('sports', async (payload) => {
  return await fetch(`${URL}/sports?page=${Math.round(payload / 10 + 1)}&pageSize=10`).then(r => r.json());
});

const slice = createSlice({
  name: 'sports',
  initialState: {
    articles: [],
    title: 'Top Sports news',
    limit: true,
    loading: false,
  },
  extraReducers: {
    [fetchSports.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchSports.fulfilled]: (state, action) => {
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
