import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Limi from "../Cards/Limiter";
function AdminPanel() {
  return (
    <>
      <Box display="flex" justifyContent="center">
        <Typography component={Box} color="secondary" variant="h4">
          Admin Section
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" mb={3}>
        <Button
          variant="contained"
          color="primary"
          mb={3}
          component={Box}
          width={1 / 4}
        >
          <Link component={Button} color="inherit" to="/admin/products">
            products
          </Link>
        </Button>

        <Button
          variant="contained"
          color="primary"
          mb={3}
          component={Box}
          width={1 / 4}
        >
          <Link component={Button} color="inherit" to="/admin/users">
            users
          </Link>
        </Button>

        <Button
          variant="contained"
          color="primary"
          mb={3}
          component={Box}
          width={1 / 4}
        >
          <Link component={Button} color="inherit" to="/admin/categories">
            categories
          </Link>
        </Button>
      </Box>
    </>
  );
}

export default AdminPanel;
