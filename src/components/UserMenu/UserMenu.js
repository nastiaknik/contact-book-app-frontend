import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import { FiLogOut } from "react-icons/fi";
import { ConfirmModal } from "../Confirm/Confirm";
import { Wrapper, Username, Button } from "./UserMenu.styled";

export const UserMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <Wrapper>
      <Username>
        Welcome, <span>{user.name}</span>
      </Username>
      <Button type="button" onClick={toggleModal}>
        <span>Logout</span>
        <FiLogOut size={15} />
      </Button>

      {isModalOpen && (
        <ConfirmModal
          isOpen={isModalOpen}
          onClose={toggleModal}
          onConfirm={() => dispatch(logout(user._id))}
          title="Are you sure you want to logout?"
          confirmBtnTitle="Logout"
        />
      )}
    </Wrapper>
  );
};
