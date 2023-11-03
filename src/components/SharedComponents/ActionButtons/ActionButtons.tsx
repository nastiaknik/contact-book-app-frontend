import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "redux/store";
import { deleteContact } from "../../../redux/contacts/operations";
import { ContactEditForm } from "../../ContactEditForm/ContactEditForm";
import { ConfirmModal } from "../../Confirm/Confirm";
import { toggleFavourite } from "../../../redux/contacts/operations";
import { toast } from "react-toastify";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsStar, BsStarFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { Contact } from "types/ContactTypes";
import { Button } from "./ActionButtons.styled";

interface ActionButtonsProps {
  contact: Contact;
  setIsModalOpen?: (prev: boolean) => void;
  isModalOpen?: boolean;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  contact,
  setIsModalOpen,
  isModalOpen,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState<boolean>(false);

  const toggleEditModal = (): void => {
    setIsEditModalOpen((prev) => !prev);
    setIsModalOpen && setIsModalOpen(!isModalOpen);
  };

  const toggleConfirm = (): void => {
    setIsConfirmOpen((prev) => !prev);
    setIsModalOpen && setIsModalOpen(!isModalOpen);
  };

  const onFavorite = (contact: Contact): void => {
    if (contact.favorite) {
      dispatch(toggleFavourite({ id: contact._id, favorite: false }));
      toast.success(
        <p>
          Contact <span style={{ color: "green" }}>{contact.name}</span> removed
          from favorites!
        </p>
      );
    } else {
      dispatch(toggleFavourite({ id: contact._id, favorite: true }));
      toast.success(
        <p>
          Contact <span style={{ color: "green" }}>{contact.name}</span> added
          to favorites!
        </p>
      );
    }
  };

  const onDelete = (contact: Contact): void => {
    if (!contact) {
      toast.error("Contact was not found!");
    }
    dispatch(deleteContact(contact._id));
    toggleConfirm();
  };

  return (
    <>
      <Button type="button" onClick={() => onFavorite(contact)}>
        {contact.favorite ? (
          <BsStarFill color="#ffd800" />
        ) : (
          <BsStar color="#ffd800" />
        )}
      </Button>

      <Button
        type="button"
        onClick={() => {
          toggleEditModal();
        }}
      >
        <MdEdit color="#333333" />
      </Button>

      <Button
        type="button"
        onClick={() => {
          toggleConfirm();
        }}
      >
        <RiDeleteBinLine color="red" />
      </Button>

      {isConfirmOpen && (
        <ConfirmModal
          isOpen={isConfirmOpen}
          onClose={toggleConfirm}
          onConfirm={() => {
            onDelete(contact);
          }}
          title="Are you sure you want to delete the contact?"
          confirmBtnTitle="Delete"
        />
      )}

      {isEditModalOpen && (
        <ContactEditForm
          contact={contact}
          isModalOpen={isEditModalOpen}
          toggleModal={toggleEditModal}
        />
      )}
    </>
  );
};
