import React, { useState, useEffect } from 'react';
import { makeStyles, Button, Box, Snackbar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import LoginBox from './LoginBox';
import RegisterBox from './RegisterBox';
import Fetch from '../Fetch';

import { connect } from 'react-redux';
import { mapStateToProps } from '../../store/stats/reducer';
import { mapDispatchToProps } from '../../store/stats/actions';

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3B3B54',
    height: '100vh',
    width: '100vw',
  },
  boxLogin: {
    backgroundColor: 'white',
    borderRadius: '.5vh',
  },
}));

function Login(props) {
  const [ruta, setRuta] = useState('LOGIN');
  const classes = useStyle();

  console.log('login props:', props);

  // Manejo de faltas
  function handleClick(text) {
    props.messageIn(text);
  }

  function userLoad(user) {
    if (
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        user.body.email
      )
    ) {
      console.log('user:', user);
      console.log('props:', props);
      
      //agregar funcion, agregar url
      Fetch(url, "POST", action)

     
    } else {
      Window.alert("Email erroneo.")
    }
  }
  // crear funcion fetch y usarla en vez de esta
  async function readToken(token) {
    const myInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        token: token,
      },
    };

    await fetch('/api/v1/users/authToken', myInit)
      .then((res) => res.json())
      .then((data) => props.login(data))
      .catch((e) => {
        console.log({ Status: 'ERROR_TOKEN', message: e });
      });
  }
  useEffect(() => {
    localStorage.getItem('token') && readToken(localStorage.getItem('token'));
  }, []);

  return (
    <Box className={classes.root}>
      <Box className={classes.boxLogin}>
        {ruta === 'LOGIN' ? (
          <LoginBox
            
            userLoad={userLoad}
            setRuta={setRuta}
          />
        ) : (
          <RegisterBox
            
            userLoad={userLoad}
            setRuta={setRuta}
          />
        )}
      </Box>
    </Box>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);

//
