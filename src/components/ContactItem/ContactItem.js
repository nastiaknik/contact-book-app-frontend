import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Confirm } from "notiflix/build/notiflix-confirm-aio";
import { Avatar } from "@chakra-ui/react";
import PropTypes from "prop-types";
import {
  deleteContact,
  toggleFavourite,
} from "../../redux/contacts/operations";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsStar, BsStarFill } from "react-icons/bs";
/* import { ContactEditForm } from ".././ContactEditForm/ContactEditForm"; */
import {
  TableRow,
  TableDataCell,
  BtnWrapper,
  Button,
} from "./ContactItem.styled";

export const ContactItem = ({ contacts }) => {
  const dispatch = useDispatch();

  const onDelete = (contact) => {
    if (!contact) {
      toast.error(
        <p>
          Contact <span style={{ color: "red" }}>{contact.name}</span> was not
          found!
        </p>
      );
    }
    Confirm.show(
      "Delete the word?",
      "Are you sure you want to delete the contact?",
      "Delete",
      "Cancel",
      () => {
        dispatch(deleteContact(contact._id));
        toast.success(
          <p>
            Contact <span style={{ color: "green" }}>{contact.name}</span>{" "}
            deleted!
          </p>
        );
      },
      () => {
        return;
      }
    );
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
              <BsStarFill size={24} color="#ffd800" />
            ) : (
              <BsStar size={24} color="#ffd800" />
            )}
          </Button>
          {/* <ContactEditForm contact={contact} /> */}
          <Button type="button" onClick={() => onDelete(contact)}>
            <RiDeleteBinLine size={24} color="red" />
          </Button>
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
