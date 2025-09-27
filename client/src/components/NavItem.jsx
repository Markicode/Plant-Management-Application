import React from "react";
import { Link } from "react-router-dom";

function NavItem({ url, text }) {
  return (
    <div className="nav-button">
      <Link to={url}>
        <h2>{text}</h2>
      </Link>
    </div>
  );
}

export default NavItem;
