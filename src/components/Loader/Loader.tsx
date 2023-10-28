import React from "react";
import { createPortal } from "react-dom";
import { Backdrop, Spinner } from "./Loader.styled";

const LoaderRoot: Element | DocumentFragment | null =
  document.querySelector("#loader-root");

export const Loader: React.FC = () => {
  if (!LoaderRoot) {
    return null;
  }

  return createPortal(
    <Backdrop>
      <Spinner />
    </Backdrop>,
    LoaderRoot
  );
};
