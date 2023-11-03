import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { Loader } from "./components/Loader/Loader";

const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RecoveryPage = lazy(() => import("./pages/RecoveryPage/RecoveryPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const UserRoutes: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/auth/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/auth/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/auth/recovery/:token"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RecoveryPage />}
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute
              redirectTo="/auth/login"
              component={<ContactsPage />}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
