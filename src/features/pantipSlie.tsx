// features/itemsSlice.js

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  items: {},
  spanHeaders: {},
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  pages: {},
  totalPages: {},
};

// Create an async thunk for fetching data
export const fetchPantip = createAsyncThunk(
  'data/fetchPantip', // Updated action type to match the slice name
  async ({ tagX, page, perPage }) => {
    try {
      const responses = await Promise.all(
        tagX.map((tag) =>
          fetch(
            `http://localhost:3000/MainSearch?tag=${tag}&page=${page}&per_page=${perPage}`,
          ).then((res) => {
            if (!res.ok) {
              throw new Error('Network response was not ok');
            }
            return res.json();
          }),
        ),
      );
      console.log('Fetched data:', responses); // Debug line
      return { tagX, dataX: responses };
    } catch (error) {
      return Promise.reject(error.message); // Use Promise.reject to properly handle errors
    }
  },
);

// Create the slice
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    incrementPage: (state, action) => {
      const tag = action.payload;
      state.pages[tag] = (state.pages[tag] || 1) + 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPantip.pending, (state) => {
        state.status = 'loading';
        state.error = null; // Clear previous errors
      })
      .addCase(fetchPantip.fulfilled, (state, action) => {
        const { tagX, dataX } = action.payload;

        // Ensure dataX is an array and has the same length as tagX
        if (!Array.isArray(dataX) || dataX.length !== tagX.length) {
          console.error('Data length mismatch');
          state.status = 'failed';
          return;
        }

        tagX.forEach((tag, index) => {
          if (!state.items[tag]) {
            state.items[tag] = [];
          }
          if (dataX[index]) {
            const { titles = [], total_pages = 1 } = dataX[index];
            state.items[tag] = [...state.items[tag], ...titles];
            state.totalPages[tag] = total_pages;
          }
        });

        state.status = 'succeeded';
      })
      .addCase(fetchPantip.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { incrementPage } = dataSlice.actions;
export default dataSlice.reducer;
