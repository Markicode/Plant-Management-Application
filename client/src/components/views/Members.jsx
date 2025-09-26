import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function Members() {
  const { setNavTitle } = useOutletContext() || {};

  useEffect(() => {
    setNavTitle?.("Ledenbeheer");
  }, [setNavTitle]);

  return <h3>Leden</h3>;
}

export default Members;
