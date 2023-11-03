import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "redux/store";
import { sendRecoveryEmail } from "../../redux/auth/operations";
import { Formik } from "formik";
import { GrMail } from "react-icons/gr";
import { Modal } from "../Modal/Modal";
import { Input } from "../SharedComponents/Input/Input";
import { EmailSchema } from "../../schemas/UserSchemas";
import { Form, Title, Button } from "./ForgotPasswordModal.styled";

interface ForgotPasswordModalProps {
  onClose: () => void;
  isOpen: boolean;
  toggleCheckEmail: () => void;
}

export const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({
  onClose,
  isOpen,
  toggleCheckEmail,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const sendResetEmail = (values: { email: string }) => {
    dispatch(sendRecoveryEmail(values.email));
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
        {({ values, handleChange, touched, errors }) => (
          <Form>
            <Title>Forgot Password</Title>
            <p>
              Enter your email, and we&apos;ll send you a link to reset your
              password
            </p>

            <Input
              values={values}
              handleChange={handleChange}
              touched={touched}
              errors={errors}
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
