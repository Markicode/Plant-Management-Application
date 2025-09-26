import React, { useContext, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Home() {
  const { user, logout } = useContext(AuthContext);
  const { setNavTitle } = useOutletContext();

  useEffect(() => {
    setNavTitle?.("Home");
  }, [setNavTitle]);

  return (
    <>
      <h3>Homepage</h3>
      <h2>Welkom {user?.username}</h2>
      <button onClick={logout}>Logout</button>
    </>
  );
}

export default Home;
