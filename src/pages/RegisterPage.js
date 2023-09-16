import { Helmet } from "react-helmet";
import { RegisterForm } from "../components/RegisterForm/RegisterForm";

export default function RegisterPage() {
  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </>
  );
}
