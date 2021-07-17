import React from "react";
import "./App.css";
import ItemLayout from "./components/Items/ItemLayout";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import { PRODUCT_LIST, SINGLE_ITEM, USERS, HOME, CATEGORIE } from "./components/routes";

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
      </Switch>
    </Router>
  );
}

export default App;
