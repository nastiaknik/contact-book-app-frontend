import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import { Header, Nav, StyledNavLink, Image } from "./AppBar.styled";
import logo from "../../assets/logo.png";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Header>
      <Nav>
        <NavLink to="/">
          <Image src={logo} alt="Contact Book logo" />
        </NavLink>
        <StyledNavLink to="/">Home</StyledNavLink>
        {isLoggedIn && (
          <StyledNavLink to="/contacts">My Contacts</StyledNavLink>
        )}
      </Nav>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
