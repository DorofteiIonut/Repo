import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Welcome from "../pages/Welcome/index";
import Login from "../pages/Login/index";
import Medici from "../pages/Medici/index";
import Cabinete from "../pages/Cabinete/index";
import SignUp from "../pages/SignUp/index";
import RecMedici from "../pages/RecMedici/index";
import Programari from "../pages/Programari/index";

const Routes = () => (
  <BrowserRouter>
  <Switch>
    <Route exact path='/' component={Welcome} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/medici' component={Medici} />
    <Route exact path='/cabinete' component={Cabinete} />
    <Route exact path='/signUp' component={SignUp} />
    <Route exact path='/recmedici' component={RecMedici} />
    <Route exact path='/programari' component={Programari} />
    </Switch>
  </BrowserRouter>
);

export default Routes;