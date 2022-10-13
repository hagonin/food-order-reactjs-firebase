import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
	userInfo: {},
	userToken: null,
	isLoading: false,
	isError: false,
	isSuccess: false,
};

export const registerUser = createAsyncThunk(
	'user/register',
	async (
		{ firstName, lastName, email, password, confirmPassword },
		{ rejectWithValue }
	) => {
		try {
			const config = { headers: { 'Content-Type': 'application/json' } };
			await fetch(
				'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDI3asXL7nJIx1Aio1Y_dgOfj-Xpw3zXJY',
				{ firstName, lastName, email, password, confirmPassword },
				config
			);
		} catch (error) {
			if (error.response && error.response.data.message) {
				return rejectWithValue(error.response.data.message);
			} else {
				return rejectWithValue(error.message);
			}
		}
	}
);

export const loginUser = createAsyncThunk(
	'auth/login',
	async ({ email, password }, { rejectWithValue }) => {
		try {
			const config = { headers: { 'Content-Type': 'application/json' } };
			await fetch(
				'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDI3asXL7nJIx1Aio1Y_dgOfj-Xpw3zXJY',
				{ email, password },
				config
			);
		} catch (error) {
			if (error.response && error.response.data.message) {
				return rejectWithValue(error.response.data.message);
			} else {
				return rejectWithValue(error.message);
			}
		}
	}
);

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		reset: (state) => {
			state.userToken = null;
			state.isLoading = false;
			state.isError = false;
			state.isSuccess = false;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(registerUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(registerUser.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.userInfo = action.payload;
			})
			.addCase(registerUser.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.userInfo = null;
			})
			.addCase(loginUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.userInfo = action.payload;
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.userInfo = null;
			})
	},
});

export default authSlice;
