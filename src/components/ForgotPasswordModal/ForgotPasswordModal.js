import { useDispatch } from "react-redux";
import { sendRecoveryEmail } from "../../redux/auth/operations";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { BiErrorCircle } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import {
  Title,
  Button,
  StyledField,
  FieldContainer,
  InputContainer,
  IconFieldWrapper,
  Form,
  Error,
  Label,
} from "./ForgotPasswordModal.styled";
import { Modal } from "../Modal/Modal";

const EmailSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

export const ForgotPasswordModal = ({ onClose, isOpen, toggleCheckEmail }) => {
  const dispatch = useDispatch();

  const sendResetEmail = (values) => {
    dispatch(sendRecoveryEmail({ email: values.email }));
    onClose();
    toggleCheckEmail();
  };

  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={sendResetEmail}
        validationSchema={EmailSchema}
      >
        {(props) => {
          return (
            <Form>
              <img src="" alt="" />
              <Title>Forgot Password</Title>
              <p>
                Enter your email and we'll send you a link to reset your
                password
              </p>
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
                      value={props.values.email}
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
              <Button type="submit">Request reset link</Button>
            </Form>
          );
        }}
      </Formik>
    </Modal>
  );
};
