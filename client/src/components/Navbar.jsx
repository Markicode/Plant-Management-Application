import React, { useContext } from "react";
import NavItem from "./Navitem";
import { AuthContext } from "../contexts/AuthContext";

function Navbar({ navTitle }) {
  const { user, loading } = useContext(AuthContext);
  if (loading) return <div>Loading...</div>;

  return (
    <div id="container">
      <div id="logo-bar">
        <div id="main-title">
          <h1>Plant Manager</h1>
        </div>
        <div id="sub-title">
          <h2> &gt; {navTitle}</h2>
        </div>
      </div>
      <div id="nav-bar">
        <NavItem url="/" text="Home" />
        {!user && <NavItem url="/login" text="Log in" />}
        {user && (
          <>
            <NavItem url="/vessels" text="Ketels" />
            <NavItem url="/products" text="Producten" />
          </>
        )}
        {user && user.role === "admin" && (
          <>
            <NavItem url="/members" text="Leden" />
            <NavItem url="/managevessels" text="Ketelbeheer" />
          </>
        )}
        {user && <NavItem url="/logout" text="Log uit" />}
      </div>
    </div>
  );
}

export default Navbar;
