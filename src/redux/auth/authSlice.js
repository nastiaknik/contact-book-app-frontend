import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { register, login, logout, refreshUser } from "./operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.loading = false;
        // state.user = payload.user;
        state.user = null;
        state.token = payload.token;
        state.isLoggedIn = false;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      /* .addCase(current.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isLoggedIn = true;
        state.loading = false;
        state.token = payload.token;
      }) */
      .addCase(logout.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.loading = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.loading = false;
      })
      /* .addCase(current.rejected, (state, { payload }) => {
        state.loading = false;
        state.token = "";
        state.error = payload;
      }) */
      .addMatcher(
        isAnyOf(
          register.pending,
          login.pending,
          /* current.pending, */
          logout.pending,
          refreshUser.pending
        ),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          register.rejected,
          login.rejected,
          logout.rejected,
          /* current.rejected, */ refreshUser.rejected
        ),
        (state, { payload }) => {
          state.loading = false;
          state.error = payload;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
