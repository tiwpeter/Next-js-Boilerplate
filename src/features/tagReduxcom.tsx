import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { fetchPantipData } from './tagsReducerId';

export const fetchTags = createAsyncThunk(
  'tags/fetchTags',
  async ({ page, perPage, reset = false }) => {
    const response = await axios.get('http://localhost:5000/api/tags', {
      params: { page, per_page: perPage },
    });
    return { data: response.data, reset };
  },
);

export const fetchFood = createAsyncThunk('tags/fetchFood', async (tag) => {
  if (tag !== 'Food') return null;
  const response = await axios.get('http://127.0.0.1:5000/api/food');
  return response.data;
});

export const fetchCamera = createAsyncThunk('tags/fetchCamera', async (tag) => {
  if (tag !== 'Camera') return null;
  try {
    const response = await axios.get('http://127.0.0.1:5000/api/camera');
    return response.data;
  } catch (error) {
    throw error;
  }
});

const tagsSlice = createSlice({
  name: 'tagname',
  initialState: {
    tags: {}, // Initialize as an empty object
    Camera: [], // Fixed initialization
    Food: [],
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
      })

      .addCase(fetchPantipData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPantipData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.pantipData = action.payload;
      })
      .addCase(fetchFood.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.Fooddata = action.payload;
      })
      .addCase(fetchPantipData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchCamera.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.Cameradata = action.payload;
      })
      .addCase(fetchCamera.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { resetTags } = tagsSlice.actions;
export const selectTags = (state) => state.tags;
export default tagsSlice.reducer;
