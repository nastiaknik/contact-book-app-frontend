import * as Yup from "yup";

export const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Minimum 6 characters"),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
});

export const EmailSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

export const ResetPasswordSchema = Yup.object().shape({
  newPassword: Yup.string()
    .required("Password is required")
    .min(6, "Minimum 6 characters"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .required("Confirm is required"),
});
