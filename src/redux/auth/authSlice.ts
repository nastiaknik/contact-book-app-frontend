import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import {
  register,
  login,
  logout,
  refreshUser,
  sendRecoveryEmail,
  changePassword,
  googleAuth,
} from "./operations";
import { User } from "types/UserTypes";

export interface AuthState {
  user: User | null;
  token: string | null;
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: { name: null, email: null, _id: null },
  token: null,
  isLoggedIn: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        register.fulfilled,
        (state, { payload }: PayloadAction<{ verificationToken: string }>) => {
          state.user = null;
          state.token = payload.verificationToken;
          state.isLoggedIn = false;
        }
      )
      .addCase(
        login.fulfilled,
        (state, { payload }: PayloadAction<{ user: User; token: string }>) => {
          state.user = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
        }
      )
      .addCase(
        googleAuth.fulfilled,
        (state, { payload }: PayloadAction<{ user: User; token: string }>) => {
          state.user = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
        }
      )
      .addCase(logout.fulfilled, (state) => {
        state.user = { name: null, email: null, _id: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(
        refreshUser.fulfilled,
        (state, { payload }: PayloadAction<User>) => {
          state.user = payload;
          state.isLoggedIn = true;
        }
      )
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
        (state, { payload }: PayloadAction<any>) => {
          state.loading = false;
          state.error = payload;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
