import { createSlice } from "@reduxjs/toolkit";

const userInitialSlice = {
  user_id: localStorage.getItem("user_id") || "",
  name: "",
  error: null,
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
    catchError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { updateUserId, updateName, catchError } = userSlice.actions;

export default userSlice.reducer;
