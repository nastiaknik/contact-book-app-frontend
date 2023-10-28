import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import {
  getContacts,
  deleteContact,
  addContact,
  editContact,
  toggleFavourite,
} from "./operations";
import { logout } from "../auth/operations";

export interface Contact {
  _id: string;
  name: string;
  phone: string;
  favorite: boolean;
}

export interface ContactsState {
  items: Contact[];
  loading: boolean;
  error: string | null;
}

const initialState: ContactsState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getContacts.fulfilled,
        (state, { payload }: PayloadAction<Contact[]>) => {
          state.items = payload;
        }
      )
      .addCase(
        deleteContact.fulfilled,
        (
          state,
          { payload }: PayloadAction<{ message: string; id: string }>
        ) => {
          state.items = state.items.filter(
            (contact) => contact._id !== payload.id
          );
        }
      )
      .addCase(
        addContact.fulfilled,
        (state, { payload }: PayloadAction<Contact>) => {
          state.items.push(payload);
        }
      )
      .addCase(logout.fulfilled, (state) => {
        state.items = [];
      })
      .addCase(
        editContact.fulfilled,
        (state, { payload }: PayloadAction<Contact>) => {
          const index = state.items.findIndex(
            (item) => item._id === payload._id
          );
          state.items.splice(index, 1, payload);
        }
      )
      .addCase(
        toggleFavourite.fulfilled,
        (state, { payload }: PayloadAction<Contact>) => {
          const index = state.items.findIndex(
            (item) => item._id === payload._id
          );
          state.items.splice(index, 1, payload);
        }
      )
      .addMatcher(
        isAnyOf(
          editContact.fulfilled,
          addContact.fulfilled,
          deleteContact.fulfilled,
          getContacts.fulfilled,
          toggleFavourite.fulfilled,
          logout.fulfilled
        ),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          editContact.pending,
          addContact.pending,
          deleteContact.pending,
          getContacts.pending,
          toggleFavourite.pending
        ),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          editContact.rejected,
          addContact.rejected,
          deleteContact.rejected,
          getContacts.rejected,
          toggleFavourite.rejected
        ),
        (state, { payload }: PayloadAction<any>) => {
          console.log(payload);
          state.loading = false;
          state.error = payload;
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
