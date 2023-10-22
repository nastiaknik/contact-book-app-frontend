export const selectIsLoggedIn = ({ auth }) => auth.isLoggedIn;

export const selectAuth = ({ auth }) => {
  const { isLoggedIn, token } = auth;
  return { isLoggedIn, token };
};

export const selectUser = ({ auth }) => auth.user;

export const selectIsLoading = ({ auth }) => auth.loading;

export const selectError = ({ auth }) => auth.error;

export const selectToken = ({ auth }) => auth.token;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;
