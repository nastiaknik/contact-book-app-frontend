import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  margin: 5px;
  opacity: 0.7;
  cursor: pointer;
  border: none;

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
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #e5e0ff;
  }
`;

export const TableDataCell = styled.td`
  position: relative;
  padding: 15px 5px;
  text-align: left;

  @media only screen and (min-width: 768px) {
    padding: 10px 20px;
  }
`;

export const BtnWrapper = styled(TableDataCell)`
  text-align: right;
`;
