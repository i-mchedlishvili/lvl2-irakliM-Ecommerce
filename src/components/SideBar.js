import React from "react";
import "../App.css";
import Subcategories from "./Subcategories";
import Filter from "./Filter"
import Condition from "./Condition";


function SideBar() {
  return (
      <>
    <Subcategories />
    <Filter />
    <Condition />
    </>
  );
}

export default SideBar;
