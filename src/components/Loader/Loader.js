import { createPortal } from "react-dom";
import { Backdrop, Spinner } from "./Loader.styled";

const LoaderRoot = document.querySelector("#loader-root");

export const Loader = () => {
  return createPortal(
    <Backdrop>
      <Spinner />
    </Backdrop>,
    LoaderRoot
  );
};
