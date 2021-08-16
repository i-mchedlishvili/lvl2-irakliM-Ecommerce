import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

export const GuardedRoute = ({ children, ...rest }) => {
  //const auth = JSON.parse(localStorage.getItem("auth"));
  const user = useSelector((state) => state.user.user);
  return (
    <Route
      {...rest}
      // render={(props) => (
      //   auth ? <Component {...props} /> : <Redirect to="/signin" />
      // )}
    >
      {user ? children : <Redirect to="/signin" />}
    </Route>
  );
};
