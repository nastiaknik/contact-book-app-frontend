import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
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
} from "./RegisterForm.styled";

const registerSchema = Yup.object().shape({
  name: Yup.string().required("First name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

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
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={registerSchema}
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
                  <label htmlFor="name">Username</label>
                  <StyledField
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="nugget"
                    value={props.values.name}
                    onChange={props.handleChange}
                    className={
                      props.touched.name && props.errors.name ? "error" : ""
                    }
                  />
                </div>
                <ErrorMessage name="name">
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
              <Button type="submit">Register</Button>
            </InputContainer>
          </Form>
        );
      }}
    </Formik>
  );
};
