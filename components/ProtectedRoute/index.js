import React from 'react'
import { authRequest} from '../Fetch';

function PrivateRoute({ children, ...rest }) {
    //let auth = useAuth();
    return (
      <Route
        {...rest}
        render={() =>
          authRequest(localStorage.getItem(token))? (
            children
          ) : (
            <Redirect
              to="/"
            />
          )
        }
      />
    );
  }

export default PrivateRoute;
