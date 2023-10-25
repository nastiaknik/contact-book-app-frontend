import styled from "styled-components";
import { Form as FormikForm } from "formik";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  min-height: calc(100vh - 80px);
  background-color: #f9f8fb;
  padding: 20px 0;

  @media only screen and (min-width: 350px) {
    padding: 40px 25px;
  }
  @media only screen and (min-width: 468px) {
    padding: 50px 30px;
  }
  @media only screen and (min-width: 624px) {
    padding: 50px;
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
  max-width: 800px;
  padding: 15px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 25px;
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 700;
  font-size: calc(1.3rem + 1.5vw);
  line-height: 1.2;
  margin: 5px auto;
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 30px;
  margin: 10px auto;
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
    background-color: #386bc0;
  }
  &:active {
    background-color: #3566b6;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  max-width: 300px;
  object-fit: contain;
  margin: 0 auto;
`;

export const LoginLink = styled(NavLink)`
  color: #3b71ca;
  text-align: center;

  &:hover {
    color: #386bc0;
  }
`;

export const Paragraph = styled.p`
  text-align: center;
`;
