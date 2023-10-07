import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background-color: transparent;
  opacity: 0.7;
  cursor: pointer;
  margin: 5px;

  &:hover,
  &:focus {
    opacity: 1;
  }

  & svg {
    font-size: 20px;
  }

  @media only screen and (min-width: 768px) {
    margin-right: 20px;

    & svg {
      font-size: 24px;
    }
  }
`;

export const TableRow = styled.tr`
  background-color: transparent;
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #e5e0ff;
  }
`;

export const TableDataCell = styled.td`
  padding: 15px 10px;
  text-align: left;

  @media only screen and (min-width: 768px) {
    padding: 10px 20px;
  }
`;

export const BtnWrapper = styled(TableDataCell)`
  text-align: right;
`;

export const Menu = styled.div`
  position: absolute;
  right: 15px;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 120px;
  background-color: rgb(255, 255, 255);
  padding: 12px;
  box-shadow: rgba(17, 17, 17, 0.1) 0px 4px 16px 0px;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 8px;
`;
