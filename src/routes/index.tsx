import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "@/pages";
import LoginPage from "@/pages/auth/login";
import RegisterPage from "@/pages/auth/register";
import ProfilePage from "@/pages/users/profile";
import EditProfilePage from "@/pages/users/edit-profile";
import CartPage from "@/pages/cart";
import HistoryOrderPage from "@/pages/order/history-order";
import NotFoundPage from "@/pages/not-found";
import DetailProductPage from "@/pages/products/detail-product";
import AboutPage from "@/pages/about";
import CheckoutPage from "@/pages/checkout";
import ManageProductPage from "@/pages/products/manage-product";
import AddProductPage from "@/pages/products/add-product";
import EditProductPage from "@/pages/products/edit-product";
import ContactPage from "@/pages/contact";
import ProtectedRoute from "./protected-route";

export default function Router() {
  const router = createBrowserRouter([
    {
      element: <ProtectedRoute />,
      children: [
        {
          path: "/",
          loader: () => "Home | Tech Store",
          element: <HomePage />,
        },
        {
          path: "/login",
          loader: () => "Login | Tech Store",
          element: <LoginPage />,
        },
        {
          path: "/register",
          loader: () => "Register | Tech Store",
          element: <RegisterPage />,
        },
        {
          path: "/profile",
          loader: () => "Profile | Tech Store",
          element: <ProfilePage />,
        },
        {
          path: "/profile/edit",
          loader: () => "Edit Profile | Tech Store",
          element: <EditProfilePage />,
        },
        {
          path: "/cart",
          loader: () => "Cart | Tech Store",
          element: <CartPage />,
        },
        {
          path: "/order/history",
          loader: () => "Order History | Tech Store",
          element: <HistoryOrderPage />,
        },
        {
          path: "/products/:product_id",
          loader: () => "Product Detail | Tech Store",
          element: <DetailProductPage />,
        },
        {
          path: "/about",
          loader: () => "About Us | Tech Store",
          element: <AboutPage />,
        },
        {
          path: "/checkout",
          loader: () => "Checkout | Tech Store",
          element: <CheckoutPage />,
        },
        {
          path: "/products/manage",
          loader: () => "Manage Products | Tech Store",
          element: <ManageProductPage />,
        },
        {
          path: "/add-product",
          loader: () => "Add Product | Tech Store",
          element: <AddProductPage />,
        },
        {
          path: "/edit-product/:product_id",
          loader: () => "Edit Product | Tech Store",
          element: <EditProductPage />,
        },
        {
          path: "/contact",
          loader: () => "Contact Us | Tech Store",
          element: <ContactPage />,
        },
        {
          path: "*",
          loader: () => "Not Found | Tech Store",
          element: <NotFoundPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
