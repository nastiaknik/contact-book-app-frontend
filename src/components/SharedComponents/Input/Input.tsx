import React from "react";
import "tslib";
import { ErrorMessage } from "formik";
import { BiErrorCircle, BiHide, BiShow } from "react-icons/bi";
import {
  FieldContainer,
  IconFieldWrapper,
  InputContainer,
  StyledField,
  Label,
  Error,
  PasswordToggle,
} from "./Input.styled";

interface InputProps {
  values: {
    [key: string]: any;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  touched: {
    [key: string]: boolean;
  };
  errors: {
    [key: string]: string | undefined;
  };
  name: string;
  id: string;
  type?: string;
  placeholder?: string;
  label?: string;
  icon?: JSX.Element | null;
  onToggle?: () => void;
  visible?: boolean;
}

export const Input: React.FC<InputProps> = ({
  values,
  handleChange,
  touched,
  errors,
  name,
  id,
  type = "text",
  placeholder = "",
  icon,
  label,
  onToggle,
  visible = false,
}) => (
  <FieldContainer>
    <IconFieldWrapper>
      {icon && <label htmlFor={id}>{icon}</label>}
      <InputContainer>
        <StyledField
          id={id}
          type={type}
          name={name}
          required
          placeholder={placeholder}
          value={values[name]}
          onChange={handleChange}
          className={
            touched[name] && errors[name]
              ? "error"
              : touched[name] && !errors[name]
              ? "success"
              : ""
          }
        />
        <Label htmlFor={id}>{label}</Label>
        {onToggle && (
          <PasswordToggle type="button" onClick={onToggle}>
            {visible ? <BiHide size={20} /> : <BiShow size={20} />}
          </PasswordToggle>
        )}
      </InputContainer>
    </IconFieldWrapper>

    <ErrorMessage name={name}>
      {(msg) => (
        <Error icon={!!icon}>
          <BiErrorCircle /> {msg}
        </Error>
      )}
    </ErrorMessage>
  </FieldContainer>
);
