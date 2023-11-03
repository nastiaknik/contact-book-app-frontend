import React from "react";
import { Helmet } from "react-helmet";
import { RegisterForm } from "../components/RegisterForm/RegisterForm";

const RegisterPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </>
  );
};

export default RegisterPage;
