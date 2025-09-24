import React from "react";
import { useOutletContext } from "react-router";

function Home() {
  const { setNavTitle } = useOutletContext();
  setNavTitle("Not found");
  return <h3>Page Not Found</h3>;
}

export default Home;
