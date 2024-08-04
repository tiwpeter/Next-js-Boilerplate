import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk for fetching tags
export const fetchTags = createAsyncThunk('tags/fetchTags', async ({ page, perPage, reset = false }) => {
    console.log('Fetching tags from API with page:', page, 'and perPage:', perPage);
    const response = await axios.get('http://localhost:5000/api/tags', { params: { page, per_page: perPage } });
    console.log('API response:', response.data);
    return { data: response.data, reset };
});

// Thunk for fetching Pantip data
export const fetchPantipData = createAsyncThunk('tags/fetchPantipData', async (tag) => {
    if (tag !== 'bangrak') {
        return null; // Skip fetching if the tag is not 'bangrak'
    }
    
    console.log('Fetching Pantip data from API');
    const response = await axios.get('http://127.0.0.1:5000/api/pantip_katoo');
    console.log('Pantip API response:', response.data);
    return response.data;
});
// Create Slice
const tagsSlice = createSlice({
    name: 'tags',
    initialState: {
        bangrak: [],
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
        pantipData: null, // New state for Pantip data
    },
    reducers: {
        resetTags: (state) => {
            state.bangrak = [];
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
                const { page, per_page, total_bangrak, total_bangruk, total_asmr, total_sukui, total_sme, data } = action.payload.data;

                if (action.payload.reset) {
                    state.bangrak = [];
                    state.bangruk = [];
                    state.asmr = [];
                    state.sukui = [];
                    state.sme = [];
                }

                state.page = page;
                state.perPage = per_page;
                state.totalBangrak = total_bangrak;
                state.totalBangruk = total_bangruk;
                state.totalAsmr = total_asmr;
                state.totalSukui = total_sukui;
                state.totalSme = total_sme;

                if (data.bangrak.length > 0) {
                    state.bangrak = [...state.bangrak, ...data.bangrak];
                    state.hasMoreBangrak = data.bangrak.length >= per_page;
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
                state.pantipData = action.payload; // Update only if valid data is returned
            })
            .addCase(fetchPantipData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { resetTags } = tagsSlice.actions;
export const selectTags = (state) => state.tags;
export default tagsSlice.reducer;
