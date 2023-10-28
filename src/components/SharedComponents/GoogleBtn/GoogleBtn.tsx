import React from "react";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { AppDispatch } from "redux/store";
import { googleAuth } from "../../../redux/auth/operations";
import { GoogleButton } from "./GoogleBtn.styled";

export const GoogleBtn: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const onSuccess = (res: CredentialResponse): void => {
    dispatch(googleAuth(res));
  };

  return (
    <GoogleButton>
      <GoogleLogin
        onSuccess={onSuccess}
        onError={() => toast.error("An error occurred during Google login.")}
      />
    </GoogleButton>
  );
};
