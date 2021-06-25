import React from 'react';
import { authRequest } from '../Fetch';
import { Route } from 'react-router-dom';

function ProtectedRoute({ children, ...rest }) {
  console.log("token auth: ",localStorage.getItem("token"))
  return (
    <Route
      {...rest}
      render={() =>
        authRequest(localStorage.getItem("token")) ? (
          children
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}

export default ProtectedRoute;
