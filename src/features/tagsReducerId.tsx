import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunks for fetching data
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
  try {
    const response = await axios.get('http://127.0.0.1:5000/api/camera');
    return response.data;
  } catch (error) {
    console.error('Error fetching Camera data:', error);
    throw error;
  }
});

export const fetchPantipData = createAsyncThunk(
  'tags/fetchPantipData',
  async (tag) => {
    if (tag !== 'Bangrak') return null;
    const response = await axios.get('http://127.0.0.1:5000/api/pantip_katoo');
    return response.data;
  },
);

// Create Slice
const tagsSlice = createSlice({
  name: 'tags',

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

        if (data.Bangrak.length > 0) {
          state.Bangrak = [...state.Bangrak, ...data.Bangrak];
          state.hasMoreBangrak = data.Bangrak.length >= per_page;
        } else {
          state.hasMoreBangrak = false;
        }

        if (data.bangruk.length > 0) {
          state.bangruk = [...state.bangruk, ...data.bangruk];
          state.hasMoreBangruk = data.bangruk.length >= per_page;
        } else {
          state.hasMoreBangruk = false;
        }
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchPantipData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPantipData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.pantipData = action.payload;
      })
      .addCase(fetchFood.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.Fooddata = action.payload;
      })
      .addCase(fetchPantipData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchCamera.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.Cameradata = action.payload;
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
