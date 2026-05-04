import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.user);
  console.log(user);

  const isAdmin = user?.role === "admin";

  // not logged in → login page
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // logged in but not admin → home page
  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  // admin → allow access
  return children;
};

export default AdminRoute;