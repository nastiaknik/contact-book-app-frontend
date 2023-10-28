import axios, { AxiosResponse } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthState } from "redux/auth/authSlice";
import { CredentialResponse } from "@react-oauth/google";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://goit-nodejs-homework-bnfs.onrender.com/api";

const setAuthHeader = (token: string | null): void => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    axios.defaults.headers.common.Authorization = "";
  }
};
const clearAuthHeader = (): void => {
  axios.defaults.headers.common.Authorization = "";
};

interface Auth {
  auth: AuthState;
}

export const register = createAsyncThunk(
  "register",
  async (
    credentials: { name: string; email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response: AxiosResponse<{
        verificationToken: string;
        name: string;
        email: string;
      }> = await axios.post("/users/register", credentials);
      toast.success(
        "Registration Successful! Please check your email and verify your account."
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
        return rejectWithValue(error.message);
      } else {
        toast.error("An error occurred");
        return rejectWithValue({ message: "An error occurred" });
      }
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
      const response: AxiosResponse<{
        token: string;
        user: { name: string; email: string };
      }> = await axios.post("/users/login", credentials);
      setAuthHeader(response.data.token);
      toast.success("Login success");
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
        return rejectWithValue(error.message);
      } else {
        toast.error("An error occurred");
        return rejectWithValue({ message: "An error occurred" });
      }
    }
  }
);

export const logout = createAsyncThunk(
  "logout",
  async (id: string | null, { rejectWithValue }) => {
    try {
      const result = await axios.post("/users/logout", id);
      clearAuthHeader();
      toast.success("Logout success");
      return result.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
        return rejectWithValue(error.message);
      } else {
        toast.error("An error occurred");
        return rejectWithValue({ message: "An error occurred" });
      }
    }
  }
);

export const refreshUser = createAsyncThunk("refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const { auth } = state;
  const persistedToken: string | null = auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue("Unable to fetch user");
  }
  try {
    setAuthHeader(persistedToken);
    const response = await axios.get("/users/current");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.message);
    } else {
      return thunkAPI.rejectWithValue({ message: "An error occurred" });
    }
  }
});

export const sendRecoveryEmail = createAsyncThunk(
  "recovery",
  async (email: string, { rejectWithValue }) => {
    try {
      const result = await axios.post("/users/recovery", email);
      clearAuthHeader();
      toast.success("Recovery email is sent");
      return result.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
        return rejectWithValue(error.message);
      } else {
        toast.error("An error occurred");
        return rejectWithValue({ message: "An error occurred" });
      }
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
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
        return rejectWithValue(error.message);
      } else {
        toast.error("An error occurred");
        return rejectWithValue({ message: "An error occurred" });
      }
    }
  }
);

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
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
        return rejectWithValue(error.message);
      } else {
        toast.error("An error occurred");
        return rejectWithValue({ message: "An error occurred" });
      }
    }
  }
);
