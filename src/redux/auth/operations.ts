import axios, { AxiosResponse } from "axios";
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
  async (credentials: LoginCredentials, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<{
        token: string;
        user: User;
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
      const result: AxiosResponse<{ message: string }> = await axios.post(
        "/users/logout",
        { id }
      );
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
  const state = thunkAPI.getState() as { auth: AuthState };
  const { auth } = state;
  const persistedToken: string | null = auth.token;

  if (persistedToken === null) {
    toast.error("Unable to fetch user");
    throw new Error("Unable to fetch user");
  }
  try {
    setAuthHeader(persistedToken);
    const response: AxiosResponse<User> = await axios.get("/users/current");
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
      const result: AxiosResponse<{ message: string }> = await axios.post(
        "/users/recovery",
        { email }
      );
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
      const result: AxiosResponse<{ message: string; user: User }> =
        await axios.patch(`/users/recovery/${resetToken}`, {
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
