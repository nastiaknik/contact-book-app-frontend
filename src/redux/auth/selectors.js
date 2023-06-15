export const selectIsLoggedIn = ({ auth }) => auth.isLoggedIn;

export const selectAuth = ({ auth }) => {
  const { isLogin, token } = auth;
  return { isLogin, token };
};

export const selectUser = ({ auth }) => auth.user;

export const selectIsLoading = ({ auth }) => auth.loading;
