import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "@/pages";
import LoginPage from "@/pages/auth/login";
import RegisterPage from "@/pages/auth/register";
import ProfilePage from "@/pages/users/profile";
import EditProfilePage from "@/pages/users/edit-profile";
import CartPage from "@/pages/cart/cart";
import HistoryOrderPage from "@/pages/cart/history-order";
import NotFoundPage from "@/pages/not-found";
import DetailProduct from "@/pages/products/detail-product";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "/profile",
      element: <ProfilePage />,
    },
    {
      path: "/profile/edit",
      element: <EditProfilePage />,
    },
    {
      path: "/cart",
      element: <CartPage />,
    },
    {
      path: "/history-order",
      element: <HistoryOrderPage />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
    {
      path: "/detail-product",
      element: <DetailProduct />,
    },
  ]);
  return <RouterProvider router={router} />;
}
