import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import { selectIsLoading } from "../../redux/auth/selectors";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { BiErrorCircle, BiHide, BiShow } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { RiLock2Fill } from "react-icons/ri";
import registerImg from "../../assets/register.png";
import { Loader } from "../Loader/Loader";
import { CheckEmail } from "../CheckEmailModal/CheckEmail";
import {
  Container,
  Title,
  Button,
  StyledField,
  FieldContainer,
  InputContainer,
  IconFieldWrapper,
  Form,
  Error,
  Label,
  Wrapper,
  Image,
  LoginParagraph,
  LoginLink,
  PasswordToggle,
} from "./RegisterForm.styled";

const registerSchema = Yup.object().shape({
  name: Yup.string().required("First name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Minimum 6 characters"),
});

export const RegisterForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isCheckEmailOpen, setIsCheckEmailOpen] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleCheckEmail = () => {
    setIsCheckEmailOpen((prev) => !prev);
  };

  const handleSubmit = (values) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    toggleCheckEmail();
  };

  return (
    <Container>
      <Wrapper>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={registerSchema}
        >
          {(props) => {
            return (
              <Form>
                <Title>Sign up</Title>
                <FieldContainer>
                  <IconFieldWrapper>
                    <label htmlFor="name">
                      <BsPersonFill size={25} />
                    </label>
                    <InputContainer>
                      <StyledField
                        placeholder="nugget"
                        id="name"
                        type="text"
                        name="name"
                        required
                        value={props.values.name}
                        onChange={props.handleChange}
                        className={
                          props.touched.name && props.errors.name
                            ? "error"
                            : props.touched.name && !props.errors.name
                            ? "success"
                            : ""
                        }
                      />
                      <Label htmlFor="name">Username</Label>
                    </InputContainer>
                  </IconFieldWrapper>
                  <ErrorMessage name="name">
                    {(msg) => (
                      <Error>
                        <BiErrorCircle /> {msg}
                      </Error>
                    )}
                  </ErrorMessage>
                </FieldContainer>

                <FieldContainer>
                  <IconFieldWrapper>
                    <label htmlFor="email">
                      <GrMail size={25} />
                    </label>
                    <InputContainer>
                      <StyledField
                        id="email"
                        type="email"
                        name="email"
                        required
                        placeholder="nugget@gmail.com"
                        value={props.values.number}
                        onChange={props.handleChange}
                        className={
                          props.touched.email && props.errors.email
                            ? "error"
                            : props.touched.email && !props.errors.email
                            ? "success"
                            : ""
                        }
                      />
                      <Label htmlFor="email">Email</Label>
                    </InputContainer>
                  </IconFieldWrapper>
                  <ErrorMessage name="email">
                    {(msg) => (
                      <Error>
                        <BiErrorCircle /> {msg}
                      </Error>
                    )}
                  </ErrorMessage>
                </FieldContainer>

                <FieldContainer>
                  <IconFieldWrapper>
                    <label htmlFor="password">
                      <RiLock2Fill size={25} />
                    </label>
                    <InputContainer>
                      <StyledField
                        id="password"
                        type={passwordVisible ? "text" : "password"}
                        name="password"
                        required
                        placeholder="******"
                        value={props.values.password}
                        onChange={props.handleChange}
                        className={
                          props.touched.password && props.errors.password
                            ? "error"
                            : props.touched.password && !props.errors.password
                            ? "success"
                            : ""
                        }
                      />
                      <Label htmlFor="password">Password</Label>
                      <PasswordToggle
                        type="button"
                        onClick={togglePasswordVisibility}
                      >
                        {passwordVisible ? (
                          <BiHide size={20} />
                        ) : (
                          <BiShow size={20} />
                        )}
                      </PasswordToggle>
                    </InputContainer>
                  </IconFieldWrapper>
                  <ErrorMessage name="password">
                    {(msg) => (
                      <Error>
                        <BiErrorCircle /> {msg}
                      </Error>
                    )}
                  </ErrorMessage>
                </FieldContainer>

                <Button type="submit">Register</Button>

                <LoginParagraph>
                  Have an account already?{" "}
                  <LoginLink to="/auth/login">Login</LoginLink>
                </LoginParagraph>
              </Form>
            );
          }}
        </Formik>
        <Image
          src={registerImg}
          alt="A drawing of a man entering the door to another world"
        />
      </Wrapper>
      {isCheckEmailOpen && (
        <CheckEmail
          onClose={toggleCheckEmail}
          isOpen={isCheckEmailOpen}
          type="verification"
        />
      )}
      {isLoading && <Loader />}
    </Container>
  );
};
