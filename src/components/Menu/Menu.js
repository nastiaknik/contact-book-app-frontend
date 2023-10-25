import { useEffect, useRef, useState } from "react";
import { ActionButtons } from "../SharedComponents/ActionButtons/ActionButtons";
import { PopMenu } from "./Menu.styled";

export const Menu = ({
  toggleMenu,
  isMenuOpen,
  position,
  buttonRef,
  contact,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        event.target !== buttonRef.current &&
        !buttonRef.current.contains(event.target) &&
        !isModalOpen
      ) {
        toggleMenu();
      }
    };

    const handleKeyDown = (event) => {
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
    <PopMenu ref={menuRef} isOpen={isMenuOpen} position={position}>
      <ActionButtons
        contact={contact}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </PopMenu>
  );
};
