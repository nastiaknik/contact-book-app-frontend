import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Form as FormikForm } from "formik";

export const Container = styled.div`
  min-height: calc(100vh - 80px);
  background-color: #f9f8fb;

  @media only screen and (min-width: 350px) {
    padding: 40px 25px;
  }
  @media only screen and (min-width: 468px) {
    padding: 50px 30px;
  }
  @media only screen and (min-width: 624px) {
    padding: 40px 50px;
  }
  @media only screen and (min-width: 1200px) {
    padding: 50px 100px;
  }
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  gap: 15px;
  width: 100%;
  max-width: 100%;
  padding: 15px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  padding: 10px;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 25px;

  @media only screen and (min-width: 768px) {
    padding: 30px;
    flex-direction: row;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 700;
  font-size: calc(1.3rem + 1.5vw);
  line-height: 1.2;
  margin: 5px auto;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 30px;
  margin: 0 auto;
  font-size: 16px;
  font-family: inherit;
  font-weight: 500;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  background-color: #3b71ca;
  box-shadow: 0 4px 9px -4px #3b71ca;
  transition: background-color 200ms ease-in-out;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #7286d3;
    background-color: #386bc0;
  }
  &:active {
    background-color: #3566b6;
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: contain;
  display: block;
`;

export const RegisterParagraph = styled.p`
  text-align: center;
`;

export const RegisterLink = styled(NavLink)`
  color: #3b71ca;

  &:hover {
    color: #386bc0;
  }
`;

export const ForgotPasswordLink = styled.button`
  color: #3b71ca;
  margin-left: auto;

  &:hover {
    color: #386bc0;
  }
`;
