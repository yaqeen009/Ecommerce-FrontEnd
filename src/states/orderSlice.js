import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    orders: []
}

const orderSlice = createSlice({
    name: "orders",
    initialState: initialState,
    reducers:{
        saveOrder(state, action){
            state.orders.push(action.payload)
        },
        removeOrder(state, action){
            state.orders = state.orders.filter(order => order.id !== action.payload)
        },
        updateOrder(state, action) {
            const index = state.orders.findIndex(order => order.id === action.payload.id);
            if (index !== -1) {
              state.orders[index] = action.payload;
            }
          },
    }
})
export const {saveOrder, removeOrder, updateOrder} = orderSlice.actions
export default orderSlice.reducer