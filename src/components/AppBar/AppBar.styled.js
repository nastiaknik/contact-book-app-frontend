import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  gap: 5px;
  width: 100%;
  height: 80px;
  padding: 8px;
  font-family: "Open Sans", sans-serif;
  color: #ffffff;
  background-color: #56a68d;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
  z-index: 999;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: baseline;
  gap: 10px;
  margin-left: 20px;

  @media only screen and (max-width: 360px) {
    gap: 5px;
    margin-left: 5px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-align: center;
  padding: 5px 10px;
  color: teal;
  text-decoration: none;
  font-size: 16px;
  font-weight: 550;
  border-radius: 20px;
  transition: background-color color opacity cubic-bezier(0.4, 0, 0.2, 1) 200ms;

  &:hover,
  :focus {
    color: #ffffff;
  }
  &.active {
    color: #ffffff;
    background-color: teal;
    &:hover,
    :focus {
      opacity: 0.8;
      color: #ffffff;
    }
  }

  @media only screen and (max-width: 360px) {
    font-size: 14px;
  }
`;

export const Image = styled.img`
  width: 50px;
  margin-right: 10px;

  @media only screen and (max-width: 360px) {
    margin-right: 0;
  }
  @media only screen and (max-width: 468px) {
    width: 40px;
  }
`;
