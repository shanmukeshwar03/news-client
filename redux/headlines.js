import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { URL } from 'utils/constants';

export const fetchHeadlines = createAsyncThunk('headlines', async (payload) => {
  return await fetch(`${URL}/headlines?page=${Math.round(payload / 10 + 1)}&pageSize=10`).then(r => r.json());
});

const slice = createSlice({
  name: 'headlines',
  initialState: {
    articles: [],
    title: 'Top Headlines',
    limit: true,
    loading: false,
  },
  extraReducers: {
    [fetchHeadlines.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchHeadlines.fulfilled]: (state, action) => {
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
