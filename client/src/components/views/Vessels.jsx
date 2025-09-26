import React, { useState, useEffect } from "react";
//import { NavbarContext } from "../../contexts/NavbarContext";
import { useOutletContext } from "react-router-dom";
import axios from "axios";

/*async function getVessels() {
  try {
    const response = await axios.get("https://localhost:8080/api/users/");
    const result = response.data;
    return result;
  } catch (error) {
    console.error("Failed to make request:", error.message);
  }
}*/

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.withCredentials = true;

function Vessels() {
  console.log("render");
  const { setNavTitle } = useOutletContext() || {};
  useEffect(() => {
    setNavTitle?.("Ketels");
  }, [setNavTitle]);

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/vessels/");
        const result = response.data;
        setData(result);
      } catch (error) {
        console.error("Failed to make request:", error.message);
      }
    };
    fetchData();
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  } else {
    console.log(data);
    return (
      <>
        <h3>Hier alle ketels</h3>
      </>
    );
  }
}

export default Vessels;
