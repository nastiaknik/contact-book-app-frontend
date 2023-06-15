import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://goit-nodejs-homework-bnfs.onrender.com/api";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "register",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post("/users/register", credentials);
      const { token } = response.data;
      setAuthHeader(token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post("/users/login", credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  "logout",
  async (id, { rejectWithValue }) => {
    try {
      const result = await axios.post("/users/logout", id);
      clearAuthHeader();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk("refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue("Unable to fetch user");
  }

  try {
    setAuthHeader(persistedToken);
    const response = await axios.get("/users/current");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const current = createAsyncThunk(
  "current",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const result = await axios.get("users/current", auth.token);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);
