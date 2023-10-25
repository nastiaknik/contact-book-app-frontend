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

export const Input = ({
  props,
  name,
  id = name,
  type = "text",
  placeholder,
  icon,
  label,
  onToggle,
  visible = false,
  ...restProps
}) => {
  return (
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
            value={props.values[name]}
            onChange={props.handleChange}
            className={
              props.touched[name] && props.errors[name]
                ? "error"
                : props.touched[name] && !props.errors[name]
                ? "success"
                : ""
            }
            {...restProps}
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
          <Error icon={icon}>
            <BiErrorCircle /> {msg}
          </Error>
        )}
      </ErrorMessage>
    </FieldContainer>
  );
};
