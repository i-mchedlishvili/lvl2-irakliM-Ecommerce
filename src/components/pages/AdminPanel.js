import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import CategoryIcon from "@material-ui/icons/Category";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function AdminPanel() {
  return (
    <>
      <Box display="flex" justifyContent="center">
        <Typography component={Box} color="secondary" variant="h5">
          Admin Section
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" ml={3}>
        <Button
          variant="contained"
          color="primary"
          mb={3}
          component={Box}
          width={1 / 4}
        >
          <ShoppingCartIcon />
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
          <AccountBoxIcon />
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
          <CategoryIcon />
          <Link component={Button} color="inherit" to="/admin/categories">
            categories
          </Link>
        </Button>
      </Box>
    </>
  );
}

export default AdminPanel;
