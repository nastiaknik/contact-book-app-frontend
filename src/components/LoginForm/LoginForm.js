import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/auth/selectors";
import { login } from "../../redux/auth/operations";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { BiErrorCircle } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import { RiLock2Fill } from "react-icons/ri";
import loginImg from "../../assets/login.png";
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
} from "./LoginForm.styled";
import { Loader } from "../Loader/Loader";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = (values) => {
    dispatch(login({ email: values.email, password: values.password }));
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
                        type="password"
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
                <Button type="submit">Login</Button>
                <RegisterParagraph>
                  Don't have an account?{" "}
                  <RegisterLink to="/auth/register">Register</RegisterLink>
                </RegisterParagraph>
              </Form>
            );
          }}
        </Formik>
      </Wrapper>
      {isLoading && <Loader />}
    </Container>
  );
};
