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
  nameInput: {
    width: 200,
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
  nameBoxStyle: {
    display: "flex",
    justifyContent: "space-between",
    marginRight: -12,
  },
});

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
      email: "",
      username: "",
      password: "",
      name: {
        firstname: "",
        lastname: "",
      },
      address: {
        city: "",
        street: "",
        number: "",
        zipcode: "",
      },
      phone: "",
    },
    onSubmit: (values) => {
      fetch("http://159.65.126.180/api/register", {
        method: "POST",
        body: JSON.stringify({
          email: formik.values.email,
          username: formik.values.username,
          password: formik.values.password,
          name: {
            firstname: formik.values.name.firstname,
            lastname: formik.values.name.lastname,
          },
          address: {
            city: formik.values.address.city,
            street: formik.values.address.street,
            number: formik.values.address.number,
            zipcode: formik.values.address.zipcode,
            geolocation: {
              lat: lat,
              long: long,
            },
          },
          phone: formik.values.phone,
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
                type="firstname"
                id="firstname"
                name="name.firstname"
                onChange={formik.handleChange}
                value={formik.values.name.firstname}
                placeholder="First name"
              />

              

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
