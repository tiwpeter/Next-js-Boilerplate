import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk for fetching tags
export const fetchTags = createAsyncThunk('tags/fetchTags', async ({ page, perPage, reset = false }) => {
  const response = await axios.get('http://localhost:5000/api/tags', { params: { page, per_page: perPage } });
  // Return the actual tags data directly
  return { data: response.data.data, reset };
});

const tagsSlice = createSlice({
  name: 'tagname',
  initialState: {
    tags: {}, // Initialize as an empty object
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.status = 'succeeded';
        if (action.payload.reset) {
          state.tags = action.payload.data;
        } else {
          state.tags = { ...state.tags, ...action.payload.data };
        }
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default tagsSlice.reducer;
