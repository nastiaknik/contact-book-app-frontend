import styled from "styled-components";
import { Field } from "formik";

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
    background-color: #ffffff;
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
    background-color: #ffffff;
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
  margin-left: ${(props) => (props.icon ? "33px" : "0")};
  width: 100%;
`;

export const PasswordToggle = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`;
