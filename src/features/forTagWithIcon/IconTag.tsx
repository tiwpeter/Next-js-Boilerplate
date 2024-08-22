// features/icon/iconSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Async thunk to fetch icon data
export const fetchIconData = createAsyncThunk(
  'icon/fetchIconData',
  async (tag) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/roomtag?tag=${tag}`);
      const data = await response.json();
      console.log('Fetched Icon:', { tag, data });
      // Ensure data is parsed correctly
      const parsedData = Array.isArray(data) ? data : JSON.parse(data);
      return { tag, data: parsedData };
    } catch (error) {
      throw error;
    }
  }
);

// Slice to manage icon-related state
const iconSlice = createSlice({
  name: 'icon',
  initialState: {
    icons: {}, // To store icon-related data
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
        state.icons[tag] = data; // Store icon data by tag
      })
      .addCase(fetchIconData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default iconSlice.reducer;
