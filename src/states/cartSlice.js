import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState:{
      //set initial state of cart
    },
    reducers:{
      addToCart(state,action){
        //add to cart logic in here
      }  
    }
});

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer; 