import { Navigate, Outlet, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = () => {
  const token = Cookies.get("token");
  const { pathname } = useLocation();

  const authProtected = ["/login", "/register"];
  const protectedByToken = [
    "/profile",
    "/profile/edit",
    "/cart",
    "/order/history",
    "/checkout",
    "/products/manage",
    "/add-product",
    "/edit-product/:product_id",
  ];

  if (authProtected.includes(pathname)) {
    if (token) return <Navigate to="/" />;
  }

  if (protectedByToken.includes(pathname)) {
    if (!token) return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
