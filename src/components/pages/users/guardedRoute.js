import React from "react";
import { Route, Redirect } from "react-router-dom";

export const GuardedRoute = ({ children, ...rest }) => {
  const auth = JSON.parse(localStorage.getItem("auth"));
  return (
    <Route
      {...rest}
      // render={(props) => (
      //   auth ? <Component {...props} /> : <Redirect to="/signin" />
      // )}
    >
      {auth ? children : <Redirect to="/signin" />}
    </Route>
  );
};
