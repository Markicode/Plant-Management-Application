import React, { useEffect } from "react";
//import { NavbarContext } from "../../contexts/NavbarContext";
import { useOutletContext } from "react-router";

function Vessels() {
  const { setNavTitle } = useOutletContext();
  useEffect(() => {
    setNavTitle("Ketels");
  }, [setNavTitle]);

  return <h3>Hier alle ketels</h3>;
}

export default Vessels;
