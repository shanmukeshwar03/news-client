import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { URL } from 'utils/constants';

export const fetchBusiness = createAsyncThunk('business', async (payload) => {
  return await fetch(`${URL}/business?page=${Math.round(payload / 10 + 1)}&pageSize=10`).then(r => r.json());
});

const slice = createSlice({
  name: 'business',
  initialState: {
    articles: [],
    title: 'Top Business news',
    limit: true,
    loading: false,
  },
  extraReducers: {
    [fetchBusiness.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchBusiness.fulfilled]: (state, action) => {
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
