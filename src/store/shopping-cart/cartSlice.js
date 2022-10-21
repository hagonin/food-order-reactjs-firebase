import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cartItems: [],
	totalQuantity: 0,
	totalAmount: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState: initialState,
	reducers: {
		increaseQuantity(state, action) {
			const id = action.payload;
			const existingItem = state.cartItems.find((item) => item.id === id);
			existingItem.quantity++;
			state.totalQuantity++;
			existingItem.totalPrice =
				Number(existingItem.totalPrice) + Number(existingItem.price);
			state.totalAmount = state.cartItems.reduce(
				(total, item) => total + item.totalPrice,
				0
			);
		},
		//Add item
		addItem(state, action) {
			const newItem = action.payload;
			const existingItem = state.cartItems.find(
				(item) => item.id === newItem.id
			);
			state.totalQuantity += newItem.quantity;

			if (!existingItem) {
				state.cartItems.push({
					...newItem,
					totalPrice: newItem.quantity * newItem.price,
				});
			} else {
				existingItem.quantity += newItem.quantity;
				existingItem.totalPrice =
					Number(existingItem.quantity) * Number(newItem.price);
			}
			state.totalAmount = state.cartItems.reduce(
				(total, item) => total + item.totalPrice,
				0
			);
		},

		// Remove item
		removeItem(state, action) {
			const id = action.payload;
			const existingItem = state.cartItems.find((item) => item.id === id);
			state.totalQuantity--;

			if (existingItem.quantity === 1) {
				state.cartItems = state.cartItems.filter((item) => item.id !== id);
			} else {
				existingItem.quantity--;
				existingItem.totalPrice =
					Number(existingItem.totalPrice) - Number(existingItem.price);
			}
			state.totalAmount = state.cartItems.reduce(
				(total, item) => total + item.totalPrice,
				0
			);
		},

		// Delete item
		deleteItem(state, action) {
			const id = action.payload;
			const existingItem = state.cartItems.find((item) => item.id === id);

			if (existingItem) {
				state.cartItems = state.cartItems.filter((item) => item.id !== id);
				state.totalQuantity = state.totalQuantity - existingItem.quantity;
			}

			state.totalAmount = state.cartItems.reduce(
				(total, item) => total + Number(item.price) * Number(item.quantity),
				0
			);
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice;
