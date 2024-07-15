import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "@/pages";
import EditProfile from "@/pages/users/edit-profile";
import ProfilePage from "@/pages/users/profile";

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
      path: "/profile/edit",
      element: <EditProfile />,
    },
    {
      path: "/profile",
      element: <ProfilePage />,
    },
  ]);
  return <RouterProvider router={router} />;
}
