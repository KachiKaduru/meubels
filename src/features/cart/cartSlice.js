import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  totalCartPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateTotalCartPrice(state) {
      state.totalCartPrice = state.cart.reduce((total, item) => total + item.total_price, 0);
    },
    updateCart(state, action) {
      state.cart = [...state.cart, action.payload];
    },
    updateItemQuantity(state, action) {
      const { id, newQuantity } = action.payload;
      const product = state.cart.find((item) => item.product_id === id);

      if (product) {
        product.quantity = newQuantity;
        product.total_price = product.unit_price * newQuantity;
      }

      state.totalCartPrice = state.cart.reduce((total, item) => total + item.total_price, 0);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.product_id !== action.payload);
      state.totalCartPrice = state.cart.reduce((total, item) => total + item.total_price, 0);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { updateTotalCartPrice, updateCart, updateItemQuantity, deleteItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
