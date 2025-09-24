import React from "react";
import { useOutletContext } from "react-router";

function Members() {
  const { setNavTitle } = useOutletContext();
  setNavTitle("Leden");
  return <h3>Leden</h3>;
}

export default Members;
