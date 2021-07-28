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
import { createContext } from "react";
import { FormStyles } from "./RegisterFormStyles";

export const userContext = createContext();

function RegisterForm() {
  const [long, setLong] = useState(null);
  const [lat, setLat] = useState(null);

  const success = (position) => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    setLong(longitude);
    setLat(latitude);
  };

  const error = () => {
    console.log("error");
  };

  navigator.geolocation.getCurrentPosition(success, error);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    onSubmit: (values) => {
      fetch("http://159.65.126.180/api/register", {
        method: "POST",
        body: JSON.stringify({
          name: formik.values.name,
          email: formik.values.email,
          password: formik.values.password,
          password_confirmation: formik.values.password_confirmation,
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
          Sign up
        </Typography>
      </Box>

      <FormikProvider value={formik}>
        <div>
          <form onSubmit={formik.handleSubmit} className={classes.root}>
            <Field
              className={classes.input}
              type="name"
              id="name"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              placeholder="Your name"
            />

            <Field
              className={classes.input}
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              value={formik.values.email}
              onChange={formik.handleChange}
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

            <Field
              className={classes.input}
              type="password"
              id="passwordConfirmation"
              name="password_confirmation"
              onChange={formik.handleChange}
              value={formik.values.password_confirmation}
              placeholder="Your password"
            />

            <Button
              display="block"
              variant="contained"
              color="primary"
              type="submit"
              className={classes.button}
            >
              SIGN UP
            </Button>
          </form>
        </div>
      </FormikProvider>
      <Box display="flex" alignItems="center" mt={3} flexDirection="column">
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
export default RegisterForm;
