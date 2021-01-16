import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from '../jsonMUI/materialConfig';
import { connect } from 'react-redux';
import { mapStateToProps } from '../store/stats/reducer';
import Login from './Login/Login';
import Main from './Main/Main.js';

function App(props) {
  const logged = props.state.statReducer.logged;


//Cambiar "{logged ? <Main /> : <Login />}" para usar el router de react, mas seguro
  return (
    <React.Fragment>
      <ThemeProvider theme={Theme}>
        {logged ? <Main /> : <Login />}
      </ThemeProvider>
    </React.Fragment>
  );
}

export default connect(mapStateToProps)(App);
