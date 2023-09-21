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
      .addCase(getContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items.filter((contact) => contact.id !== action.payload);
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(logout.fulfilled, (state) => {
        state.items = [];
      })
      .addCase(editContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      })
      .addCase(toggleFavourite.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
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
