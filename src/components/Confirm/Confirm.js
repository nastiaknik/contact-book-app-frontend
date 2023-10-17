import PropTypes from "prop-types";
import { Modal } from "../Modal/Modal";
import { Title, ConfirmBtn, CancelBtn, BtnWrapper } from "./Confirm.styled";

export const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  confirmBtnTitle,
}) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <div>
        <Title>{title}</Title>
        <BtnWrapper>
          <ConfirmBtn
            type="button"
            onClick={() => {
              onConfirm();
              onClose();
            }}
          >
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
