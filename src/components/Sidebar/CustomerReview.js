import React from "react";
import "../../App.css";
import { Box, Container } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

function Customer() {
  return (
    <Container>
      <Box fontWeight="fontWeightBold" fontSize={16} mb={2}>
        Avg.Customer Review
      </Box>
      <Box display="flex" mb={4}>
        <StarIcon color="primary" />
        <StarIcon color="primary" />
        <StarIcon color="primary" />
        <StarIcon color="primary" />
        <StarBorderIcon color="primary" />
      </Box>
      <Box display="flex" mb={4}>
        <StarIcon color="primary" />
        <StarIcon color="primary" />
        <StarIcon color="primary" />
        <StarBorderIcon color="primary" />
        <StarBorderIcon color="primary" />
      </Box>
      <Box display="flex" mb={4}>
        <StarIcon color="primary" />
        <StarIcon color="primary" />
        <StarBorderIcon color="primary" />
        <StarBorderIcon color="primary" />
        <StarBorderIcon color="primary" />
      </Box>
      <Box display="flex" mb={4}>
        <StarIcon color="primary" />
        <StarBorderIcon color="primary" />
        <StarBorderIcon color="primary" />
        <StarBorderIcon color="primary" />
        <StarBorderIcon color="primary" />
      </Box>
    </Container>
  );
}

export default Customer;
