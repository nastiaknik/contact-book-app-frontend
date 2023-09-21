import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  opacity: 0.7;
  :hover,
  :focus {
    opacity: 1;
    /*  color: #7286d3; */
  }
`;

export const Link = styled.a`
  background-color: transparent;
  cursor: pointer;
  opacity: 0.7;
  :hover,
  :focus {
    opacity: 1;
  }
  :visited {
    opacity: 0.7;
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;
