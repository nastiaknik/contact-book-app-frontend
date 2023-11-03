import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "redux/store";
import { selectUser } from "redux/auth/selectors";
import { logout } from "redux/auth/operations";
import { selectIsLoading } from "redux/auth/selectors";
import { FiLogOut } from "react-icons/fi";
import { User } from "../../types/UserTypes";
import { ConfirmModal } from "../Confirm/Confirm";
import { Loader } from "components/Loader/Loader";
import { Wrapper, Username, Button } from "./UserMenu.styled";

export const UserMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const user: User | null = useSelector(selectUser);
  const isLoading: boolean = useSelector(selectIsLoading);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const signOut = (id: string | null): void => {
    dispatch(logout(id));
  };

  return (
    <>
      {isLoading && <Loader />}
      {user && (
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
              onConfirm={() => signOut(user._id)}
              title="Are you sure you want to logout?"
              confirmBtnTitle="Logout"
            />
          )}
        </Wrapper>
      )}
    </>
  );
};
