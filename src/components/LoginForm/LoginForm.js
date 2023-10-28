import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectError } from "../../redux/auth/selectors";
import { login } from "../../redux/auth/operations";
import { Formik } from "formik";
import { GrMail } from "react-icons/gr";
import { RiLock2Fill } from "react-icons/ri";
import { LoginSchema } from "../../schemas/UserSchemas";
import { ForgotPasswordModal } from "../ForgotPasswordModal/ForgotPasswordModal";
import { CheckEmail } from "../CheckEmailModal/CheckEmail";
import { GoogleBtn } from "../SharedComponents/GoogleBtn/GoogleBtn";
import { Input } from "../SharedComponents/Input/Input";
import { Loader } from "../Loader/Loader";
import loginImg from "../../assets/login.png";
import {
  Container,
  Form,
  Title,
  Button,
  Wrapper,
  Image,
  RegisterLink,
  RegisterParagraph,
  ForgotPasswordLink,
} from "./LoginForm.styled";

export const LoginForm = () => {
  const [isForgetModalOpen, setForgetModalOpen] = useState(false);
  const [isCheckEmailOpen, setIsCheckEmailOpen] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const handleSubmit = (values) => {
    dispatch(login({ email: values.email, password: values.password }));
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
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
          validationSchema={LoginSchema}
        >
          {(props) => (
            <Form>
              <Title>Login</Title>
              <Input
                values={props.values}
                handleChange={props.handleChange}
                touched={props.touched}
                errors={props.errors}
                name="email"
                id="email"
                type="email"
                placeholder="nugget@gmail.com"
                label="Email"
                icon={<GrMail size={25} />}
                autoComplete="on"
              />
              <Input
                values={props.values}
                handleChange={props.handleChange}
                touched={props.touched}
                errors={props.errors}
                name="password"
                id="password"
                type={passwordVisible ? "text" : "password"}
                placeholder="******"
                label="Password"
                onToggle={togglePasswordVisibility}
                visible={passwordVisible}
                icon={<RiLock2Fill size={25} />}
                autoComplete="on"
              />
              <ForgotPasswordLink type="button" onClick={toggleForgetModal}>
                Forgot Password?
              </ForgotPasswordLink>
              <Button type="submit">Login</Button>
              <RegisterParagraph>
                Don't have an account?{" "}
                <RegisterLink to="/auth/register">Register</RegisterLink>
              </RegisterParagraph>
              <GoogleBtn />
            </Form>
          )}
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
