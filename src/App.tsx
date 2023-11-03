import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "redux/store";
import { refreshUser } from "./redux/auth/operations";
import { Layout } from "./components/Layout/Layout";

function App() {
    const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return <Layout />;
}

export default App;
