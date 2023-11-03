import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "redux/store";
import { setFilterValue } from "../../redux/filter/filterSlice";
import { selectFilterValue } from "../../redux/filter/selectors";
import { FiSearch } from "react-icons/fi";
import { FilterContainer, FilterInput } from "./ContactFilter.styled";

export const ContactFilter: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const filter = useSelector(selectFilterValue);

  const onFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilterValue(event.target.value));
  };

  return (
    <FilterContainer>
      <FilterInput
        id="filter"
        type="text"
        name="filter"
        onChange={onFilterChange}
        value={filter}
        placeholder="Search..."
      />
      <label htmlFor="filter">
        <FiSearch size={20} />
      </label>
    </FilterContainer>
  );
};
