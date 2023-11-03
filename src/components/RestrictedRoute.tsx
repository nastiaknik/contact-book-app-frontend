import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

interface RestrictedRouteProps {
  component: React.ReactElement;
  redirectTo?: string;
}

export const RestrictedRoute: React.FC<RestrictedRouteProps> = ({
  component: Component,
  redirectTo = "/contacts",
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
