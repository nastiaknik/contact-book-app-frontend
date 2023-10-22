import envelope from "../../assets/envelope.png";
import { Modal } from "../Modal/Modal";
import { Title, Image } from "./CheckEmail.styled";

export const CheckEmail = ({ onClose, isOpen, type = "verification" }) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <div>
        <Image src={envelope} alt="Open envelope" />
        <Title>Check Email</Title>
        <p>
          Please check your email inbox and click on the provided link to
          {type === "verification"
            ? " verify your account"
            : " reset your password"}
          .
        </p>
      </div>
    </Modal>
  );
};
