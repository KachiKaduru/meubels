import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // cart: JSON.parse(localStorage.getItem("cart")),
  cart: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    calcTotalPrice(state, action) {
      state.totalPrice = state.totalPrice + action.payload;
    },
  },
});

export const { calcTotalPrice } = cartSlice.actions;

export default cartSlice.reducer;
