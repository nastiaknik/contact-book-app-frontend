import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import logo from "../../assets/logo.png";
import { Header, Nav, StyledNavLink, Image } from "./AppBar.styled";

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
