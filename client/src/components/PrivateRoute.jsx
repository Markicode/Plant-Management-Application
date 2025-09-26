/*import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

export default function PrivateRoute() {
  const { user } = useContext(AuthContext);
  return user ? <Outlet /> : <Navigate to="/login" />;
}*/

import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

export default function PrivateRoute() {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <p>Loading...</p>; // of spinner
  }

  return user ? <Outlet /> : <Navigate to="/login" replace />;
}
