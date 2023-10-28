import { useDispatch } from "react-redux";
import { sendRecoveryEmail } from "../../redux/auth/operations";
import { Formik } from "formik";
import { GrMail } from "react-icons/gr";
import { Modal } from "../Modal/Modal";
import { Input } from "../SharedComponents/Input/Input";
import { EmailSchema } from "../../schemas/UserSchemas";
import { Form, Title, Button } from "./ForgotPasswordModal.styled";

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
        {(props) => (
          <Form>
            <Title>Forgot Password</Title>
            <p>
              Enter your email and we'll send you a link to reset your password
            </p>

            <Input
              values={props.values}
              handleChange={props.handleChange}
              touched={props.touched}
              errors={props.errors}
              id="forgotPasswordEmail"
              name="email"
              type="email"
              placeholder="nugget@gmail.com"
              label="Email"
              icon={<GrMail size={25} />}
            />

            <Button type="submit">Request reset link</Button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};
