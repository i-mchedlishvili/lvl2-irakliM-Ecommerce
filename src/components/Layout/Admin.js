import React from "react";
import { Box, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <>
      <Box display="flex" flexDirection="column" mb={3}>
        <Link to="/products">
          <Button
            variant="contained"
            color="primary"
            mb={3}
            component={Box}
            fullWidth
          >
            products
          </Button>
        </Link>
        <Link to="/users">
          <Button
            variant="contained"
            color="primary"
            mb={3}
            component={Box}
            fullWidth
          >
            users
          </Button>
        </Link>
        <Link to="categories">
          <Button
            variant="contained"
            color="primary"
            mb={3}
            component={Box}
            fullWidth
          >
            categories
          </Button>
        </Link>
      </Box>
    </>
  );
}

export default Admin;
