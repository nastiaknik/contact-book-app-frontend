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
  display: block;
  width: 100%;
  max-width: 100%;
  min-height: auto;
  padding: 5px 15px;
  margin: 0;
  font-family: inherit;
  font-size: 16px;
  line-height: 1.6;
  color: #4f4f4f;
  background-color: transparent;
  appearance: none;
  outline: transparent;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
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
