import {
  Box,
  Container,
  Button,
  TextField,
  InputLabel,
} from "@material-ui/core";
import React from "react";
import "../../App.css";
import SearchIcon from "@material-ui/icons/Search";

function Filter() {
  return (
    <>
      <Container>
        <Box display="flex" alignItems="center" mb={3}>
          <Box className="filter">
            <InputLabel fontWeight="fontWeightBold" fontSize={20}>
              Filter
            </InputLabel>
            <TextField id="standard-basic" placeholder="Search..." />
            <Button>
              <SearchIcon />
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Filter;
