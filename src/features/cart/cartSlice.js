import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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

    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.product_id !== action.payload);
    },
  },
});

export const { calcTotalPrice, updateCart, updateItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;
