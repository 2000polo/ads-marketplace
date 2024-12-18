import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPublicAds } from "../api/ads";

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
                console.log('priting payload', payload)
                // state.adsList = pa
            })
            .addCase(getAdPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = 'Something went wrong!';
            });
    },
})

export const { } = adSlice.actions;
export default adSlice.reducer;
