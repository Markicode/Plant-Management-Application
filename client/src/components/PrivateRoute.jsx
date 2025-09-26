import { useContext } from "react";
import { Navigate, Outlet, useOutletContext } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function PrivateRoute({ roles = [] }) {
  const { user, loading } = useContext(AuthContext);
  const parentContext = useOutletContext();

  if (loading) {
    return <p>Loading...</p>; // of spinner
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (roles.length > 0 && !roles.includes(user.role)) {
    return <Navigate to="/noauth" replace />;
  }

  return <Outlet context={parentContext} />;
}
