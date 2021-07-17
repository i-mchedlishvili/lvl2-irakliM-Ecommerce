import React from "react";
import { Grid, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import Header from "../Layout/Header";
import FooterTop from "../Layout/FooterTop";
import Footer from "../Layout/Footer";
import CopyrightFooter from "../Layout/FooterCopyright";
import SideBar from "../Sidebar/SideBar";
import Cards from "../Cards/Cards";
import { useParams } from "react-router-dom";

function Home() {
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
    </>
  );
}

export default Home;
