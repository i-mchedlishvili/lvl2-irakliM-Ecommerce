import React, { useState } from "react";
import { Button, Box, List, ListItem, CardMedia } from "@material-ui/core";
import { useFormik, FormikProvider, Field } from "formik";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { makeStyles, Typography } from "@material-ui/core/";
import Header from "../../../components/Layout/Header";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "../../../App.css";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FooterTop from "../../Layout/FooterTop";
import Footer from "../../Layout/Footer";
import FooterCopyright from "../../Layout/FooterCopyright";

const FormStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 500,
    display: "block",
    margin: "0 auto",
    paddingTop: 100,
  },
  flexHeader: {
    display: "flex",
    alignItems: "center",
    position: "fixed",
    right: "2%",
  },
  input: {
    width: 500,
    height: 38,
    marginBottom: 30,
    paddingLeft: 7,
    outline: "none",
    borderRadius: 4,
  },
  checkbox: {
    marginBottom: 18,
    color: "gray",
  },
  button: {
    display: "block",
    margin: "0 auto",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
});

function LoginForm() {
  const [state, setState] = useState({
    checkedB: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      fetch("https://fakestoreapi.com/users", {
        method: "POST",
        body: JSON.stringify({
          email: formik.values.email,
          password: formik.values.password,
        }),
      })
        .then((res) => res.json())
        .then((json) => console.log(json));
    },
  });
  console.log(formik.values);
  const classes = FormStyles();
  return (
    <>
      <Box className="signIn">
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
            <Button>
              <Link to="/signIn"> Sign in </Link>
            </Button>
          </ListItem>
          <ListItem>
            <Button className="sign-up-but">
              <Link to="/register">SIGN UP</Link>
            </Button>
          </ListItem>
        </List>
      </Box>
      <Box>
        <Typography variant="h4" align="center" component={Box} p={5}>
          Sign in
        </Typography>
      </Box>

      <FormikProvider value={formik}>
        <form className={classes.root} onSubmit={formik.handleSubmit}>
          <Field
            className={classes.input}
            name="email"
            id="email"
            placeholder="Your email"
          />

          <Field
            className={classes.input}
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Your password"
          />

          <FormControlLabel
            className={classes.checkbox}
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="REMEMBER ME"
          />

          <Button
            display="block"
            variant="contained"
            color="primary"
            type="submit"
            className={classes.button}
          >
            SIGN IN
          </Button>
        </form>
      </FormikProvider>
      <Box display="flex" alignItems="center" mt={3} flexDirection="column">
        <Typography component={Box} pb={2}>
          Not a member?{" "}
          <span>
            {" "}
            <Link to="/register">Register</Link>{" "}
          </span>
        </Typography>
        <Typography component={Box} pb={2}>
          or sign in with:
        </Typography>
        <Box>
          <FacebookIcon />
          <TwitterIcon />
          <LinkedInIcon />
          <GitHubIcon />
        </Box>
      </Box>
      <FooterTop />
      <Footer />
      <FooterCopyright />
    </>
  );
}

export default LoginForm;
