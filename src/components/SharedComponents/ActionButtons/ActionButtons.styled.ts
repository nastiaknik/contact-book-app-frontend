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
