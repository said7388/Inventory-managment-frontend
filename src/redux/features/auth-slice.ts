import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, ProfilePayload } from "../../types";

const initialState: AuthState = {
  profile:
    typeof window !== "undefined" && localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") || "{}")
      : {},
  token:
    typeof window !== "undefined" && localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token") || "")
      : "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ profile: ProfilePayload }>) => {
      localStorage.setItem("user", JSON.stringify(action.payload.profile));
      state.profile = action.payload.profile;
    },
    setToken: (state, action: PayloadAction<{ token: string }>) => {
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      state.token = action.payload.token;
    },
    defaultState: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      state = initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, defaultState, setToken } = authSlice.actions;

export const selectUser = (state: { auth: { profile: any } }) =>
  state.auth.profile;

export const selectAuth = (state: { auth: { token: string } }) =>
  state.auth.token;

export default authSlice.reducer;
