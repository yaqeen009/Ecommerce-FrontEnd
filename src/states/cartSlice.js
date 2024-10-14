import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalAmount: 0, // total quantity of items in the cart
    totalPrice: 0,  // total price of items in the cart
  },
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const exist = state.cart.find(
        (item) =>
          item.id === product.id &&
          item.size === product.size &&
          item.color === product.color
      );
      if (exist) {
        exist.amount++;
        exist.totalPrice += product.price;
      } else {
        state.cart.push({
          ...product,
          amount: 1,
          totalPrice: product.price,
        });
      }
      state.totalAmount++;
      state.totalPrice += product.price;
    },

    removeFromCart(state, action) {
      const product = action.payload;
      const exist = state.cart.find(
        (item) =>
          item.id === product.id &&
          item.size === product.size &&
          item.color === product.color
      );
      if (exist) {
        if (exist.amount === 1) {
          state.cart = state.cart.filter(
            (item) =>
              item.id !== product.id ||
              item.size !== product.size ||
              item.color !== product.color
          );
        } else {
          exist.amount--;
          exist.totalPrice -= product.price;
        }
        state.totalAmount--;
        state.totalPrice -= product.price;
      }
    },

    clearCart(state) {
      state.cart = [];
      state.totalAmount = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
