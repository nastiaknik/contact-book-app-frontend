import PropTypes from "prop-types";
import { Modal } from "../Modal/Modal";
import { Title, BtnWrapper, ConfirmBtn, CancelBtn } from "./Confirm.styled";

export const ConfirmModal = ({
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

ConfirmModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  confirmBtnTitle: PropTypes.string.isRequired,
};
