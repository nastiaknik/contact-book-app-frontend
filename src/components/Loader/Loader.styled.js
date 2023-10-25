import styled from "styled-components";
import { TbLoader } from "react-icons/tb";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.2);
  z-index: 100;
`;

export const Spinner = styled(TbLoader)`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 40px;
  overflow: auto;
  transform: translate(-50%, -50%) scale(1);
  animation: spin 1500ms linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
