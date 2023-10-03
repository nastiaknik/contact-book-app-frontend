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

export const ConfirmBtn = styled.button`
  padding: 10px 30px;
  font-size: 16px;
  font-family: inherit;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 5px;
  background-color: #32c682;
  box-shadow: 0 4px 9px -4px #3b71ca;
  transition: background-color 200ms ease-in-out;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #2ca772;
  }
  &:active {
    background-color: #238a62;
  }
`;

export const CancelBtn = styled(ConfirmBtn)`
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
