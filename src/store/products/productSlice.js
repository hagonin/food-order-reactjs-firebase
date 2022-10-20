import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosClient from '../../api/apiAxios';

export const getProducts = createAsyncThunk(
	'productDisplay/getProducts',
	async () => {
		try {
			const res = await axiosClient.get('/products');
			// console.log(res);
			return res;
		} catch (err) {
			console.log('Error getting prodcuts failed:', err.message);
		}
	}
);

export const getProductDetail = createAsyncThunk(
	'productDisplay/getProductDetail',
	async (id) => {
		try {
			const res = await axiosClient.get(`/products/${id}`);
			// console.log(res);
			return res;
		} catch (err) {
			console.log('Error getting prodcut failed:', err.message);
		}
	}
);

const initialState = {
	products: [],
	isLoading: false,
	filterProduct: [],
	selectedProduct: {},
};

const productSlice = createSlice({
	name: 'productDisplay',
	initialState: initialState,
	reducers: {
		filterProductCategory: (state, action) => {
			switch (action.payload) {
				case 'ALL':
					state.filterProduct = state.products;
					break;
				case 'SALAD':
					state.filterProduct = state.products.filter(
						(item) => item.category === 'Salad'
					);
					break;
				case 'MEAT':
					state.filterProduct = state.products.filter(
						(item) => item.category === 'Meat'
					);
					break;
				case 'PASTA':
					state.filterProduct = state.products.filter(
						(item) => item.category === 'Pasta'
					);
					break;
				default:
					return state;
			}
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getProducts.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getProducts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.products = action.payload;
				state.filterProduct = action.payload;
			})
			.addCase(getProducts.rejected, (state) => {
				state.isLoading = false;
			})
			.addCase(getProductDetail.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getProductDetail.fulfilled, (state, action) => {
				state.isLoading = false;
				state.selectedProduct = action.payload;
			})
			.addCase(getProductDetail.rejected, (state) => {
				state.isLoading = false;
			});
	},
});

export const productActions = productSlice.actions;
export default productSlice;
