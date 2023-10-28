import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CredentialResponse } from "@react-oauth/google";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://goit-nodejs-homework-bnfs.onrender.com/api";

const setAuthHeader = (token: string | null) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    axios.defaults.headers.common.Authorization = "";
  }
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "register",
  async (
    credentials: { name: string; email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post("/users/register", credentials);
      setAuthHeader(response.data.token);
      toast.success(
        "Registration Successful! Please check your email and verify your account."
      );
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "login",
  async (
    credentials: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post("/users/login", credentials);
      setAuthHeader(response.data.token);
      toast.success("Login success");
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  "logout",
  async (id: string, { rejectWithValue }) => {
    try {
      const result = await axios.post("/users/logout", id);
      clearAuthHeader();
      toast.success("Logout success");
      return result.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk("refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken: string | null = state.auth.token;

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
      return result; // result.data
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      return !!auth.token;
    },
  }
);

export const sendRecoveryEmail = createAsyncThunk(
  "recovery",
  async (email: string, { rejectWithValue }) => {
    try {
      const result = await axios.post("/users/recovery", email);
      clearAuthHeader();
      toast.success("Recovery email is sent");
      return result.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      return rejectWithValue(error.message);
    }
  }
);

export const changePassword = createAsyncThunk(
  "changePassword",
  async (
    { resetToken, newPassword }: { resetToken: string; newPassword: string },
    { rejectWithValue }
  ) => {
    try {
      const result = await axios.patch(`/users/recovery/${resetToken}`, {
        password: newPassword,
      });
      toast.success("Password has been successfully changed");
      return result.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.message);
    }
  }
)      
    
export const googleAuth = createAsyncThunk(
  "google",
  async (response: CredentialResponse, { rejectWithValue }) => {
    try {
      const result = await axios.post("/users/google", {
        googleToken: response.credential,
      });
      setAuthHeader(result.data.token);
      toast.success(result.data.message);
      return result.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.message);
    }
  }
);
