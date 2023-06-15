import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { BiErrorCircle } from "react-icons/bi";
import {
  InputContainer,
  Button,
  StyledField,
  LabelContainer,
  Form,
  Error,
} from "./LoginForm.styled";

const logInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(login({ email: values.email, password: values.password }));
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={logInSchema}
    >
      {(props) => {
        return (
          <Form>
            <InputContainer>
              <LabelContainer>
                <div
                  style={{
                    display: "flex",
                    wtap: "nowrap",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <label htmlFor="email">Email</label>
                  <StyledField
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="nugget@gmail.com"
                    value={props.values.number}
                    onChange={props.handleChange}
                    className={
                      props.touched.email && props.errors.email ? "error" : ""
                    }
                  />
                </div>
                <ErrorMessage name="email">
                  {(msg) => (
                    <Error>
                      <BiErrorCircle /> {msg}
                    </Error>
                  )}
                </ErrorMessage>
              </LabelContainer>
              <LabelContainer>
                <div
                  style={{
                    display: "flex",
                    wtap: "nowrap",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <label htmlFor="password">Password</label>
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
                        : ""
                    }
                  />
                </div>
                <ErrorMessage name="password">
                  {(msg) => (
                    <Error>
                      <BiErrorCircle /> {msg}
                    </Error>
                  )}
                </ErrorMessage>
              </LabelContainer>
              <Button type="submit">Log In</Button>
            </InputContainer>
          </Form>
        );
      }}
    </Formik>
  );
};
