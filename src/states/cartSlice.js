import { createSlice } from "@reduxjs/toolkit";

// const savedCart = JSON.parse(localStorage.getItem('cart')) || [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    // cart: savedCart,
    cart:[],
    totalAmount: 0,
    totalPrice: 0,
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

        // localStorage.setItem('cart', JSON.stringify(state.cart));
      } catch (error) {
        return error;
      }
    },
    deleteFromCart(state, action){
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
          state.totalAmount--;
          state.totalPrice -= (product.price * product.amount);

          // localStorage.setItem('cart', JSON.stringify(state.cart));
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

          // localStorage.setItem('cart', JSON.stringify(state.cart));
        }
      } catch (error) {
        return error;
      }
    },

    clearCart(state) {
      state.cart = [];
      state.totalAmount = 0;
      state.totalPrice = 0;

      // localStorage.removeItem('cart');
    },
  },
});

export const { addToCart, removeFromCart, clearCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
