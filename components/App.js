import React, {useEffect} from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from '../jsonMUI/materialConfig';
import { connect } from 'react-redux';
import { mapStateToProps } from '../store/stats/reducer';
import { mapDispatchToProps } from '../store/stats/actions';

import Login from './Login/Login';
import Main from './Main/Main.js';
import Home from './HomePage';
import ProtectedRoute from './ProtectedRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';
import { createGetRequest} from './Fetch';

function App(props) {
  const logged = props.state.statReducer.logged;
  console.log('props:', props);

  //Revisa que el token de la anterior sesion sea valido
  useEffect(() => {
    localStorage.getItem('token') &&
      createGetRequest(
        'users/authToken',
        localStorage.getItem('token'),
        props.login
      );
  }, []);

  return (
    <React.Fragment>
      <ThemeProvider theme={Theme}>
        <Router>
          <Switch>
            <Route path="/login">
              {logged ? <Redirect to="/main" /> : <Login />}
            </Route>
            <ProtectedRoute path="/main">
              <Main />
            </ProtectedRoute>
            <Route path="/">
              {logged ? <Redirect to="/main" /> : <Home />}
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default connect(mapStateToProps)(App);
