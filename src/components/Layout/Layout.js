import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader } from "../Loader/Loader";
import { Container, Main } from "./Layout.styled";
import { AppBar } from "../AppBar/AppBar";
import UserRoutes from "../../UserRoutes";

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Main>
        <UserRoutes />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        theme="colored"
      />
    </Container>
  );
};
