import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import Header from "./components/Layout/Header";
import SideBar from "./components/Sidebar/SideBar";
import FooterTop from "./components/Layout/FooterTop";
import Footer from "./components/Layout/Footer";
import CopyrightFooter from "./components/Layout/FooterCopyright"
import Cards from "./components/Cards/Cards"

function App() {
  return (
    <>
      <Header />
      <Grid container>
        <Grid item md={4} lg={4}>
      <SideBar />
      </Grid>
      <Grid item md={8} lg={4}>
        <Cards />
      </Grid>
      </Grid>
      <FooterTop />
      <Footer />
      <CopyrightFooter />
    </>
  );
}

export default App;
