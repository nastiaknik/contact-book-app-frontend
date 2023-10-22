import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../redux/auth/operations";
import { selectIsLoading } from "../../redux/auth/selectors";
import lock from "../../assets/password.png";
import { Helmet } from "react-helmet";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { BiErrorCircle, BiHide, BiShow } from "react-icons/bi";
import { FaKey } from "react-icons/fa";
import { RiLock2Fill } from "react-icons/ri";
import { Loader } from "../../components/Loader/Loader";
import {
  Container,
  Title,
  Button,
  StyledField,
  FieldContainer,
  FieldWrapper,
  InputContainer,
  IconFieldWrapper,
  Form,
  Error,
  Label,
  Wrapper,
  LoginLink,
  PasswordToggle,
  Image,
  Paragraph,
} from "./RecoveryPage.styled";

const resetPasswordSchema = Yup.object().shape({
  newPassword: Yup.string()
    .required("Password is required")
    .min(6, "Minimum 6 characters"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const RecoveryPage = () => {
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
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
            validationSchema={resetPasswordSchema}
          >
            {(props) => {
              return (
                <Form>
                  <Title>Reset Password</Title>
                  <FieldWrapper>
                    <FieldContainer>
                      <IconFieldWrapper>
                        <label htmlFor="newPassword">
                          <FaKey size={20} />
                        </label>
                        <InputContainer>
                          <StyledField
                            id="newPassword"
                            type={newPasswordVisible ? "text" : "password"}
                            name="newPassword"
                            required
                            placeholder="******"
                            value={props.values.newPassword}
                            onChange={props.handleChange}
                            className={
                              props.touched.newPassword &&
                              props.errors.newPassword
                                ? "error"
                                : props.touched.newPassword &&
                                  !props.errors.newPassword
                                ? "success"
                                : ""
                            }
                          />
                          <Label htmlFor="newPassword">Password</Label>
                          <PasswordToggle
                            type="button"
                            onClick={toggleNewPasswordVisibility}
                          >
                            {newPasswordVisible ? (
                              <BiHide size={20} />
                            ) : (
                              <BiShow size={20} />
                            )}
                          </PasswordToggle>
                        </InputContainer>
                      </IconFieldWrapper>
                      <ErrorMessage name="newPassword">
                        {(msg) => (
                          <Error>
                            <BiErrorCircle /> {msg}
                          </Error>
                        )}
                      </ErrorMessage>
                    </FieldContainer>

                    <FieldContainer>
                      <IconFieldWrapper>
                        <label htmlFor="confirmPassword">
                          <RiLock2Fill size={25} />
                        </label>
                        <InputContainer>
                          <StyledField
                            id="confirmPassword"
                            type={confirmPasswordVisible ? "text" : "password"}
                            name="confirmPassword"
                            required
                            placeholder="******"
                            value={props.values.confirmPassword}
                            onChange={props.handleChange}
                            className={
                              props.touched.confirmPassword &&
                              props.errors.confirmPassword
                                ? "error"
                                : props.touched.confirmPassword &&
                                  !props.errors.confirmPassword
                                ? "success"
                                : ""
                            }
                          />
                          <Label htmlFor="confirmPassword">
                            Confirm Password
                          </Label>
                          <PasswordToggle
                            type="button"
                            onClick={toggleConfirmPasswordVisibility}
                          >
                            {confirmPasswordVisible ? (
                              <BiHide size={20} />
                            ) : (
                              <BiShow size={20} />
                            )}
                          </PasswordToggle>
                        </InputContainer>
                      </IconFieldWrapper>
                      <ErrorMessage name="confirmPassword">
                        {(msg) => (
                          <Error>
                            <BiErrorCircle /> {msg}
                          </Error>
                        )}
                      </ErrorMessage>
                    </FieldContainer>
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
