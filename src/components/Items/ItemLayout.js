import React from "react";
import "../../App.css";
import { Box, Grid } from "@material-ui/core";
import Header from "../Layout/Header";
import FooterTop from "../Layout/FooterTop";
import Footer from "../Layout/Footer";
import CopyrightFooter from "../Layout/FooterCopyright"
import Item from "./Item"
function ItemLayout() {
  return (
    <>
      <Header />
      <Item />
      <FooterTop />
      <Footer />
      <CopyrightFooter />
    </>
  );
}

export default ItemLayout;
