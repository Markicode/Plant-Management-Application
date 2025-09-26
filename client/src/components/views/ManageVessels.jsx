import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function ManageVessels() {
  const { setNavTitle } = useOutletContext() || {};

  useEffect(() => {
    setNavTitle?.("Ketelbeheer");
  }, [setNavTitle]);

  return <h3>Ketel management</h3>;
}

export default ManageVessels;
