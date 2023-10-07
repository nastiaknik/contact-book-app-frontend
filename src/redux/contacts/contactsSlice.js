import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  getContacts,
  deleteContact,
  addContact,
  editContact,
  toggleFavourite,
} from "./operations";
import { logout } from "../auth/operations";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(
          (contact) => contact._id !== payload.id
        );
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(logout.fulfilled, (state) => {
        state.items = [];
      })
      .addCase(editContact.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex((item) => item._id === payload._id);
        state.items.splice(index, 1, payload);
      })
      .addCase(toggleFavourite.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex((item) => item._id === payload._id);
        state.items.splice(index, 1, payload);
      })
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
        (state, { payload }) => {
          state.loading = false;
          state.error = payload;
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
