import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Avatar } from "@chakra-ui/react";
import PropTypes from "prop-types";
import {
  toggleFavourite,
  deleteContact,
} from "../../redux/contacts/operations";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsStar, BsStarFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { ContactEditForm } from ".././ContactEditForm/ContactEditForm";
import { ConfirmDeleteModal } from "../Confirm/Confirm";
import {
  TableRow,
  TableDataCell,
  BtnWrapper,
  Button,
} from "./ContactItem.styled";

export const ContactItem = ({ contacts }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleEditModal = () => {
    setIsEditModalOpen((prev) => !prev);
  };

  const toggleConfirm = () => {
    setIsConfirmOpen((prev) => !prev);
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

  return contacts.map((contact) => {
    return (
      <TableRow key={contact._id}>
        <TableDataCell>
          <Avatar
            src="https://bit.ly/broken-link"
            alt={contact.name}
            name={contact.name}
            getInitials={(name) =>
              name
                .split(" ")
                .map((name) => name.slice(0, 1).toUpperCase())
                .slice(0, 2)
                .join("")
            }
          />
        </TableDataCell>
        <TableDataCell>{contact.name}</TableDataCell>
        <TableDataCell>{contact.phone}</TableDataCell>
        <BtnWrapper>
          <Button type="button" onClick={() => onFavorite(contact)}>
            {contact.favorite ? (
              <BsStarFill color="#ffd800" />
            ) : (
              <BsStar color="#ffd800" />
            )}
          </Button>

          <Button type="button" onClick={toggleEditModal}>
            <MdEdit color="#333333" />
          </Button>
          {isEditModalOpen && (
            <ContactEditForm
              contact={contact}
              isModalOpen={isEditModalOpen}
              toggleModal={toggleEditModal}
            />
          )}

          <Button type="button" onClick={toggleConfirm}>
            <RiDeleteBinLine color="red" />
          </Button>
          {isConfirmOpen && (
            <ConfirmDeleteModal
              isOpen={isConfirmOpen}
              onCancel={toggleConfirm}
              onConfirm={() => onDelete(contact)}
              title="Are you sure you want to delete the contact?"
              confirmBtnTitle="Delete"
            />
          )}
        </BtnWrapper>
      </TableRow>
    );
  });
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
