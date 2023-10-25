import styled from "styled-components";

export const Title = styled.p`
  font-size: 24px;
  text-align: center;
  margin-bottom: 15px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const Button = styled.button`
  padding: 10px 30px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  transition: background-color 200ms ease-in-out;
  cursor: pointer;
`;

export const ConfirmBtn = styled(Button)`
  background-color: #32c682;
  box-shadow: 0 4px 9px -4px #3b71ca;

  &:hover,
  &:focus {
    background-color: #2ca772;
  }
  &:active {
    background-color: #238a62;
  }
`;

export const CancelBtn = styled(Button)`
  background-color: #8c8c8c;
  box-shadow: 0 4px 9px -4px #8c8c8c;

  &:hover,
  &:focus {
    background-color: #767676;
  }
  &:active {
    background-color: #616161;
  }
`;
