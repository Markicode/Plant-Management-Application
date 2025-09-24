import React from "react";
import { useOutletContext } from "react-router";

function ManageVessels() {
  const { setNavTitle } = useOutletContext();
  setNavTitle("Ketel management");
  return <h3>Ketel management</h3>;
}

export default ManageVessels;
