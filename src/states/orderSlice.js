import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orderDetails: null,
  },
  reducers: {
    saveOrder(state, action) {
      state.orderDetails = action.payload;
    },
    clearOrder(state) {
      state.orderDetails = null;
    },
  },
});

export const { saveOrder, clearOrder } = orderSlice.actions;
export default orderSlice;
