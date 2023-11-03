import { Helmet } from "react-helmet";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "redux/store";
import { changePassword } from "../../redux/auth/operations";
import { selectIsLoading } from "../../redux/auth/selectors";
import { Formik } from "formik";
import { FaKey } from "react-icons/fa";
import { RiLock2Fill } from "react-icons/ri";
import { toast } from "react-toastify";
import { Loader } from "../../components/Loader/Loader";
import { Input } from "../../components/SharedComponents/Input/Input";
import { ResetPasswordSchema } from "../../schemas/UserSchemas";
import lock from "../../assets/password.png";
import {
  Container,
  Form,
  Title,
  Button,
  FieldWrapper,
  Wrapper,
  LoginLink,
  Image,
  Paragraph,
} from "./RecoveryPage.styled";

const RecoveryPage: React.FC = () => {
  const [newPasswordVisible, setNewPasswordVisible] = useState<boolean>(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] =
    useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const isLoading: boolean = useSelector(selectIsLoading);
  const { token } = useParams<string>();

  const handleSubmit = (values: {
    newPassword: string;
    confirmPassword: string;
  }): void => {
    if (!token) {
      toast.error("Token is missing. Unable to change the password.");
      return;
    }
    dispatch(
      changePassword({ resetToken: token, newPassword: values.newPassword })
    );
  };

  const toggleNewPasswordVisibility = () => {
    setNewPasswordVisible(!newPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <>
      <Helmet>
        <title>Reset Password</title>
      </Helmet>
      <Container>
        <Wrapper>
          <Image src={lock} alt="A lock with a key" />
          <Formik
            initialValues={{
              newPassword: "",
              confirmPassword: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={ResetPasswordSchema}
          >
            {({ values, handleChange, touched, errors }) => {
              return (
                <Form>
                  <Title>Reset Password</Title>
                  <FieldWrapper>
                    <Input
                      values={values}
                      handleChange={handleChange}
                      touched={touched}
                      errors={errors}
                      name="newPassword"
                      id="newPassword"
                      type={newPasswordVisible ? "text" : "password"}
                      placeholder="******"
                      label="Password"
                      onToggle={toggleNewPasswordVisibility}
                      visible={newPasswordVisible}
                      icon={<FaKey size={20} />}
                    />
                    <Input
                      values={values}
                      handleChange={handleChange}
                      touched={touched}
                      errors={errors}
                      name="confirmPassword"
                      id="confirmPassword"
                      type={confirmPasswordVisible ? "text" : "password"}
                      placeholder="******"
                      label="Confirm Password"
                      onToggle={toggleConfirmPasswordVisibility}
                      visible={confirmPasswordVisible}
                      icon={<RiLock2Fill size={25} />}
                    />
                  </FieldWrapper>
                  <Button type="submit">Reset Password</Button>
                  <Paragraph>
                    <LoginLink to="/auth/login">Return to login</LoginLink>
                  </Paragraph>
                </Form>
              );
            }}
          </Formik>
        </Wrapper>
      </Container>
      {isLoading && <Loader />}
    </>
  );
};

export default RecoveryPage;
