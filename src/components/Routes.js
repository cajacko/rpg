import * as React from "react";
import { Switch, Route } from "react-router-dom";

const withRoute = (props, Component) => rProps => (
  <Component {...rProps} {...props} />
);

const Routes = ({ routes, ...props }) => (
  <Switch>
    {routes.map(({ component, ...route }) => (
      <Route
        key={route.path || ""}
        render={withRoute(props, component)}
        {...route}
      />
    ))}
  </Switch>
);

export default Routes;
