import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  width: fit-content;
  margin: 0 auto;
  padding: 14px 56px;
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 24.38px;
  text-transform: uppercase;
  color: #373737;
  border-radius: 10.31px;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: #f1c232;
  text-decoration: none;
  cursor: pointer;

  :hover,
  :focus {
    background-color: #e7bb44;
  }

  :active {
    background-color: #e7bb44;
  }
`;
