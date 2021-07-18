import {
  Box,
  List,
  ListItem,
  makeStyles,
  Button,
  CardMedia,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import React from "react";
import "../../App.css";
import Image from "../../images/header-image.jpg";
import { Link } from "react-router-dom";

function Header() {
  const useStyles = makeStyles({
    flexHeader: {
      display: "flex",
      alignItems: "center",
      position: "fixed",
      right: "2%",
    },
  });

  const classes = useStyles();
  return (
    <div className="App">
      <Box className="header-items">
        <List className={classes.flexHeader}>
          <p className="header-logo">MDB</p>
          <ShoppingCartIcon />
          <ListItem>
            <Link to="/admin">
              {" "}
              <Button>Admin Panel</Button>
            </Link>
          </ListItem>
          <ListItem>
            <Button>Shop</Button>
          </ListItem>
          <ListItem>
            <Button>Contact</Button>
          </ListItem>
          <ListItem>
            <Button>Sign in</Button>
          </ListItem>
          <ListItem>
            <Button className="sign-up-but">SIGN UP</Button>
          </ListItem>
        </List>
        <Box className="shopCont">
          <p>Shop</p>
        </Box>
        <CardMedia component="img" height="400" width="100" image={Image} />
      </Box>
    </div>
  );
}

export default Header;
