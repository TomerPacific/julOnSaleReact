import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Category from "./Category";
import Categories from "./Categories";

const Routes = props => {
  return (
    <Switch>
      <Route exact path={"/home"} render={() => <Categories {...props} />} />
      <Route exact path={"/categories/:categoryName"} render={() => <Category {...props} />} />
      <Route path="*" render={() => <Redirect to={"/home"} />} />
    </Switch>
  );
};

export default Routes;