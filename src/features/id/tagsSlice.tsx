// store/tagsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch tags based on the tag parameter
export const fetchTags = createAsyncThunk('tags/fetchTags', async ({ tag, page = 1, perPage = 10, reset = false }) => {
    const response = await axios.get(`http://localhost:5000/api/data`, {
        params: { tag }
    });
    return response.data;
});

const tagsSlice = createSlice({
    name: 'tags',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
        page: 1,
        perPage: 10,
        hasMore: true
    },
    reducers: {
        resetTags: (state) => {
            state.data = [];
            state.status = 'idle';
            state.error = null;
            state.page = 1;
            state.hasMore = true;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTags.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTags.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
                state.hasMore = action.payload.length > 0;
            })
            .addCase(fetchTags.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const { resetTags } = tagsSlice.actions;

export default tagsSlice.reducer;
