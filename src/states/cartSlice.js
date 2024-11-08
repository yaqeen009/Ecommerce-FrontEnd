import { createSlice } from "@reduxjs/toolkit";

// Load cart from session storage or initialize with empty array
const savedCart = JSON.parse(sessionStorage.getItem('cart')) || [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: savedCart,
    totalAmount: savedCart.reduce((total, item) => total + item.amount, 0),
    totalPrice: savedCart.reduce((total, item) => total + item.totalPrice, 0),
  },
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      try {
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

        // Save updated cart to session storage
        sessionStorage.setItem('cart', JSON.stringify(state.cart));
      } catch (error) {
        return error;
      }
    },
    deleteFromCart(state, action) {
      const product = action.payload;
      try {
        const exist = state.cart.find(
          (item) =>
            item.id === product.id &&
            item.size === product.size &&
            item.color === product.color
        );
        if (exist) {
          state.cart = state.cart.filter(
            (item) =>
              item.id !== product.id ||
              item.size !== product.size ||
              item.color !== product.color
          );
          state.totalAmount -= exist.amount;
          state.totalPrice -= exist.totalPrice;

          // Save updated cart to session storage
          sessionStorage.setItem('cart', JSON.stringify(state.cart));
        }
      } catch (error) {
        return error;
      }
    },
    removeFromCart(state, action) {
      const product = action.payload;
      try {
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

          // Save updated cart to session storage
          sessionStorage.setItem('cart', JSON.stringify(state.cart));
        }
      } catch (error) {
        return error;
      }
    },
    clearCart(state) {
      state.cart = [];
      state.totalAmount = 0;
      state.totalPrice = 0;

      // Remove cart from session storage
      sessionStorage.removeItem('cart');
    },
  },
});

export const { addToCart, removeFromCart, clearCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
