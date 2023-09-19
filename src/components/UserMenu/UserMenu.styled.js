import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  direction: row;
  flex-wrap: nowrap;
  align-items: center;
  margin-right: 30px;

  @media only screen and (max-width: 420px) {
    margin-right: 0;
  }
  @media only screen and (max-width: 720px) {
    margin-right: 5px;
  }
`;

export const Username = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  padding: 0;
  margin: 0;
  margin-right: 10px;
  user-select: none;

  span {
    color: teal;
  }

  @media only screen and (max-width: 720px) {
    display: none;
  }
`;

export const Button = styled.button`
  display: flex;
  text-align: center;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
  outline: 2px solid transparent;
  outline-offset: 2px;
  line-height: 1.2;
  border: none;
  border-radius: 0.375rem;
  background-color: #fbc02d;
  color: #000000;
  cursor: pointer;
  transition: background-color cubic-bezier(0.4, 0, 1, 1) 200ms;
  gap: 4px;
  align-items: center;
  padding: 10px 12px;

  &:hover,
  &:focus {
    background-color: #fbc846;
  }
  &:active {
    background-color: #fbc02d;
  }

  @media only screen and (max-width: 420px) {
    font-size: 14px;
    padding: 10px;

    span {
      display: none;
    }
  }
`;
