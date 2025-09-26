import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export default function NoAuth() {
  const { setNavTitle } = useOutletContext() || {};

  useEffect(() => {
    setNavTitle?.("Geen toegang");
  }, [setNavTitle]);

  return <h3>You are not authorized to view this page.</h3>;
}
