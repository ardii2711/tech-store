import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "@/pages";
import EditProfile from "@/pages/users/edit-profile";

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
  ]);
  return <RouterProvider router={router} />;
}
