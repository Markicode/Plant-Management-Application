import { React, useState } from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  const [navTitle, setNavTitle] = useState("Home");

  return (
    <>
      <Navbar navTitle={navTitle} />
      <main>
        <Outlet context={{ setNavTitle }} />
      </main>
    </>
  );
}

export default Layout;
