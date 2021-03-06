import {
  Box,
  Container,
  List,
  ListItem,
  makeStyles,
  Button,
  CardMedia,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import React from "react";
import "../App.css";
import Image from "../images/header-image.jpg";

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
      <Container maxWidth>
        <Box className="header-items">
          <List className={classes.flexHeader}>
            <p className="header-logo">MDB</p>
            <ShoppingCartIcon />
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
      </Container>
    </div>
  );
}

export default Header;
