import React from "react";
import "../../App.css";
import { Grid, Container, Box } from "@material-ui/core";
import Subcategories from "./Subcategories";
import Filter from "./Filter";
import Condition from "./Condition";
import Customer from "./CustomerReview";
import Price from "./PriceRange";
import PriceSlider from "./PriceRangeSlider";
import Size from "./Size";
import Color from "./SidebarColors";

function SideBar() {
  return (
    <Container>
      <Grid component={Box} container xs={12} lg={4} mt={5}>
        <Grid item>
          <Subcategories />
          <Filter />
          <Condition />
          <Customer />
          <Price />
          <PriceSlider />
          <Size />
          <Color />
        </Grid>
      </Grid>
    </Container>
  );
}

export default SideBar;
