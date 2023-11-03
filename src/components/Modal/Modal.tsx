import React, { useEffect, MouseEvent } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalContent, Button, CloseSvg } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

interface ModalProps {
  onClose: () => void;
  isOpen: boolean;
  children: React.ReactNode;
}

export const scrollController = {
  scrollPosition: 0,
  disabledScroll: () => {
    scrollController.scrollPosition = window.scrollY;

    document.body.style.cssText = `
      overflow: hidden;
      position: fixed;
      top: -${scrollController.scrollPosition}px;
      left: 0;
      height: 100vh;
      width: 100vw;
      padding-right: ${window.innerWidth - document.body.offsetWidth}px
    `;
    document.documentElement.style.scrollBehavior = "unset";
  },
  enabledScroll: () => {
    document.body.style.cssText = "";
    window.scroll({ top: scrollController.scrollPosition });
    document.documentElement.style.scrollBehavior = "";
  },
};

export const Modal: React.FC<ModalProps> = ({ onClose, isOpen, children }) => {
  useEffect(() => {
    const handleKeyDown = (evt: KeyboardEvent) => {
      if (evt.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    scrollController.disabledScroll();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      scrollController.enabledScroll();
    };
  }, [onClose]);

  const handleBackdropClick = (evt: MouseEvent<HTMLDivElement>) => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalContent isOpen={isOpen}>
        <Button type="button" onClick={onClose}>
          <CloseSvg />
        </Button>
        {children}
      </ModalContent>
    </Overlay>,
    modalRoot as Element
  );
};
