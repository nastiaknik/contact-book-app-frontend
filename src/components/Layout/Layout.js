import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserRoutes from "../../UserRoutes";
import { AppBar } from "../AppBar/AppBar";
import { Loader } from "../Loader/Loader";
import { Main } from "./Layout.styled";

export const Layout = () => {
  return (
    <>
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
    </>
  );
};
