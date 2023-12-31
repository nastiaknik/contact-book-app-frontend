import axios, { AxiosResponse, AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthState } from "redux/auth/authSlice";
import { store } from "redux/store";
import { CredentialResponse } from "@react-oauth/google";
import { toast } from "react-toastify";
import { User } from "types/UserTypes";

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

axios.interceptors.request.use((config) => {
  const token: string | null = store.getState().auth.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
}
interface LoginCredentials {
  email: string;
  password: string;
}

export const register = createAsyncThunk(
  "register",
  async (credentials: RegisterCredentials, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<{ verificationToken: string; user: User }> =
        await axios.post("/users/register", credentials);
      toast.success(
        "Registration Successful! Please check your email and verify your account."
      );
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
      const errorMessage = "An unexpected error occurred.";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const login = createAsyncThunk(
  "login",
  async (credentials: LoginCredentials, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<{
        token: string;
        user: User;
      }> = await axios.post("/users/login", credentials);
      setAuthHeader(response.data.token);
      toast.success("Login success");
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
      const errorMessage = "An unexpected error occurred.";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const logout = createAsyncThunk(
  "logout",
  async (id: string | null, { rejectWithValue }) => {
    try {
      const result: AxiosResponse<{ message: string }> = await axios.post(
        "/users/logout",
        { id }
      );
      clearAuthHeader();
      toast.success("Logout success");
      return result.data;
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
      const errorMessage = "An unexpected error occurred.";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const refreshUser = createAsyncThunk("refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState() as { auth: AuthState };
  const { auth } = state;
  const persistedToken: string | null = auth.token;

  if (persistedToken === null) {
    throw new Error("Unable to fetch user");
  }
  try {
    setAuthHeader(persistedToken);
    const response: AxiosResponse<User> = await axios.get("/users/current");
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
        return thunkAPI.rejectWithValue(errorMessage);
      }
    }
    const errorMessage = "An unexpected error occurred.";
    toast.error(errorMessage);
    return thunkAPI.rejectWithValue(errorMessage);
  }
});

export const sendRecoveryEmail = createAsyncThunk(
  "recovery",
  async (email: string, { rejectWithValue }) => {
    try {
      const result: AxiosResponse<{ message: string }> = await axios.post(
        "/users/recovery",
        { email }
      );
      clearAuthHeader();
      toast.success("Recovery email is sent");
      return result.data;
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
      const errorMessage = "An unexpected error occurred.";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
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
      const result: AxiosResponse<{ message: string; user: User }> =
        await axios.patch(`/users/recovery/${resetToken}`, {
          password: newPassword,
        });
      toast.success("Password has been successfully changed");
      return result.data;
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
      const errorMessage = "An unexpected error occurred.";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const googleAuth = createAsyncThunk(
  "google",
  async (response: CredentialResponse, { rejectWithValue }) => {
    try {
      const result: AxiosResponse<{
        user: User;
        message: string;
        token: string;
      }> = await axios.post("/users/google", {
        googleToken: response.credential,
      });
      setAuthHeader(result.data.token);
      toast.success(result.data.message);
      return result.data;
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
