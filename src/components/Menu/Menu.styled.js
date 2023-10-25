import styled from "styled-components";

export const PopMenu = styled.div`
  position: absolute;
  top: 50%;
  left: -120px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 120px;
  background-color: rgb(255, 255, 255);
  padding: 12px;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 8px;
  box-shadow: rgba(17, 17, 17, 0.1) 0px 4px 16px 0px;
  transform: translateY(-50%);
  z-index: 1000;
`;
