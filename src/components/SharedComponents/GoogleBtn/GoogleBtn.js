import { GoogleLogin } from "@react-oauth/google";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { googleAuth } from "../../../redux/auth/operations";
import { GoogleButton } from "./GoogleBtn.styled";

export const GoogleBtn = () => {
  const dispatch = useDispatch();

  const onSuccess = (res) => {
    dispatch(googleAuth(res));
  };

  const onError = (error) => {
    toast.error(error);
  };

  return (
    <GoogleButton>
      <GoogleLogin onSuccess={onSuccess} onError={onError} />
    </GoogleButton>
  );
};
