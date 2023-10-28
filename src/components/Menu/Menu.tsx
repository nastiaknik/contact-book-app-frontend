import React, { useEffect, useRef, useState } from "react";
import { Contact } from "redux/contacts/contactsSlice";
import { ActionButtons } from "../SharedComponents/ActionButtons/ActionButtons";
import { PopMenu } from "./Menu.styled";

interface MenuProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
  buttonRef: React.RefObject<HTMLButtonElement>;
  contact: Contact;
}

export const Menu: React.FC<MenuProps> = ({
  toggleMenu,
  isMenuOpen,
  buttonRef,
  contact,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        event.target !== buttonRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        !isModalOpen
      ) {
        toggleMenu();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        toggleMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mouseup", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("mouseup", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen, toggleMenu, buttonRef, isModalOpen]);

  return (
    <PopMenu ref={menuRef}>
      <ActionButtons
        contact={contact}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
      />
    </PopMenu>
  );
};
