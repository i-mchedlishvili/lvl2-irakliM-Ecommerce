import {
  Box,
  Container,
  Button,
  TextField,
  InputLabel,
} from "@material-ui/core";
import React from "react";
import "../App.css";
import { typography } from "@material-ui/system";
import SearchIcon from "@material-ui/icons/Search";
import { flexbox } from "@material-ui/system";

function Filter() {
  return (
    <div className="App">
      <Container maxWidth>
        <Box display="flex" alignItems="center">
          <Box className="filter">
            <InputLabel fontWeight="fontWeightBold" fontSize={20}>
              Filter
            </InputLabel>
            <TextField id="standard-basic" placeholder="Search..." />
          </Box>
          <Box className="searchBut">
            <Button>
              <SearchIcon />
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Filter;
