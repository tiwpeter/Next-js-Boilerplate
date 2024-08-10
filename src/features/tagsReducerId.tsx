import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunks สำหรับการดึงข้อมูล
export const fetchTags = createAsyncThunk(
  'tags/fetchTags',
  async ({ page, perPage, reset = false }) => {
    const response = await axios.get('http://localhost:5000/api/tags', {
      params: { page, per_page: perPage },
    });
    return { data: response.data, reset };
  },
);

export const fetchFood = createAsyncThunk('tags/fetchFood', async (tag) => {
  if (tag !== 'Food') return null;
  const response = await axios.get('http://127.0.0.1:5000/api/food');
  return response.data;
});

export const fetchCamera = createAsyncThunk('tags/fetchCamera', async (tag) => {
  if (tag !== 'Camera') return null;
  const response = await axios.get('http://127.0.0.1:5000/api/camera');
  return response.data;
});

// สร้าง Slice
const tagsSlice = createSlice({
  name: 'tags',
  initialState: {
    Camera: [],
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
        const { page, per_page, data } = action.payload;
        if (action.payload.reset) {
          state.Bangrak = [];
          state.bangruk = [];
          state.asmr = [];
          state.sukui = [];
          state.sme = [];
        }
        state.page = page;
        state.perPage = per_page;
        state.totalBangrak = data.total_Bangrak || 0;
        state.totalBangruk = data.total_bangruk || 0;
        state.totalAsmr = data.total_asmr || 0;
        state.totalSukui = data.total_sukui || 0;
        state.totalSme = data.total_sme || 0;

        if (data.Bangrak) {
          state.Bangrak = [...state.Bangrak, ...data.Bangrak];
          state.hasMoreBangrak = data.Bangrak.length >= state.perPage;
        } else {
          state.hasMoreBangrak = false;
        }

        if (data.bangruk) {
          state.bangruk = [...state.bangruk, ...data.bangruk];
          state.hasMoreBangruk = data.bangruk.length >= state.perPage;
        } else {
          state.hasMoreBangruk = false;
        }
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchFood.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.Fooddata = action.payload;
      })
      .addCase(fetchCamera.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.Cameradata = action.payload;
      })
      .addCase(fetchFood.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchCamera.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { resetTags } = tagsSlice.actions;
export const selectTags = (state) => state.tags;
export default tagsSlice.reducer;
