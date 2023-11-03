import styled from "styled-components";
import { NavLink } from "react-router-dom";
import background from "../../assets/sky.jpg";

export const StyledNavLink = styled(NavLink)`
  display: block;
  max-width: 136px;
  margin: 0 auto;
  text-align: center;
  font-family: inherit;
  font-weight: 600;
  font-size: 20px;
  padding: 10px 20px;
  line-height: 1.2;
  white-space: nowrap;
  background-color: #fbc02d;
  color: #000000;
  outline: 2px solid transparent;
  outline-offset: 2px;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color cubic-bezier(0.4, 0, 1, 1) 200ms;

  &:hover,
  &:focus {
    background-color: #fbc846;
  }
  &:active {
    background-color: #fbc02d;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 30px;
  height: calc(100vh - 80px);
  width: 100vw;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: black;

  @media only screen and (min-width: 686px) {
    padding: 40px;
    flex-direction: row;
  }
`;

export const Image = styled.img`
  display: block;
  height: 150px;
  align-self: end;

  @media only screen and (min-width: 686px) {
    height: 200px;
    align-self: center;
  }
`;

export const ProblemText = styled.p`
  color: #fbaa1d;
  text-align: center;
  font-size: 24px;
  font-family: "Nunito Sans", sans-serif;

  @media only screen and (min-width: 686px) {
    font-size: 32px;
  }
`;

export const ErrorStatus = styled.p`
  margin: -40px auto;
  color: #ffffff;
  text-align: center;
  font-size: 120px;
  font-family: "Fira Sans", sans-serif;

  @media only screen and (min-width: 686px) {
    font-size: 200px;
    margin: -70px auto;
  }
`;

export const ErrorText = styled.h2`
  margin-bottom: 15px;
  color: #fbaa1d;
  text-align: center;
  font-size: 32px;
  font-family: "Nunito Sans", sans-serif;

  @media only screen and (min-width: 686px) {
    font-size: 48px;
  }
`;
