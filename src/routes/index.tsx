import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "@/pages";
import LoginPage from "@/pages/auth/login";
import RegisterPage from "@/pages/auth/register";
import ProfilePage from "@/pages/users/profile";
import EditProfilePage from "@/pages/users/edit-profile";
import CartPage from "@/pages/cart/cart";
import HistoryOrderPage from "@/pages/cart/history-order";
import NotFoundPage from "@/pages/not-found";
import DetailProductPage from "@/pages/products/detail-product";
import AboutPage from "@/pages/about";
import CheckoutPage from "@/pages/checkout/checkout";
import ContactPage from "@/pages/contact";

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
      path: "/detail-product",
      element: <DetailProductPage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "/checkout",
      element: <CheckoutPage />,
    },
    {
      path: "/contact",
      element: <ContactPage />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}
