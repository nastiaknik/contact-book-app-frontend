import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getContacts = createAsyncThunk(
  "/getContacts",
  async (_, { rejectedWithValue }) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "/addContact",
  async (contact, { rejectWithValue }) => {
    try {
      const response = await axios.post("/contacts", contact);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  "/editContact",
  async ({ id, contact }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`/contacts/${id}`, contact);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const toggleFavourite = createAsyncThunk(
  "/toggleFavourite",
  async ({ id, favorite }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`/contacts/${id}/favorite`, {
        favorite,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
