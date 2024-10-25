import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import authSlice from "./authSlice";
import productSlice from "./categoriesSlice"



const store = configureStore({
    reducer:{
        cart: cartSlice,
        auth: authSlice.reducer,
        filter: productSlice,
    }
})

export default store
