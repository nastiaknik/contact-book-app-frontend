import axios, { AxiosResponse, AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Contact } from "types/ContactTypes";
import { toast } from "react-toastify";

export const getContacts = createAsyncThunk<Contact[]>(
  "getContacts",
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<Contact[]> = await axios.get("/contacts");
      return response.data;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<{
          message: string;
          status: number;
        }>;
        if (axiosError.response && axiosError.response.data) {
          const errorMessage: string = axiosError.response.data.message;
          toast.error(errorMessage);
          return rejectWithValue(errorMessage);
        }
      }
      toast.error("An unexpected error occurred.");
      return rejectWithValue("An unexpected error occurred.");
    }
  }
);

export const addContact = createAsyncThunk<
  Contact,
  { name: string; phone: string }
>("addContact", async (contact, { rejectWithValue }) => {
  try {
    const response = await axios.post<Contact>("/contacts", contact);
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{
        message: string;
        status: number;
      }>;
      if (axiosError.response && axiosError.response.data) {
        const errorMessage: string = axiosError.response.data.message;
        toast.error(errorMessage);
        return rejectWithValue(errorMessage);
      }
    }
    toast.error("An unexpected error occurred.");
    return rejectWithValue("An unexpected error occurred.");
  }
});

export const deleteContact = createAsyncThunk<
  { message: string; id: string },
  string
>("deleteContact", async (id, { rejectWithValue }) => {
  try {
    const response: AxiosResponse<{ message: string; id: string }> =
      await axios.delete(`/contacts/${id}`);
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{
        message: string;
        status: number;
      }>;
      if (axiosError.response && axiosError.response.data) {
        const errorMessage: string = axiosError.response.data.message;
        toast.error(errorMessage);
        return rejectWithValue(errorMessage);
      }
    }
    toast.error("An unexpected error occurred.");
    return rejectWithValue("An unexpected error occurred.");
  }
});

export const editContact = createAsyncThunk<
  Contact,
  { id: string; contact: { name: string; phone: string } }
>("editContact", async ({ id, contact }, { rejectWithValue }) => {
  try {
    const response = await axios.put<Contact>(`/contacts/${id}`, contact);
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{
        message: string;
        status: number;
      }>;
      if (axiosError.response && axiosError.response.data) {
        const errorMessage: string = axiosError.response.data.message;
        toast.error(errorMessage);
        return rejectWithValue(errorMessage);
      }
    }
    toast.error("An unexpected error occurred.");
    return rejectWithValue("An unexpected error occurred.");
  }
});

export const toggleFavourite = createAsyncThunk<
  Contact,
  { id: string; favorite: boolean }
>("toggleFavourite", async ({ id, favorite }, { rejectWithValue }) => {
  try {
    const response = await axios.patch<Contact>(`/contacts/${id}/favorite`, {
      favorite,
    });
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{
        message: string;
        status: number;
      }>;
      if (axiosError.response && axiosError.response.data) {
        const errorMessage: string = axiosError.response.data.message;
        toast.error(errorMessage);
        return rejectWithValue(errorMessage);
      }
    }
    toast.error("An unexpected error occurred.");
    return rejectWithValue("An unexpected error occurred.");
  }
});
