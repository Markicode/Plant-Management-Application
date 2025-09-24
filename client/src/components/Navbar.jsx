import React from "react";
import NavItem from "./Navitem";

function Navbar() {
  return (
    <div id="container">
      <div id="logo-bar">
        <h1>Plant Manager</h1>
      </div>
      <div id="nav-bar">
        <NavItem url="/login" text="Log in" />
        <NavItem url="/vessels" text="Ketels" />
        <NavItem url="/products" text="Producten" />
        <NavItem url="/members" text="Leden" />
        <NavItem url="/managevessels" text="Ketelbeheer" />
        <NavItem url="/logout" text="Log uit" />
      </div>
    </div>
  );
}

export default Navbar;
