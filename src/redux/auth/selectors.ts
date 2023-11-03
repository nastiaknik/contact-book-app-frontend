import { AuthState } from "./authSlice";
import { User } from "../../types/UserTypes";

export const selectIsLoggedIn = ({ auth }: { auth: AuthState }): boolean =>
  auth.isLoggedIn;

export const selectAuth = ({
  auth,
}: {
  auth: AuthState;
}): { isLoggedIn: boolean; token: string | null } => {
  const { isLoggedIn, token } = auth;
  return { isLoggedIn, token };
};

export const selectUser = ({ auth }: { auth: AuthState }): User | null =>
  auth.user;

export const selectIsLoading = ({ auth }: { auth: AuthState }): boolean =>
  auth.loading;

export const selectError = ({ auth }: { auth: AuthState }): string | null =>
  auth.error;

export const selectToken = ({ auth }: { auth: AuthState }): string | null =>
  auth.token;

export const selectIsRefreshing = (state: {
  auth: { isRefreshing: boolean };
}): boolean => state.auth.isRefreshing;
