import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setFilterValue } from "../../redux/filterSlice";
import { selectFilterValue } from "../../redux/contacts/selectors";
import { FilterContainer, FilterInput } from "./ContactFilter.styled";

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterValue);
  const onFilterChange = (event) => {
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
