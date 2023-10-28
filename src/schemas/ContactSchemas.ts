import * as Yup from "yup";

export const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name is too short!")
    .max(30, "Name is too long!")
    .required("Name is required!")
    .label("Name"),
  number: Yup.string()
    .required("Number is required!")
    .label("Number")
    .matches(/^(\+?\d{1,3}[- ]?)?\d{10}$/, "Please provide a valid number!"),
});
