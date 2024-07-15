import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "@/pages";
import LoginPage from "@/pages/auth/login";
import EditProfile from "@/pages/users/edit-profile";
import CartPage from "@/pages/cart/cart";
import HistoryOrderPage from "@/pages/cart/history-order";

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
      path: "/profile/edit",
      element: <EditProfile />,
    },
    {
      path: "/cart",
      element: <CartPage />,
    },
    {
      path: "/historyOrder",
      element: <HistoryOrderPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}
