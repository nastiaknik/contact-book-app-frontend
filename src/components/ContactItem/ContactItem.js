import { toast } from "react-toastify";
import PropTypes from "prop-types";
/* import { useState, useEffect } from 'react';  */
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { RiDeleteBinLine } from "react-icons/ri";
/* import { BsStar, BsStarFill } from 'react-icons/bs';
 */ import { Avatar } from "@chakra-ui/react";
/* import { ContactEditForm } from ".././ContactEditForm/ContactEditForm";
 */ import {
  TableRow,
  Number,
  BtnWrapper,
  Button,
  ContactName,
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
    dispatch(deleteContact(contact._id));
    toast.success(
      <p>
        Contact <span style={{ color: "green" }}>{contact.name}</span> deleted!
      </p>
    );
  };

  /* const onFavorite = contact => {
    if (favourites.find(fav => fav.id === contact.id)) {
      setFavourites(favourites.filter(fav => fav.id !== contact.id));
      toast.success(
        <p>
          Contact <span style={{ color: 'green' }}>{contact.name}</span> removed
          from favorites!
        </p>
      );
    } else {
      setFavourites([...favourites, contact]);
      toast.success(
        <p>
          Contact <span style={{ color: 'green' }}>{contact.name}</span> added
          to favorites!
        </p>
      );
    }
  }; */

  return contacts.map((contact) => {
    return (
      <TableRow key={contact._id}>
        <ContactName>
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
          {contact.name}
        </ContactName>
        <Number>{contact.phone}</Number>
        <BtnWrapper>
          {/* <Button type="button" onClick={() => onFavorite(contact)}>
            {favourites.find(fav => fav.id === contact.id) ? (
              <BsStarFill size={24} color="#ffd800" />
            ) : (
              <BsStar size={24} color="#ffd800" />
            )}
          </Button> */}

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
