import { useState } from "react";
import { useDispatch } from "react-redux";
import { Avatar, useMediaQuery } from "@chakra-ui/react";
import { Popup } from "reactjs-popup";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { deleteContact } from "../../redux/contacts/operations";
import { FiMenu } from "react-icons/fi";
import { ContactEditForm } from ".././ContactEditForm/ContactEditForm";
import { ConfirmDeleteModal } from "../Confirm/Confirm";
import { ActionButtons } from "../ActionButtons/ActionButtons";
import {
  TableRow,
  TableDataCell,
  BtnWrapper,
  Button,
  Menu,
} from "./ContactItem.styled";

export const ContactItem = ({ contacts }) => {
  const [isWideScreen] = useMediaQuery("(min-width: 515px)");
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
    toggleConfirm();
  };

  return contacts.map((contact) => {
    return (
      <TableRow key={contact._id}>
        <TableDataCell>
          <Avatar
            size={{ base: "sm", md: "md", lg: "md" }}
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

        {isWideScreen ? (
          <BtnWrapper>
            <ActionButtons
              contact={contact}
              toggleConfirm={toggleConfirm}
              toggleEditModal={toggleEditModal}
            />
          </BtnWrapper>
        ) : (
          <TableDataCell>
            <Popup
              arrow={false}
              trigger={
                <Button type="button">
                  <FiMenu />
                </Button>
              }
              position="top center"
              on="click"
            >
              {
                <Menu>
                  <ActionButtons
                    contact={contact}
                    toggleConfirm={toggleConfirm}
                    toggleEditModal={toggleEditModal}
                  />
                </Menu>
              }
            </Popup>
          </TableDataCell>
        )}
        {isConfirmOpen && (
          <ConfirmDeleteModal
            isOpen={isConfirmOpen}
            onCancel={toggleConfirm}
            onConfirm={() => onDelete(contact)}
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
