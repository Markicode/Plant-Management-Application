import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import AddVessel from "../AddVessel";
import VesselTable from "../VesselTable";

function ManageVessels() {
  const { setNavTitle } = useOutletContext() || {};
  const [data, setData] = useState(null);

  useEffect(() => {
    setNavTitle?.("Ketelbeheer");
  }, [setNavTitle]);

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
        <h3>Ketel toevoegen:</h3>
        <AddVessel />
        <h3>Ketels:</h3>
        <VesselTable data={data} />
      </>
    );
  }
}

export default ManageVessels;
