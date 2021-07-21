import React from "react";
import "./App.css";
import ItemLayout from "./components/Items/ItemLayout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import {
  PRODUCT_LIST,
  SINGLE_ITEM,
  USERS,
  HOME,
  CATEGORIE,
  ADMIN,
  SIGN_IN,
  REGISTER
} from "./components/routes";
import AdminPanel from "./components/pages/AdminPanel";
import LoginForm from "./components/pages/users/LoginForm";
import RegisterForm from "./components/pages/users/RegisterForm";



export function Users() {
  return <div>users</div>;
}

export function Categories() {
  return <div>categories</div>;
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={HOME}>
          <Home />
        </Route>
        <Route path={SINGLE_ITEM}>
          <ItemLayout />
        </Route>
        <Route path={PRODUCT_LIST}>
          <Products />
        </Route>
        <Route path={USERS}>
          <Users />
        </Route>
        <Route path={CATEGORIE}>
          <Categories />
        </Route>
        <Route path={ADMIN}>
          <AdminPanel />
        </Route>
        <Route path={SIGN_IN}>
          <LoginForm />
        </Route>
        <Route path={REGISTER}>
          <RegisterForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
