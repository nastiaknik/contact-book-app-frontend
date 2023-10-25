import styled from "styled-components";
import { Form as FormikForm } from "formik";

export const Title = styled.p`
  font-size: 24px;
  text-align: center;
  margin-bottom: 15px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 15px;
  padding: 10px;

  @media only screen and (min-width: 448px) {
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 5px;
  }
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 15px;
`;

export const Button = styled.button`
  padding: 10px 30px;
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

export const CancelBtn = styled(Button)`
  background-color: #8c8c8c;
  box-shadow: 0 4px 9px -4px #8c8c8c;

  &:hover,
  &:focus {
    background-color: #767676;
  }
  &:active {
    background-color: #616161;
  }
`;
