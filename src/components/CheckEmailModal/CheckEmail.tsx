import React from "react";
import { Modal } from "../Modal/Modal";
import envelope from "../../assets/envelope.jpg";
import { Title, Image } from "./CheckEmail.styled";

interface CheckEmailProps {
  onClose: () => void;
  isOpen?: boolean;
  type?: "verification" | "recovery";
}

export const CheckEmail: React.FC<CheckEmailProps> = ({
  onClose,
  isOpen = false,
  type = "verification",
}) => {
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
