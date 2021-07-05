import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { Box, Container } from "@material-ui/core";

function Condition() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <>
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          className="conditions"
          mb={2}
        >
          <Box fontWeight="fontWeightBold" fontSize={16} mb={1}>
            Condition
          </Box>
          <p>
            {" "}
            <Checkbox
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />{" "}
            NEW
          </p>
          <p>
            <Checkbox
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />{" "}
            USED
          </p>
          <p>
            <Checkbox
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />{" "}
            COLLECTIBLE
          </p>
          <p>
            <Checkbox
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />{" "}
            RENEWED
          </p>
        </Box>
      </Container>
    </>
  );
}

export default Condition;
