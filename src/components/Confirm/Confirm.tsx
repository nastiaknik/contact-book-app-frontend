import React from "react";
import { Modal } from "../Modal/Modal";
import { Title, BtnWrapper, ConfirmBtn, CancelBtn } from "./Confirm.styled";

interface ConfirmModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  confirmBtnTitle: string;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen = false,
  onClose,
  onConfirm,
  title,
  confirmBtnTitle,
}) => {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <div>
        <Title>{title}</Title>
        <BtnWrapper>
          <ConfirmBtn type="button" onClick={handleConfirm}>
            {confirmBtnTitle}
          </ConfirmBtn>
          <CancelBtn type="button" onClick={onClose}>
            Cancel
          </CancelBtn>
        </BtnWrapper>
      </div>
    </Modal>
  );
};
