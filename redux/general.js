import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { URL } from 'utils/constants';

export const fetchGeneral = createAsyncThunk('general', async (payload) => {
  return await fetch(`${URL}/general?page=${Math.round(payload / 10 + 1)}&pageSize=10`).then(r => r.json());
});

const slice = createSlice({
  name: 'general',
  initialState: {
    articles: [],
    title: 'General news',
    limit: true,
    loading: false,
  },
  extraReducers: {
    [fetchGeneral.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchGeneral.fulfilled]: (state, action) => {
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
