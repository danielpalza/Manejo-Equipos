import React from 'react';
import { authRequest } from '../Fetch';
import { Route } from 'react-router-dom';

function ProtectedRoute({ children, ...rest }) {
  //let auth = useAuth();
  console.log('token: ', localStorage.getItem('token'));
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem('token').length > 0) {
          authRequest(localStorage.getItem('token')) ? (
            children
          ) : (
            <Redirect to="/" />
          );
        }
      }}
    />
  );
}

export default ProtectedRoute;
