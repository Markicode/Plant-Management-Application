import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function Home() {
  const { setNavTitle } = useOutletContext() || {};

  useEffect(() => {
    setNavTitle?.("Home");
  }, [setNavTitle]);

  return <h3>Page Not Found</h3>;
}

export default Home;
