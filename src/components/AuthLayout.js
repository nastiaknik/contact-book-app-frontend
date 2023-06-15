import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "../redux/auth/operations";

const AuthLayout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return children;
};

export default AuthLayout;
