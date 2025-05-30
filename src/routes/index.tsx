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
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
  ];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout
            footerText="PuppyCo offers 6 powerful products — Rocki, Leon, Lara, Husk, Tokito,
        and Lord — each designed to generate daily profits and help you recover
        your investment fast. Start earning with confidence today!"
          >
            <Home />
          </Layout>
        </ProtectedRoute>
      ),
    },
    {
      path: "/active-product",
      element: (
        <ProtectedRoute>
          <Layout footerText="© 2023 PuppyCo Crypto Platform | Your Lara investment is secured and generating profits">
            <ActiveProducts />
          </Layout>
        </ProtectedRoute>
      ),
    },
    {
      path: "/invite-earn",
      element: (
        <ProtectedRoute>
          <Layout footerText="© 2023 PuppyCo Crypto Platform | Invite friends and grow together">
            <InviteEarn />
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
