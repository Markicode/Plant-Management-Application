import React from "react";
import { Link } from "react-router-dom";

function NavItem({ url, text }) {
  const isAuthButton = url === "/login" || url === "/logout";
  return (
    <div className={`nav-button ${isAuthButton ? "auth-button" : ""}`}>
      <Link to={url}>
        <h2>{text}</h2>
      </Link>
    </div>
  );
}

export default NavItem;
