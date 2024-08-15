import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the fetchData async thunk
export const fetchData = createAsyncThunk(
  'data/fetchData',
  async ({ tagX, page, perPage }: { tagX: string[], page: number, perPage: number }) => {
    try {
      const responses = await Promise.all(
        tagX.map(tag =>
          fetch(`http://localhost:5000/search?tag=${tag}&page=${page}&per_page=${perPage}`)
            .then(res => {
              if (!res.ok) {
                throw new Error('Network response was not ok');
              }
              return res.json();
            })
        )
      );
      //
      return { tagX, dataX: responses };
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    items: {},
    status: 'idle',
    error: null,
    pages: {}, // Track pages per tag
    totalPages: {}, // Track total pages per tag
  },
  reducers: {
    //
    incrementPage: (state, action) => {
      const tag = action.payload;
      if (state.pages[tag]) {
        state.pages[tag] += 1;
      } else {
        state.pages[tag] = 2; // Start with 2 if it's the first page load
        // = increat page +1 
      }
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
            const titles = dataX[index].titles || [];
            state.items[tag] = [...state.items[tag], ...titles];
            state.totalPages[tag] = dataX[index].total_pages || 1; // Update totalPages
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
