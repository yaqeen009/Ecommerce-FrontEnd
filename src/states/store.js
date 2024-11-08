import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import authSlice from "./authSlice";
import productSlice from "./categoriesSlice"
import { removeOrder, saveOrder, updateOrder } from "./orderSlice";



const store = configureStore({
    reducer:{
        cart: cartSlice,
        auth: authSlice.reducer,
        filter: productSlice,
        orders: saveOrder, removeOrder, updateOrder
    }
})

export default store
