import { useState, useRef } from "react";
import { Avatar, useMediaQuery } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { FiMenu } from "react-icons/fi";
import { ActionButtons } from "../ActionButtons/ActionButtons";
import { Menu } from "../Menu/Menu";
import {
  TableRow,
  TableDataCell,
  BtnWrapper,
  Button,
} from "./ContactItem.styled";

export const ContactItem = ({ contact }) => {
  const [isWideScreen] = useMediaQuery("(min-width: 515px)");
  const [isMenuOpen, setMenuOpen] = useState(false);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <TableRow>
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

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};
