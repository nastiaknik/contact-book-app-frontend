import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getContacts = createAsyncThunk(
  "/get",
  async (_, { rejectedWithValue }) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "/delete",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "/add",
  async (contact, { rejectWithValue }) => {
    try {
      const response = await axios.post("/contacts", contact);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const editContact = createAsyncThunk(
  "/edit",
  async ({ id, contact }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`/contacts/${id}`, contact);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
