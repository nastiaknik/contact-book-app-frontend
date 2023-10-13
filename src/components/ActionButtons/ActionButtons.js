import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { deleteContact } from "../../redux/contacts/operations";
import { ContactEditForm } from ".././ContactEditForm/ContactEditForm";
import { ConfirmModal } from "../Confirm/Confirm";
import { toggleFavourite } from "../../redux/contacts/operations";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsStar, BsStarFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { Button } from "./ActionButtons.styled";

export const ActionButtons = ({ contact, setIsModalOpen }) => {
  const dispatch = useDispatch();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const toggleEditModal = () => {
    setIsEditModalOpen((prev) => !prev);
    setIsModalOpen && setIsModalOpen((prev) => !prev);
  };

  const toggleConfirm = () => {
    setIsConfirmOpen((prev) => !prev);
    setIsModalOpen && setIsModalOpen((prev) => !prev);
  };

  const onFavorite = (contact) => {
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

  const onDelete = (contact) => {
    if (!contact) {
      toast.error(
        <p>
          Contact <span style={{ color: "red" }}>{contact.name}</span> was not
          found!
        </p>
      );
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
          onCancel={toggleConfirm}
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
