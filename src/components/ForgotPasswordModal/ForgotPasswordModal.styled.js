import styled from "styled-components";
import { Form as FormikForm } from "formik";

export const Form = styled(FormikForm)`
  display: flex;
  flex-flow: column wrap;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  width: 100%;
  max-width: 100%;
  padding: 15px;
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
  width: 100%;
  object-fit: contain;
  display: block;
`;
