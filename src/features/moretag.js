import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async ({ tag, page = 1 }) => {
    const response = await fetch(`http://127.0.0.1:5000/api/data?tag=${tag}&page=${page}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return { tag, data: await response.json() };
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    items: {}, // จัดเก็บข้อมูลแยกตามแท็ก
    status: 'idle',
    error: null,
    page: {}, // ใช้เพื่อเก็บหน้าของแต่ละแท็ก
    selectedTag: '',
  },
  reducers: {
    increaseVisibleCount: (state, action) => {
      const tag = action.payload;
      state.page[tag] = (state.page[tag] || 1) + 1;
      console.log('Page increased for tag:', tag, 'to:', state.page[tag]);
    },
    setTag: (state, action) => {
      const tag = action.payload;
      state.selectedTag = tag;
      state.page[tag] = 1; // รีเซ็ตหน้าเมื่อแท็กเปลี่ยน
      state.status = 'idle';
      console.log('Tag set to:', tag);
      console.log('Page reset to:', state.page[tag]);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
        console.log('Data fetch status: loading');
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        const { tag, data } = action.payload;
        console.log('Data fetch succeeded for tag:', tag);
        console.log('Fetched data:', data);
        if (!state.items[tag]) {
          state.items[tag] = [];
        }
        state.items[tag] = [...state.items[tag], ...data];
        state.status = 'succeeded';
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        console.error('Data fetch failed:', action.error.message);
      });
  },
});

export const { increaseVisibleCount, setTag } = dataSlice.actions;

export default dataSlice.reducer;
