import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Async thunk to fetch icon data
export const fetchIconData = createAsyncThunk(
  'icon/fetchIconData',
  async (tag) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/room3/roomtag?tag=${tag}`,
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Fetched Icon:', { tag, data });
      // Ensure data is parsed correctly
      return { tag, data }; // Directly return data if it's already in the expected format
    } catch (error) {
      throw new Error(`Failed to fetch icon data: ${error.message}`);
    }
  },
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
