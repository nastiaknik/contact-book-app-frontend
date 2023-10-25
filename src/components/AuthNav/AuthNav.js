import { Wrapper, StyledNavLink } from "./AuthNav.styled";

export const AuthNav = () => {
  return (
    <Wrapper>
      <StyledNavLink to="/auth/register">Sign Up</StyledNavLink>
      <StyledNavLink to="/auth/login">Log In</StyledNavLink>
    </Wrapper>
  );
};
