// src/features/Icontag.js or src/features/Icontag.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchIconData = createAsyncThunk(
  'tag/fetchIconData',
  async (tag) => {
    const response = await fetch(
      `http://127.0.0.1:5000/api/roomtag?tag=${tag}`,
    );
    const data = await response.json();
    return { tag, data };
  },
);

const tagSlice = createSlice({
  name: 'tag',
  initialState: {
    data: {},
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIconData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchIconData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const { tag, data } = action.payload;
        state.data[tag] = data;
      })
      .addCase(fetchIconData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default tagSlice.reducer;
