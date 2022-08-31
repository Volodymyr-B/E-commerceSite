import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsInCart: [],
  },
  reducers: {
    addProductToCart: (state, action) => {
      let check = false;
      state.itemsInCart.forEach((el) => {
        if (el.id === action.payload.id) {
          check = true;
          el.quantity += action.payload.quantity;
        }
      });
      if (!check) state.itemsInCart.push(action.payload);
    },
    removeProductFromCart: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter(
        (product) => product.id !== action.payload
      );
    },
    decrementProduct: (state, action) => {
      state.itemsInCart.forEach((el) => {
        if (el.id === action.payload.id) {
          el.quantity -= 1;
        }
      });
    },
    incrementProduct: (state, action) => {
      state.itemsInCart.forEach((el) => {
        if (el.id === action.payload.id) {
          el.quantity += 1;
        }
      });
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  decrementProduct,
  incrementProduct,
} = cartSlice.actions;

export default cartSlice.reducer;
