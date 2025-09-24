import React from "react";
import { useOutletContext } from "react-router";

function Products() {
  const { setNavTitle } = useOutletContext();
  setNavTitle("Producten");
  return <h3>Producten</h3>;
}

export default Products;
