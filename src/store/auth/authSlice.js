import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authService from './authService';

// get user from localStorage

const user = JSON.parse(localStorage.getItem('userToken'))
	? localStorage.getItem('userToken')
	: null;

const initialState = {
	user: null,
	isLoading: false,
	isError: null,
	isSuccess: false,
	userToken: null,
};

// Register user
export const register = createAsyncThunk(
	'auth/register',
	async (user, thunkAPI) => {
		try {
			return await authService.register(user);
		} catch (error) {
			const message =
				(error.message && error.response.data && error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);
// Login user
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
	try {
		return await authService.login(user);
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) ||
			error.message ||
			error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

// Logout user
export const logout = createAsyncThunk('auth/logout', async () => {
	authService.logout();
});

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		reset: (state) => {
			state.isLoading = false;
			state.userToken = null;
			state.isError = null;
			state.isSuccess = false;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(register.pending, (state) => {
				state.isLoading = true;
				state.isError = null
			})
			.addCase(register.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.user = action.payload;
			})
			.addCase(register.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.user = action.payload;
			})
			.addCase(login.pending, (state) => {
				state.isLoading = true;
				state.isError = null
			})
			.addCase(login.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.user = action.payload.user;
			})
			.addCase(login.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = action.payload;
			})
			.addCase(logout.fulfilled, (state) => {
				state.user = null;
			});
	},
});
export const authActions = authSlice.actions;
export default authSlice;
