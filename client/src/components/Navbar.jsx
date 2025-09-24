import React from "react";
import NavItem from "./Navitem";
import { NavbarContext } from "../contexts/NavbarContext";

function Navbar({ navTitle }) {
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
