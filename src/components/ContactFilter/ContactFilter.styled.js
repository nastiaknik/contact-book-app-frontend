import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  gap: 5px;

  label {
    color: #4f4f4f;
    transition: color 200ms linear;
  }
`;

export const FilterInput = styled.input`
  width: 100%;
  max-width: 100%;
  background-color: transparent;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  font-family: inherit;
  font-size: 16px;
  display: block;
  appearance: none;
  line-height: 1.6;
  color: #4f4f4f;
  outline: transparent;
  min-height: auto;
  padding: 5px 15px;
  margin: 0;
  transition: border-color 200ms linear;

  &:focus {
    border-color: #3b71ca;
  }
  &:focus + label {
    color: #3b71ca;
  }
  & + label:focus,
  & + label:hover {
    cursor: pointer;
  }
`;
