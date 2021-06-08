import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from '../jsonMUI/materialConfig';
import { connect } from 'react-redux';
import { mapStateToProps } from '../store/stats/reducer';
import Login from './Login/Login';
import Main from './Main/Main.js';
import Home from "./HomePage"
import ProtectedRoute from "./ProtectedRoute"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App(props) {
  const logged = props.state.statReducer.logged;

  return (
    <React.Fragment>
      <ThemeProvider theme={Theme}>
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <ProtectedRoute path="/main">
              <Main />
            </ProtectedRoute>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
        {/*logged ? <Main /> : <Login />*/}
      </ThemeProvider>
    </React.Fragment>
  );
}

export default connect(mapStateToProps)(App);
