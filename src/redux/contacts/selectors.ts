import { createSelector } from "@reduxjs/toolkit";
import { selectFilterValue } from "../filter/selectors";
import { Contact, ContactsState } from "./contactsSlice";

export const selectContacts = ({ contacts }: { contacts: ContactsState }) =>
  contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts: Contact[], filterValue: string) =>
    contacts.filter(
      (contact: Contact) =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase().trim()) ||
        contact.phone.includes(filterValue.toLowerCase().trim())
    )
);

export const selectIsLoading = ({ contacts }: { contacts: ContactsState }) =>
  contacts.loading;

export const selectFavoriteContacts = ({
  contacts,
}: {
  contacts: ContactsState;
}) => contacts.items.filter(({ favorite }) => favorite);
