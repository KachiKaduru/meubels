import { createSlice } from "@reduxjs/toolkit";

const userInitialSlice = {
  user_id: localStorage.getItem("user_id") || "",
  name: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialSlice,
  reducers: {
    updateUserId(state, action) {
      state.user_id = action.payload;
    },
    updateName(state, action) {
      state.name = action.payload;
    },
  },
});

export const { updateUserId, updateName } = userSlice.actions;

export default userSlice.reducer;
