import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "@/pages";

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
  ]);
  return <RouterProvider router={router} />;
}
