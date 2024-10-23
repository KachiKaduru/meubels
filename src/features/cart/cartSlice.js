import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // cart: [{ id: 1, product_id: "8f28bdf4-b108-4ba4-9b4c-b0e27a6b746d" }],
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  totalCartPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    calcTotalPrice(state, action) {
      state.totalPrice = state.totalPrice + action.payload;
    },
    updateCart(state, action) {
      state.cart = [...state.cart, action.payload];
    },
    updateItemQuantity(state, action) {
      const { id, newQuantity } = action.payload;
      const product = state.cart.find((item) => item.product_id === id);

      if (product) {
        product.quantity = newQuantity;
        product.totalPrice = product.unitPrice * newQuantity;
      }
    },
  },
});

export const { calcTotalPrice, updateCart, updateItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;
