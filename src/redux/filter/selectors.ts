import { FilterState } from "./filterSlice";

export const selectFilterValue = ({ filter }: { filter: FilterState }) =>
  filter;
