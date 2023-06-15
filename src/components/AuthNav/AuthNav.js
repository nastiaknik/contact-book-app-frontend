import { StyledNavLink, Wrapper } from "./AuthNav.styled";

export const AuthNav = () => {
  return (
    <Wrapper>
      <StyledNavLink to="/auth/register">Register</StyledNavLink>
      <StyledNavLink to="/auth/login">Log In</StyledNavLink>
    </Wrapper>
  );
};
