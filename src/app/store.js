import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import adsReducer from '../features/adSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        ads: adsReducer,
    },
});

export default store;