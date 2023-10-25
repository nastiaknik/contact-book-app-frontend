import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectError } from "../../redux/auth/selectors";
import { googleAuth, login } from "../../redux/auth/operations";
import { GoogleLogin } from "@react-oauth/google";
import { toast } from "react-toastify";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { BiErrorCircle, BiHide, BiShow } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import { RiLock2Fill } from "react-icons/ri";
import loginImg from "../../assets/login.png";
import { ForgotPasswordModal } from "../ForgotPasswordModal/ForgotPasswordModal";
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
  RegisterLink,
  RegisterParagraph,
  PasswordToggle,
  ForgotPasswordLink,
  GoogleButton,
} from "./LoginForm.styled";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
});

export const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isForgetModalOpen, setForgetModalOpen] = useState(false);
  const [isCheckEmailOpen, setIsCheckEmailOpen] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const handleSubmit = (values) => {
    dispatch(login({ email: values.email, password: values.password }));
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleForgetModal = () => {
    setForgetModalOpen((prev) => !prev);
  };

  const toggleCheckEmail = () => {
    setIsCheckEmailOpen((prev) => !prev);
  };

  return (
    <Container>
      <Wrapper>
        <Image
          src={loginImg}
          alt="A drawing of man and woman giving each other a high five"
        />
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={loginSchema}
        >
          {(props) => {
            return (
              <Form>
                <Title>Login</Title>
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
                        value={props.values.email}
                        onChange={props.handleChange}
                        autoComplete="on"
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
                        autoComplete="on"
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

                <ForgotPasswordLink type="button" onClick={toggleForgetModal}>
                  Forgot Password?
                </ForgotPasswordLink>

                <Button type="submit">Login</Button>

                <RegisterParagraph>
                  Don't have an account?{" "}
                  <RegisterLink to="/auth/register">Register</RegisterLink>
                </RegisterParagraph>

                <GoogleButton>
                  <GoogleLogin
                    onSuccess={(response) => dispatch(googleAuth(response))}
                    onError={(error) => toast.error(error)}
                  />
                </GoogleButton>
              </Form>
            );
          }}
        </Formik>
      </Wrapper>
      {isForgetModalOpen && (
        <ForgotPasswordModal
          onClose={toggleForgetModal}
          isOpen={isForgetModalOpen}
          toggleCheckEmail={toggleCheckEmail}
        />
      )}
      {isCheckEmailOpen && !isLoading && !error && (
        <CheckEmail
          onClose={toggleCheckEmail}
          isOpen={isCheckEmailOpen}
          type="recovery"
        />
      )}
      {isLoading && <Loader />}
    </Container>
  );
};
