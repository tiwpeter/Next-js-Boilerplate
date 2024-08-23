import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunks for fetching data
export const fetchTags = createAsyncThunk(
  'tags/fetchTags',
  async ({ page, perPage, reset = false }) => {
    const response = await axios.get(
      'https://deploy-web-cap-api-node.vercel.app/api/tagSearch',
      {
        params: { page, per_page: perPage },
      },
    );
    return { data: response.data, reset };
  },
);

export const fetchTred = createAsyncThunk(
  'tags/fetchTred',
  async (tag, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://deploy-web-cap-api-node.vercel.app/api/${tag}/Pantip Trend`,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const fetchAnnounce = createAsyncThunk(
  'tags/fetchAnnounce',
  async (tag, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://deploy-web-cap-api-node.vercel.app/api/${tag}/Announce`,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// ตรวจสอบ API response
export const fetchRecommendations = createAsyncThunk(
  'tags/fetchRecommendations',
  async (tag: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://deploy-web-cap-api-node.vercel.app/api/${tag}/กระทู้แนะนำโดยสมาชิก`,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'An error occurred');
    }
  },
);

export const fetchLatestPosts = createAsyncThunk(
  'tags/fetchLatestPosts',
  async (tag, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://deploy-web-cap-api-node.vercel.app/api/${tag}/กระทู้ล่าสุด`,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const fetchPantipPick = createAsyncThunk(
  'tags/fetchPantipPick',
  async (tag, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://deploy-web-cap-api-node.vercel.app/api/${tag}/Pantip Pick`,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const fetchPantipTrend = createAsyncThunk(
  'tags/fetchPantipTrend',
  async (tag, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://deploy-web-cap-api-node.vercel.app/api/${tag}/Pantip Trend`,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

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
    pantipData: null,
    Fooddata: null,
    Cameradata: null,
    announceData: null,
    recommendationsData: null,
    latestPostsData: null,
    pantipPickData: null,
    pantipTrendData: null,
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
        state.status = 'succeeded';
        state.Fooddata = action.payload;
      })
      .addCase(fetchTred.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      .addCase(fetchAnnounce.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.announceData = action.payload;
      })
      .addCase(fetchAnnounce.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      .addCase(fetchRecommendations.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.recommendationsData = action.payload;
      })
      .addCase(fetchRecommendations.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      .addCase(fetchLatestPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.latestPostsData = action.payload;
      })
      .addCase(fetchLatestPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      .addCase(fetchPantipPick.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.pantipPickData = action.payload;
      })
      .addCase(fetchPantipPick.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      .addCase(fetchPantipTrend.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.pantipTrendData = action.payload;
      })
      .addCase(fetchPantipTrend.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { resetTags } = tagsSlice.actions;
export const selectTags = (state) => state.tags;
export default tagsSlice.reducer;
