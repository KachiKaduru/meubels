import { createReducer, createSlice } from "@reduxjs/toolkit";

const userInitialSlice = {
  userId: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialSlice,
  reducers: {
    setUserId(state, action) {
      state.userId = action.payload;
    },
  },
});

export const { setUserId } = userSlice.actions;

export default userSlice.reducer;
