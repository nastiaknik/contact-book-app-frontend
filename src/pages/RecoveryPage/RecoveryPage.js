import { Helmet } from "react-helmet";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../redux/auth/operations";
import { selectIsLoading } from "../../redux/auth/selectors";
import { Formik } from "formik";
import { FaKey } from "react-icons/fa";
import { RiLock2Fill } from "react-icons/ri";
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

const RecoveryPage = () => {
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const { token } = useParams();

  const handleSubmit = (values) => {
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
            {(props) => {
              return (
                <Form>
                  <Title>Reset Password</Title>
                  <FieldWrapper>
                    <Input
                      props={props}
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
                      props={props}
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
