import React from "react";
import "../../App.css";
import { Container, Box } from "@material-ui/core";
import Subcategories from "./Subcategories";
import Filter from "./Filter";
import Condition from "./Condition";
import Customer from "./CustomerReview";
import Price from "./PriceRange";
import PriceSlider from "./PriceRangeSlider";
import Size from "./Size";

function SideBar() {
  return (
    <Container>
      <Box>
        <Subcategories />
        <Filter />
        <Condition />
        <Customer />
        <Price />
        <PriceSlider />
        <Size />
      </Box>
    </Container>
  );
}

export default SideBar;
