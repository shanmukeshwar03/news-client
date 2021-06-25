import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { URL } from 'utils/constants';

export const fetchTechnology = createAsyncThunk(
  'technology',
  async (payload) => {
    return await fetch(`${URL}/technology?page=${Math.round(payload / 10 + 1)}&pageSize=10`).then(r => r.json());
  });

const slice = createSlice({
  name: 'technology',
  initialState: {
    articles: [],
    title: 'Top Technology news',
    limit: true,
    loading: false,
  },
  extraReducers: {
    [fetchTechnology.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchTechnology.fulfilled]: (state, action) => {
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
