import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { useAuth } from "../provider/useAuth";
import Home from "../pages/home";
import Layout from "../components/layout/Layout";
import ActiveProducts from "../pages/active-products/ActiveProducts";
import LoginPage from "../pages/login/LoginPage";
import RegistrationPage from "../pages/Registration/Registration";
import InviteEarn from "../pages/Invite/InviteEarn";
import NoActiveProducts from "../pages/active-products/NoActiveProducts";

const Routes = () => {
  const { token } = useAuth();

  // Define public routes accessible to all users
  const routesForPublic = [
    {
      path: "/home",
      element: <Home />,
    },
  ];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout>
            <Home />
          </Layout>
        </ProtectedRoute>
      ),
    },
    {
      path: "/active-products",
      element: (
        <ProtectedRoute>
          <Layout>
            <ActiveProducts />
          </Layout>
        </ProtectedRoute>
      ),
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegistrationPage />,
    },
    {
      path: "/invite-earn",
      element: <InviteEarn />,
    },
    {
      path: "/active-product",
      element: <ActiveProducts />,
    },
    {
      path: "/no-active-product",
      element: <NoActiveProducts />,
    },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;
