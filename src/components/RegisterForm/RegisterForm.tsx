import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "redux/store";
import { register } from "../../redux/auth/operations";
import { selectIsLoading, selectError } from "../../redux/auth/selectors";
import { Formik } from "formik";
import { BsPersonFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { RiLock2Fill } from "react-icons/ri";
import { Loader } from "../Loader/Loader";
import { CheckEmail } from "../CheckEmailModal/CheckEmail";
import { GoogleBtn } from "../SharedComponents/GoogleBtn/GoogleBtn";
import { Input } from "../SharedComponents/Input/Input";
import { RegisterSchema } from "../../schemas/UserSchemas";
import registerImg from "../../assets/register.png";
import {
  Container,
  Title,
  Button,
  Form,
  Wrapper,
  Image,
  LoginParagraph,
  LoginLink,
} from "./RegisterForm.styled";

interface FormValues {
  name: string;
  email: string;
  password: string;
}

export const RegisterForm: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isCheckEmailOpen, setIsCheckEmailOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const toggleCheckEmail = () => {
    setIsCheckEmailOpen((prev) => !prev);
  };

  const handleSubmit = (values: FormValues) => {
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
        <Image
          src={registerImg}
          alt="A drawing of a man entering the door to another world"
        />
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={RegisterSchema}
        >
          {({ values, handleChange, touched, errors }) => {
            return (
              <Form>
                <Title>Sign up</Title>
                <Input
                  values={values}
                  handleChange={handleChange}
                  touched={touched}
                  errors={errors}
                  name="name"
                  id="name"
                  type="text"
                  placeholder="nugget"
                  label="Username"
                  icon={<BsPersonFill size={25} />}
                />
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
                <Button type="submit">Register</Button>
                <LoginParagraph>
                  Have an account already?{" "}
                  <LoginLink to="/auth/login">Login</LoginLink>
                </LoginParagraph>
                <GoogleBtn />
              </Form>
            );
          }}
        </Formik>
      </Wrapper>
      {isCheckEmailOpen && !isLoading && !error && (
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
