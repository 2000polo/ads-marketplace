import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createAd, fetchPublicAds } from "../api/ads";

const initialState = {
    adsList: undefined,
    loading: false,
    error: null
}

export const getAdPosts = createAsyncThunk(
    'ads/getAdPosts',
    async (payload, { rejectWithValue }) => {
        try {
            console.log('getAsPosts worked')
            const response = await fetchPublicAds();
            if (response.status === 200) {
                return response
            }
        } catch (error) {
            return rejectWithValue(error.message || 'Something went wrong');
        }
    }
)

export const postAdd = createAsyncThunk(
    'ads/postAdd',
    async (payload, { rejectWithValue }) => {
        try {
            console.log('getAsPosts worked')
            const response = await createAd(payload);
            if (response.status === 200) {
                return response
            }
        } catch (error) {
            return rejectWithValue(error.message || 'Something went wrong');
        }
    }
)

const adSlice = createSlice({
    name: 'ads',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.
            addCase(getAdPosts.pending, (state) => {
                state.loading = true,
                    state.error = null
            })
            .addCase(getAdPosts.fulfilled, (state, { payload }) => {
                console.log('priting payload', payload);
                state.loading = false,
                    state.adsList = payload.data
            })
            .addCase(getAdPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = 'Something went wrong!';
            });
        builder.
            addCase(postAdd.pending, (state) => {
                state.loading = true,
                    state.error = null
            })
            .addCase(postAdd.fulfilled, (state, { payload }) => {
                console.log('priting payload', payload);
                state.loading = false,
                    state.adsList = payload.data
            })
            .addCase(postAdd.rejected, (state, action) => {
                state.loading = false;
                state.error = 'Something went wrong!';
            });
    },
})

export const { } = adSlice.actions;
export default adSlice.reducer;
