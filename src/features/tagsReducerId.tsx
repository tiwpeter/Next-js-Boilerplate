import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunks for fetching data MOre
export const fetchTags = createAsyncThunk(
  'tags/fetchTags',
  async ({ page, perPage, reset = false }) => {
    const response = await axios.get('http://localhost:5000/api/tags', {
      params: { page, per_page: perPage },
    });
    return { data: response.data, reset };
  },
);

// สร้าง createAsyncThunk สำหรับการดึงข้อมูล
export const fetchTred = createAsyncThunk(
  'tags/fetchfood', // ชื่อ action
  async (tag, { rejectWithValue }) => {
    try {
      // ส่งคำขอ GET ไปยัง API
      const response = await axios.get(
        `http://localhost:5000/api/${tag}/recommendations`,
      );
      console.log('fetchTred response:', response.data); // Log response
      // ส่งข้อมูลที่ได้จาก API กลับไปยัง Redux store
      return response.data;
    } catch (error) {
      // ใช้ rejectWithValue เพื่อส่งข้อความแสดงข้อผิดพลาด
      return rejectWithValue(error.response.data);
    }
  },
);

// Create Slice
const tagsSlice = createSlice({
  name: 'tagId',

  initialState: {
    Camera: [], // Fixed initialization
    Food: [],
    Bangrak: [],
    bangruk: [],
    asmr: [],
    sukui: [],
    sme: [],
    status: 'idle',
    error: null,
    page: 1,
    perPage: 4,
    totalBangrak: 0,
    totalBangruk: 0,
    totalAsmr: 0,
    totalSukui: 0,
    totalSme: 0,
    hasMoreBangrak: true,
    hasMoreBangruk: true,
    hasMoreAsmr: true,
    hasMoreSukui: true,
    hasMoreSme: true,
    pantipData: null,
    Fooddata: null,
    Cameradata: null,
  },
  reducers: {
    resetTags: (state) => {
      state.Bangrak = [];
      state.bangruk = [];
      state.asmr = [];
      state.sukui = [];
      state.sme = [];
      state.page = 1;
      state.hasMoreBangrak = true;
      state.hasMoreBangruk = true;
      state.hasMoreAsmr = true;
      state.hasMoreSukui = true;
      state.hasMoreSme = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const {
          page,
          per_page,
          total_Bangrak,
          total_bangruk,
          total_asmr,
          total_sukui,
          total_sme,
          data,
        } = action.payload.data;

        if (action.payload.reset) {
          state.Bangrak = [];
          state.bangruk = [];
          state.asmr = [];
          state.sukui = [];
          state.sme = [];
        }

        state.page = page;
        state.perPage = per_page;
        state.totalBangrak = total_Bangrak;
        state.totalBangruk = total_bangruk;
        state.totalAsmr = total_asmr;
        state.totalSukui = total_sukui;
        state.totalSme = total_sme;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      .addCase(fetchTred.fulfilled, (state, action) => {
        // Corrected
        state.status = 'succeeded';
        state.Fooddata = action.payload;
      });
  },
});

export const { resetTags } = tagsSlice.actions;
export const selectTags = (state) => state.tags;
export default tagsSlice.reducer;
