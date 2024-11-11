import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    updateOrders(state, action) {
      state.orders = action.payload;
    },
  },
});

export const { updateOrders } = orderSlice.actions;

export default orderSlice.reducer;
