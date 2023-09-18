import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { Loader } from "./components/Loader/Loader";

const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
/* const FavoriteContactsPage = lazy(() =>
  import("./pages/FavoriteContactsPage/FavoriteContactsPage")
); */
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const UserRoutes = () => {
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
          path="/contacts"
          element={
            <PrivateRoute
              redirectTo="/auth/login"
              component={<ContactsPage />}
            />
          }
        />
        {/* <Route
          path="/contacts/:id"
          element={
            <PrivateRoute redirectTo="/auth/login" component={<ContactPage />} />
          } />*/}
        {/* <Route
          path="/contacts/favorites"
          element={
            <PrivateRoute redirectTo="/auth/login" component={<FavoritesPage />} />
          }
        /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
