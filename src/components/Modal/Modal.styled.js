import styled from "styled-components";
import { IoMdClose } from "react-icons/io";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 335px;
  width: 100%;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #dce3e5cc;
  border-radius: 8px;
  box-shadow: 0px 4px 57px 0px #1111110d;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transform: translate(-50%, -50%) scale(${(props) => (props.isOpen ? 1 : 1.1)});
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 468px) {
    max-width: 420px;
    padding: 32px;
  }

  @media screen and (min-width: 768px) {
    max-width: 468px;
    padding: 32px;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  padding: 0;
  background-color: #ffffff;
  cursor: pointer;
`;

export const CloseSvg = styled(IoMdClose)`
  width: 24px;
  height: 24px;
  fill: #111111;
  background-color: #ffffff;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    fill: #3b71ca;
  }
`;
