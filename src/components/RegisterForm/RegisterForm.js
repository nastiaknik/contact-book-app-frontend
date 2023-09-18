import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import { selectIsLoading } from "../../redux/auth/selectors";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { BiErrorCircle } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { RiLock2Fill } from "react-icons/ri";
import registerImg from "../../assets/register.png";
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
} from "./RegisterForm.styled";
import { Loader } from "../Loader/Loader";

const registerSchema = Yup.object().shape({
  name: Yup.string().required("First name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = (values) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
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
      {isLoading && <Loader />}
    </Container>
  );
};
