import React from "react";
import "../../App.css";
import { Box, Container, List, ListItem } from "@material-ui/core";

function Subcategories() {
  return (
    <Container>
      <Box className="subcategories" mb={4}>
        <Box fontWeight="fontWeightBold" fontSize={20} mb={1}>
          Subcategories
        </Box>
        <Box fontWeight="fontWeightBold" fontSize={13}>
          <span>RETURN TO</span> CLOTHING, SHOES, ACCESSORIES
        </Box>
        <List>
          <ListItem>DRESSES</ListItem>
          <ListItem>TOPS, TEES & BLOUSES</ListItem>
          <ListItem>SWEATERS</ListItem>
          <ListItem>FASHION HOODIES & SWEATSHIRTS</ListItem>
          <ListItem>JEANS</ListItem>
        </List>
      </Box>
    </Container>
  );
}

export default Subcategories;
