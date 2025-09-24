import React from "react";
import { useOutletContext } from "react-router";

function Home() {
  const { setNavTitle } = useOutletContext();
  setNavTitle("Home");
  return <h3>Homepage</h3>;
}

export default Home;
