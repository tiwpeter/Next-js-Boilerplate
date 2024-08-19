// store/tagSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// สร้าง async thunk สำหรับดึงข้อมูลจาก API ตาม tag
export const fetchIconData = createAsyncThunk(
  'tag/fetchIconData',
  async (tag) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/api/roomtag?tag=${tag}`,
      );
      const data = await response.json();
      console.log('Fetched Icon:', {
        tag,
        data: JSON.stringify(data, null, 2),
      });
      return { tag, data }; // ส่งคืนข้อมูลและแท็กที่เกี่ยวข้อง
    } catch (error) {
      // console.error('Failed to fetch data:', error); // ดูข้อผิดพลาดถ้ามี
      throw error; // ข้อผิดพลาดจะถูกจัดการใน rejected case
    }
  },
);

const tagSlice = createSlice({
  name: 'tag',
  initialState: {
    data: {}, // เปลี่ยนจาก array เป็น object สำหรับจัดเก็บข้อมูลแยกตาม tag
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
        state.data[tag] = data; // เก็บข้อมูลตาม tag
      })
      .addCase(fetchIconData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default tagSlice.reducer;
