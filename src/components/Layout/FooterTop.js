import React from "react";
import "../../App.css";
import { Box } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

function FooterTop() {
  return (
    <Box display="flex" className="footer-top">
      <Box fontWeight="fontWeightBold" fontSize={17}>
        <p>Get connected with us on social networks! </p>
      </Box>
      <Box display="flex">
        <FacebookIcon />
        <TwitterIcon />
        <LinkedInIcon />
        <InstagramIcon />
      </Box>
    </Box>
  );
}

export default FooterTop;
