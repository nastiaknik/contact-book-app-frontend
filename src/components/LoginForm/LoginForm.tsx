import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "redux/store";
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

export const LoginForm: React.FC = () => {
  const [isForgetModalOpen, setForgetModalOpen] = useState<boolean>(false);
  const [isCheckEmailOpen, setIsCheckEmailOpen] = useState<boolean>(false);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const isLoading: boolean = useSelector(selectIsLoading);
  const error: string | null = useSelector(selectError);

  const handleSubmit = (values: { email: string; password: string }) => {
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
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={LoginSchema}
        >
          {({ values, handleChange, touched, errors }) => (
            <Form>
              <Title>Login</Title>
              <Input
                values={values}
                handleChange={handleChange}
                touched={touched}
                errors={errors}
                name="email"
                id="email"
                type="email"
                placeholder="nugget@gmail.com"
                label="Email"
                icon={<GrMail size={25} />}
              />
              <Input
                values={values}
                handleChange={handleChange}
                touched={touched}
                errors={errors}
                name="password"
                id="password"
                type={passwordVisible ? "text" : "password"}
                placeholder="******"
                label="Password"
                onToggle={togglePasswordVisibility}
                visible={passwordVisible}
                icon={<RiLock2Fill size={25} />}
              />
              <ForgotPasswordLink type="button" onClick={toggleForgetModal}>
                Forgot Password?
              </ForgotPasswordLink>
              <Button type="submit">Login</Button>
              <RegisterParagraph>
                Don&apos;t have an account?{" "}
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
