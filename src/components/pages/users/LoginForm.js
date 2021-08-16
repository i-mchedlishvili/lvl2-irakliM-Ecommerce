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
import { FormStyles } from "./LoginFormStyles";
import { useAuth } from "../../../context/auth-context";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { set } from '../../../store/user'

function LoginForm() {
  
  const dispatch = useDispatch();
  const [state, setState] = useState({
    checkedB: false,
  });

  const { setAuth, auth } = useAuth();
  console.log(auth);
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      fetch("http://159.65.126.180/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw Error(res.text("error"));
          }
        })
        .then((json) => {
          //setAuth(json)
          localStorage.setItem("user", JSON.stringify(json));
          dispatch(set(json))
          history.push("/admin");
        })
        
    },
  });
  
  const classes = FormStyles();
  return (
    <>
     <Header />
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
