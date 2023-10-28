import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: end;
  gap: 15px;
  margin-right: 30px;

  @media only screen and (max-width: 468px) {
    gap: 10px;
    margin-right: 10px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-align: center;
  padding: 5px 10px;
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;
  font-weight: 550;
  opacity: 1;
  border-radius: 20px;
  transition: background-color color opacity cubic-bezier(0.4, 0, 0.2, 1) 200ms;

  &:hover,
  &:focus {
    color: teal;
  }
  &.active {
    color: #ffffff;
    background-color: teal;
    &:hover,
    &:focus {
      opacity: 0.8;
    }
  }

  @media only screen and (max-width: 360px) {
    font-size: 14px;
  }
`;
