import { createSlice } from "@reduxjs/toolkit";

const userInitialSlice = {
  userId: localStorage.getItem("user_id") || "",
  name: "john",
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialSlice,
  reducers: {
    updateUserId(state, action) {
      state.userId = action.payload;
    },
    updateName(state, action) {
      state.name = action.payload;
    },
  },
});

export const { updateUserId, updateName } = userSlice.actions;

export default userSlice.reducer;
