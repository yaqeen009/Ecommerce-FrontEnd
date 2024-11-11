import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import authSlice from "./authSlice";
import productSlice from "./categoriesSlice"
import orderSlice from "./orderSlice";




const store = configureStore({
    reducer:{
        cart: cartSlice,
        auth: authSlice.reducer,
        filter: productSlice,
        orders: orderSlice.reducer
    }
})

export default store
