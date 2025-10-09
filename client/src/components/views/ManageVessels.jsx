import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import AddVessel from "../AddVessel";
import ManageVesselTable from "../ManageVesselTable";

function ManageVessels() {
  const { setNavTitle } = useOutletContext() || {};
  const [data, setData] = useState(null);

  useEffect(() => {
    setNavTitle?.("Ketelbeheer");
  }, [setNavTitle]);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/vessels/");
      const result = response.data;
      setData(result);
    } catch (error) {
      console.error("Failed to make request:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  } else {
    console.log(data);
    return (
      <>
        <h3>Ketel toevoegen:</h3>
        <AddVessel onVesselAdded={fetchData} />
        <h3>Ketels:</h3>
        <ManageVesselTable data={data} />
      </>
    );
  }
}

export default ManageVessels;
