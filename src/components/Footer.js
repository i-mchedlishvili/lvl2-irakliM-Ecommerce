import React from "react";
import "../App.css";
import { Box, Container, Grid } from "@material-ui/core";
import BusinessIcon from "@material-ui/icons/Business";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import EmailIcon from "@material-ui/icons/Email";
import ScheduleIcon from "@material-ui/icons/Schedule";

function Footer() {
  return (
    <Grid container>
      <Grid item lg={3} md={3} sm={6} xs={12}>
        <Box p={3}>
          <Box fontWeight="fontWeightBold" fontSize={20} mb={1}>
            <p>About Me</p>
          </Box>
          <Box>
            <p>
              Here you can use rows
              <br />
              and columns to
              <br />
              organize your footer
              <br />
              content. Lorem ipsum
              <br />
              dolor sit amet,
              <br />
              consectetur adipisicing
              <br />
              elit.
            </p>
          </Box>
        </Box>
      </Grid>
      <Grid item lg={3} md={3} sm={6} xs={12}>
        <Box p={3}>
          <Box fontWeight="fontWeightBold" fontSize={20} mb={1}>
            <p>Products</p>
          </Box>
          <Box>
            <p>MDBootstrap</p>
            <p>MMDWordPress</p>
            <p>BrandFlow</p>
            <p>Bootstrap Angular</p>
          </Box>
        </Box>
      </Grid>
      <Grid item lg={3} md={3} sm={6} xs={12}>
        <Box p={3}>
          <Box fontWeight="fontWeightBold" fontSize={20} mb={1}>
            <p>Useful links</p>
          </Box>
          <Box>
            <p>Your Account</p>
            <p>Become AAn Affiliate</p>
            <p>Shipping Rates</p>
            <p>Help</p>
          </Box>
        </Box>
      </Grid>
      <Grid item lg={3} md={3} sm={6} xs={12}>
        <Box p={3}>
          <Box fontWeight="fontWeightBold" fontSize={20} mb={1}>
            <p>Contacts</p>
          </Box>
          <Box>
            <p>
              <BusinessIcon />
              New York, Avenue Street 10
            </p>
            <p>
              <LocalPhoneIcon />
              042 876 836 908
            </p>
            <p>
              <EmailIcon />
              company@example.com
            </p>
            <p>
              <ScheduleIcon />
              Monday-Friday: 10-17
            </p>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Footer;
