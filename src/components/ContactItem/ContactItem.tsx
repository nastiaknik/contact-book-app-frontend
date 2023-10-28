import React, { useState, useRef } from "react";
import { Contact } from "redux/contacts/contactsSlice";
import { Avatar, useMediaQuery } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { ActionButtons } from "../SharedComponents/ActionButtons/ActionButtons";
import { Menu } from "../Menu/Menu";
import {
  TableRow,
  TableDataCell,
  BtnWrapper,
  Button,
} from "./ContactItem.styled";

interface ContactItemProps {
  contact: Contact;
}

export const ContactItem: React.FC<ContactItemProps> = ({ contact }) => {
  const [isWideScreen] = useMediaQuery("(min-width: 515px)");
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <TableRow>
      <TableDataCell>
        <Avatar
          size={{ base: "sm", md: "md", lg: "md" }}
          src="https://bit.ly/broken-link"
          name={contact.name}
          getInitials={(name: string) =>
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
          <ActionButtons contact={contact} />
        </BtnWrapper>
      ) : (
        <TableDataCell>
          <Button ref={buttonRef} type="button" onClick={toggleMenu}>
            <FiMenu />
          </Button>

          {isMenuOpen && (
            <Menu
              contact={contact}
              toggleMenu={toggleMenu}
              isMenuOpen={isMenuOpen}
              buttonRef={buttonRef}
            />
          )}
        </TableDataCell>
      )}
    </TableRow>
  );
};
