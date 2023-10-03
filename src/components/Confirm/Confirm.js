import PropTypes from "prop-types";
import { Modal } from "../Modal/Modal";
import { Title, ConfirmBtn, CancelBtn, BtnWrapper } from "./Confirm.styled";

export const ConfirmDeleteModal = ({
  isOpen,
  onCancel,
  onConfirm,
  title,
  confirmBtnTitle,
}) => {
  return (
    <Modal onClose={onCancel} isOpen={isOpen}>
      <div>
        <Title>{title}</Title>
        <BtnWrapper>
          <ConfirmBtn type="button" onClick={onConfirm}>
            {confirmBtnTitle}
          </ConfirmBtn>
          <CancelBtn type="button" onClick={onCancel}>
            Cancel
          </CancelBtn>
        </BtnWrapper>
      </div>
    </Modal>
  );
};

ConfirmDeleteModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  confirmBtnTitle: PropTypes.string.isRequired,
};
