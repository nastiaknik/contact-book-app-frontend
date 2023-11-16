import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { AppDispatch } from "redux/store";
import { refreshUser } from "./redux/auth/operations";
import { setToken } from "redux/auth/authSlice";
import { toast } from "react-toastify";
import { Layout } from "./components/Layout/Layout";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token") ?? "";
  const message = searchParams.get("message") ?? "";

  useEffect(() => {
    if (token) {
      dispatch(setToken(token));
    }
    if (message === "verification_failed") {
      toast.error("User not found or verification has already been passed");
    }

    dispatch(refreshUser());
  }, [dispatch, token, message]);

  return <Layout />;
}

export default App;
