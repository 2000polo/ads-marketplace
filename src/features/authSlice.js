import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser, registerUser } from '../api/user';

const initialState = {
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null,
};

export const login = createAsyncThunk(
    'auth/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const response = await loginUser(email, password);
            if (response.status === 200) {
                window.location.href = '/app/profile';
                return response.jwt;
            } else {
                return rejectWithValue('Invalid credentials');
            }
        } catch (error) {
            return rejectWithValue(error.message || 'Something went wrong');
        }
    }
);

export const signup = createAsyncThunk(
    'auth/signup',
    async ({ username, email, password }, { rejectWithValue }) => {
        try {
            const response = await registerUser(username, email, password);
            if (response.status === 200) {
                return response.data;
            } else {
                return rejectWithValue('Invalid user data');
            }
        } catch (error) {
            return rejectWithValue(error.message || 'Something went wrong');
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.token = null;
            state.isAuthenticated = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        // Login reducers
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload;
                state.isAuthenticated = true;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = 'incorrect username or password';
            });

        // Signup reducers
        builder
            .addCase(signup.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signup.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(signup.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
