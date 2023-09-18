import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  padding: 8px;
  font-family: "Open Sans", sans-serif;
  background-color: #56a68d;
  color: #fff;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
  z-index: 999;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 10px;
  margin-left: 20px;
  align-items: center;
  justify-content: baseline;

  @media only screen and (max-width: 468px) {
    margin-left: 10px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-align: center;
  text-decoration: none;
  padding: 5px 10px;
  color: teal;
  font-size: 16px;
  font-weight: 550;
  border-radius: 20px;
  transition: background-color color opacity cubic-bezier(0.4, 0, 0.2, 1) 200ms;

  &:hover,
  :focus {
    color: white;
  }
  &.active {
    color: white;
    background-color: teal;
    &:hover,
    :focus {
      opacity: 0.8;
      color: white;
    }
  }

  @media only screen and (max-width: 330px) {
    font-size: 14px;
  }
`;

export const Image = styled.img`
  width: 50px;
  margin-right: 10px;

  @media only screen and (max-width: 468px) {
    width: 40px;
  }
`;
