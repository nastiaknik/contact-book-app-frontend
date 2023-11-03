import React from "react";
import { Helmet } from "react-helmet";
import { LoginForm } from "../components/LoginForm/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </>
  );
};

export default LoginPage;
