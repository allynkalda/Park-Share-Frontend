import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

function PrivateRoute({ component: Component, isLoggedin, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
      // changed redirect to login
        isLoggedin ? <Component {...props} /> : <Redirect to="/logout" />
      }
    />
  );
}

export default withAuth(PrivateRoute);
