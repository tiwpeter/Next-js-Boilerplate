// src/redix/IconReducer.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk for fetching Icons
export const fetchIcons = createAsyncThunk(
  'icons/fetchIcons',
  async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/api/room3');
     // console.log('API Response:', response.data); // Log API response
      return response.data;
    } catch (error) {
      console.error('API Error:', error); // Log API error
   //   return Promise.reject((error as Error).message);
    }
  }
);

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
      //  console.log('Fetching icons...'); // Log fetching status
      })
      .addCase(fetchIcons.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
     //   console.log('Icons fetched successfully:', action.payload); // Log successful data fetch
      })
      .addCase(fetchIcons.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
     //   console.error('Error fetching icons:', action.error.message); // Log error
      });
  },
});

export const { setIcons } = iconsSlice.actions;

export default iconsSlice.reducer;
