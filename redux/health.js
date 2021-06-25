import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { URL } from 'utils/constants';

export const fetchHealth = createAsyncThunk('health', async (payload) => {
  return await fetch(`${URL}/health?page=${Math.round(payload / 10 + 1)}&pageSize=10`).then(r => r.json());
});

const slice = createSlice({
  name: 'health',
  initialState: {
    articles: [],
    title: 'Health news',
    limit: true,
    loading: false,
  },
  extraReducers: {
    [fetchHealth.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchHealth.fulfilled]: (state, action) => {
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
