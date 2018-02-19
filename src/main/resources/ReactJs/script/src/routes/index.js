import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Welcome from "../pages/Welcome/index";
import Login from "../pages/Login/index"

const Routes = () => (
  <BrowserRouter>
  <Switch>
    <Route exact path='/' component={Welcome} />
    <Route exact path='/login' component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Routes;