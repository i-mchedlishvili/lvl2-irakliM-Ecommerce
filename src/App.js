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
import { AuthProvider } from "./context/auth-context";
import { GuardedRoute } from "./components/pages/users/guardedRoute";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, gamokleba } from './store/user'


export function Users() {
  return <div>users</div>;
}

export function Categories() {
  return <div>categories</div>;
}

function App() {
  // const count = useSelector((state) => state.counter.value)
  // const dispatch = useDispatch()
  return (
    <AuthProvider>
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
        <GuardedRoute path={ADMIN}>
          <AdminPanel />
        </GuardedRoute>
        <Route path={SIGN_IN}>
          <LoginForm />
        </Route>
        <Route path={REGISTER}>
          <RegisterForm />
        </Route>
      </Switch>
    </Router>
    </AuthProvider>
    // <div>
    //   <div>
    //     <button
    //       aria-label="Increment value"
    //       onClick={() => dispatch(incrementByAmount(5))}
    //     >
    //       Increment
    //     </button>
    //     <span>{count}</span>
    //     <button
    //       aria-label="Decrement value"
    //       onClick={() => dispatch(decrement())}
    //     >
    //       Decrement
    //     </button>
    //     <button
    //       aria-label="Decrement value"
    //       onClick={() => dispatch(gamokleba())}
    //     >
    //       5 gamokleba
    //     </button>
    //   </div>
    // </div>
  );
}

export default App;
