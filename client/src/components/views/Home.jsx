import React, { useContext } from "react";
import { useOutletContext } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";

function Home() {
  const { user, logout } = useContext(AuthContext);
  const { setNavTitle } = useOutletContext();
  setNavTitle("Home");
  return (
    <>
      <h3>Homepage</h3>
      <h2>Welkom {user?.username}</h2>
      <button onClick={logout}></button>
    </>
  );
}

export default Home;
