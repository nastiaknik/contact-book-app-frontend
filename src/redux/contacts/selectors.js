import { createSelector } from "@reduxjs/toolkit";
import { selectFilterValue } from "../filter/selectors";

export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, filterValue) => {
    return contacts.filter((contact) => {
      return (
        contact.name.toLowerCase().includes(filterValue.toLowerCase().trim()) ||
        contact.number.includes(filterValue.toLowerCase().trim())
      );
    });
  }
);

export const selectIsLoading = (state) => state.contacts.isLoading;

export const selectFavoriteContacts = (state) =>
  state.contacts.items.filter(({ favorite }) => favorite);
