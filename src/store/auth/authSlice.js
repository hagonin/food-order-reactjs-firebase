import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authService from './authService';

const initialState = {
	user: '',
	email: '',
	isLoading: false,
	isSuccess: false,
	isError: false,
	errorMessage: '',
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

// Fetch user by token

export const fetchUserByToken = createAsyncThunk(
	'auth/fetchUserByToken',
	async (token, thunkAPI) => {
		try {
			return await authService.fetchUserByToken(token);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);
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
			state.isError = false;
			state.isSuccess = false;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(register.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(register.fulfilled, (state, action) => {
				console.log('payload register', action.payload);
				state.isLoading = false;
				state.isSuccess = true;
				state.email = action.payload.email;
				state.user = action.payload.user;
			})
			.addCase(register.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.errorMessage = action.payload.errorMessage;
			})
			.addCase(login.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.email = action.payload.email;
				state.username = action.payload.name;
				state.isLoading = false;
				state.isSuccess = true;
				return state;
			})
			.addCase(login.rejected, (state, action) => {
				console.log('payload login', action.payload);
				state.isLoading = false;
				state.isError = true;
				state.errorMessage = action.payload.message;
			})
			.addCase(fetchUserByToken.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchUserByToken.fulfilled, (state, action) => {				
				state.isLoading = false;
				state.isSuccess = true;
			})
			.addCase(fetchUserByToken.rejected, (state, action) => {
				console.log('payload fetchUserByToken', action.payload);
				state.isLoading = false;
				state.isError = true;
			})
			.addCase(logout.fulfilled, (state) => {
				state.user = null;
			});
	},
});
export const authActions = authSlice.actions;
export default authSlice;
