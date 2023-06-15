import { useLocation, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { ToastContainer } from "react-toastify";
import { Loader } from "../Skeleton";
import { Container, Main } from "./Layout.styled";
import { AppBar } from "../AppBar/AppBar";
import UserRoutes from "../../UserRoutes";

export const Layout = () => {
  const location = useLocation();
  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    <Container>
      {isRefreshing ? (
        <Loader />
      ) : (
        <>
          <AppBar />
          <Main>
            <UserRoutes />
            <Suspense fallback={<Loader page={location.pathname} />}>
              <Outlet />
            </Suspense>
          </Main>
        </>
      )}
      <ToastContainer />
    </Container>
  );
};
