import { Box, Container } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import React from "react";
import "../../App.css";

function Size() {
  return (
    <>
      <Container>
        <Box fontWeight="fontWeightBold" fontSize={17} mb={2}>
          Size
        </Box>
        <Box
          mb={3}
          display="flex"
          flexDirection="column"
          className="conditions"
        >
          <p>
            {" "}
            <Checkbox
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />{" "}
            34
          </p>
          <p>
            <Checkbox
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />{" "}
            36
          </p>
          <p>
            <Checkbox
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />{" "}
            38
          </p>
          <p>
            <Checkbox
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />{" "}
            40
          </p>
        </Box>
      </Container>
    </>
  );
}

export default Size;
