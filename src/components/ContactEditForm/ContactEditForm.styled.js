import styled from "styled-components";
import { Field, Form as FormikForm } from "formik";

export const Title = styled.p`
  font-size: 24px;
  text-align: center;
  margin-bottom: 15px;
`;

export const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: nowrap;
  gap: 5px;
  justify-content: center;
  align-items: start;
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

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  gap: 5px;
`;

export const IconFieldWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 10px;
`;

export const Label = styled.label`
  display: inline-block;
  padding: 0 5px;
  margin-left: 10px;
  transform: translate(0);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 0;
`;

export const StyledField = styled(Field)`
  width: 100%;
  max-width: 100%;
  background-color: transparent;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  font-family: inherit;
  font-size: 16px;
  display: block;
  appearance: none;
  line-height: 1.6;
  color: #4f4f4f;
  outline: transparent;
  min-height: auto;
  padding: 5px 15px;
  margin: 0;
  transition: all 0.2s linear;

  &.error {
    border-color: #e74c3c;
  }
  &.error + label {
    color: #e74c3c;
  }

  &.success {
    border-color: #4a934a;
  }
  &.success + label {
    color: #4a934a;
  }

  & + label,
  &:not(:placeholder-shown) + label {
    position: absolute;
    top: 6px;
    left: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    pointer-events: none;
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 0;
    background-color: white;
    border-radius: 5px;
  }

  &:focus + label {
    color: #3b71ca;
  }
  &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translateY(-1rem) scale(0.8);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transform-origin: center;
    background-color: white;
  }

  &:focus {
    border-color: #3b71ca;
  }
  &::placeholder {
    opacity: 0;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:focus::placeholder {
    opacity: 1;
    color: #757575;
  }
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
  color: white;
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

export const Error = styled.span`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  color: #e74c3c;
  text-align: start;
  width: 230px;
  font-size: 16px;
  gap: 5px;
  width: 100%;
  margin-left: 10px;
`;
