import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background-color: transparent;
  opacity: 0.7;
  cursor: pointer;
  margin-right: 15px;

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
  padding: 10px 20px;
  text-align: left;
`;

export const BtnWrapper = styled(TableDataCell)`
  text-align: right;
`;
