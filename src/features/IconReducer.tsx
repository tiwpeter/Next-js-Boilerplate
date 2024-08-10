import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchIcons = createAsyncThunk('icons/fetchIcons', async () => {
  try {
    const response = await axios.get('http://127.0.0.1:5000/api/room3');
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error; // Throw error to be caught in rejected case
  }
});

const iconsSlice = createSlice({
  name: 'icons',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setIcons: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIcons.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchIcons.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchIcons.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setIcons } = iconsSlice.actions;
export default iconsSlice.reducer;
