import styled from "styled-components";
import { Form as FormikForm } from "formik";

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  width: 100%;
  max-width: 800px;
  padding: 15px 15px 40px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;

  @media only screen and (max-width: 468px) {
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  margin: 5px auto;
  font-weight: 700;
  font-size: calc(1.3rem + 1.5vw);
  line-height: 1.2;
  text-align: center;
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
  background-color: #3b71ca;
  border: none;
  border-radius: 5px;
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
