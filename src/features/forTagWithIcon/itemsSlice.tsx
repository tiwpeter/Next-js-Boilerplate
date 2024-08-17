import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Define the fetchData async thunk
export const fetchData = createAsyncThunk(
  'data/fetchData',
  async ({
    tagX,
    page,
    perPage,
  }: {
    tagX: string[];
    page: number;
    perPage: number;
  }) => {
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
    tagsDetails: {}, // Add this to track tags details
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
            const {
              titles = [],
              span_header = [],
              total_pages = 1,
              tagsDetail = {}, // Extract tagsDetail
            } = dataX[index];
            state.items[tag] = [...state.items[tag], ...titles];
            state.spanHeaders[tag] = span_header;
            state.totalPages[tag] = total_pages;
            state.tagsDetails[tag] = tagsDetail; // Update state with tagsDetail
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
