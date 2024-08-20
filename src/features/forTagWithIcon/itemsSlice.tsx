import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// tag more
export const fetchData = createAsyncThunk(
  'data/fetchData',
  async ({ tagX, page, perPage }) => {
    try {
      const responses = await Promise.all(
        tagX.map((tag) =>
          fetch(
            `http://localhost:5000/search?tag=${tag}&page=${page}&per_page=${perPage}`,
          ).then((res) => {
            if (!res.ok) {
              throw new Error('Network response was not ok');
            }
            return res.json();
          }),
        ),
      );
      console.log('Fetched data:', responses); // Add this line
      return { tagX, dataX: responses };
    } catch (error) {
      throw new Error(error.message);
    }
  },
);

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    items: {},
    spanHeaders: {},
    status: 'idle',
    error: null,
    pages: {},
    totalPages: {},
  },
  reducers: {
    incrementPage: (state, action) => {
      const tag = action.payload;
      state.pages[tag] = (state.pages[tag] || 1) + 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        const { tagX, dataX } = action.payload;
        if (!dataX || dataX.length === 0) {
          console.error('No data available');
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
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { incrementPage } = dataSlice.actions;
export default dataSlice.reducer;
