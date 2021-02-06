import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Category from "./Category";
import Home from "./Home";

const Routes = props => {
  return (
    <Switch>
      <Route exact path={"/home"} render={() => <Home {...props} />} />
      <Route exact path={"/categories/:categoryName"} component={Category} />
      <Route path="*" render={() => <Redirect to={"/home"} />} />
    </Switch>
  );
};

export default Routes;
