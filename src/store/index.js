import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice";
import cartUiSlice from "./shopping-cart/cartUiSlice";
import authSlice from "./auth/authSlice";
import productSlice from "./products/productSlice";


const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        cartUi: cartUiSlice.reducer,
        auth: authSlice.reducer,
        products: productSlice.reducer
    }
})

export default store