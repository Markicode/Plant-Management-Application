import React from "react";
import { useOutletContext } from "react-router";

function Login() {
  const { setNavTitle } = useOutletContext();
  setNavTitle("Login");
  return <h3>Login</h3>;
}

export default Login;
