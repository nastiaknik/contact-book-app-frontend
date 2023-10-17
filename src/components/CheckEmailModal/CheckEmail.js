import envelope from "../../assets/envelope.png";
import { Modal } from "../Modal/Modal";
import { Title } from "./CheckEmail.styled";

export const CheckEmail = ({ onClose, isOpen }) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <img src={envelope} alt="Open envelope" width="250" />
      <Title>Check Email</Title>
      <p>
        Please check your email inbox and click on the provided link to reset
        your password / verify your email. If you don't receive email, click
        here to resend.
      </p>
      <button type="button" onClick={onClose}>
        Back
      </button>
    </Modal>
  );
};
