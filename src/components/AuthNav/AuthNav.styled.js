import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: end;
  margin-right: 30px;
  gap: 15px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 10px;
  margin-left: 20px;
  align-items: center;
  justify-content: baseline;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  text-align: center;
  text-decoration: none;
  padding: 5px 10px;
  color: white;
  font-size: 16px;
  font-weight: 550;
  border-radius: 20px;
  transition: background-color color opacity cubic-bezier(0.4, 0, 0.2, 1) 200ms;

  &:hover,
  :focus {
    color: teal;
  }
  &.active {
    color: white;
    background-color: teal;
    &:hover,
    :focus {
      opacity: 0.8;
    }
  }
`;
