import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Welcome from "../pages/Welcome/index";
import Login from "../pages/Login/index";
import Medici from "../pages/Medici/index";

const Routes = () => (
  <BrowserRouter>
  <Switch>
    <Route exact path='/' component={Welcome} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/medici' component={Medici} />
    </Switch>
  </BrowserRouter>
);

export default Routes;