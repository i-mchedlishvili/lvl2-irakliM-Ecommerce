import React from "react";
import "./App.css";
import ItemLayout from "./components/Items/ItemLayout";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";

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
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/item/:id?">
          <ItemLayout />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
