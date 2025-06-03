import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action to set user and token
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;

      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);
    },
    // Action to logout (clear user and token)
    logout: (state) => {
      state.user = null;
      state.token = null;

      localStorage.clear();
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
