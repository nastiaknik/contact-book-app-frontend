import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  register,
  login,
  logout,
  refreshUser,
  sendRecoveryEmail,
  changePassword,
  googleAuth,
} from "./operations";

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
        state.user = null;
        state.token = payload.token;
        state.isLoggedIn = false;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(googleAuth.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
      })
      .addMatcher(
        isAnyOf(
          register.fulfilled,
          login.fulfilled,
          logout.fulfilled,
          refreshUser.fulfilled,
          sendRecoveryEmail.fulfilled,
          changePassword.fulfilled,
          googleAuth.fulfilled
        ),
        (state) => {
          state.loading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          register.pending,
          login.pending,
          logout.pending,
          sendRecoveryEmail.pending,
          changePassword.pending,
          googleAuth.pending
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
          sendRecoveryEmail.rejected,
          changePassword.rejected,
          googleAuth.rejected
        ),
        (state, { payload }) => {
          state.loading = false;
          state.error = payload;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
