import React from "react";
import "./App.css";
import { Box, Grid } from "@material-ui/core";
import Header from "./components/Layout/Header";
import SideBar from "./components/Sidebar/SideBar";
import FooterTop from "./components/Layout/FooterTop";
import Footer from "./components/Layout/Footer";
import CopyrightFooter from "./components/Layout/FooterCopyright";
import Cards from "./components/Cards/Cards";
import Item from "./components/Items/ItemLayout";
import ItemLayout from "./components/Items/ItemLayout";

function App() {
  return (
    <>
      <Header />
      <Grid container component={Box} mt={4} pr={3}>
        <Grid item sm={4} md={4} lg={4}>
          <SideBar />
        </Grid>
        <Grid item sm={8} md={8} lg={8}>
          <Cards />
        </Grid>
      </Grid>
      <FooterTop />
      <Footer />
      <CopyrightFooter />
      <ItemLayout />
    </>
  );
}

export default App;
