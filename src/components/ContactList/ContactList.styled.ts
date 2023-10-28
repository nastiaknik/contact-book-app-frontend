import styled from "styled-components";

export const TableHead = styled.th`
  width: fit-content;
  max-height: 50px;
  padding: 10px 5px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  border-bottom: 2px solid #e5e0ff;

  @media only screen and (min-width: 768px) {
    padding: 15px 20px;
    text-align: left;
  }
`;
