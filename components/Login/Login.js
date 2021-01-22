import React, { useState, useEffect } from 'react';
import {  Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import LoginBox from './LoginBox';
import RegisterBox from './RegisterBox';
import { createGetRequest, requestLoginRegister} from '../Fetch';

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

  //Cambiar "ruta" para usar el router de react
  const [ruta, setRuta] = useState('LOGIN');

  const classes = useStyle();

  console.log('login props:', props);
  
  //Revisa que el token de la anterior sesion sea valido
  useEffect(() => {
    localStorage.getItem('token') && createGetRequest("users/authToken", localStorage.getItem('token'), props.login );
  }, []);

  //Verifica el email y hace el pedido
  function userLoad(user, dir) {
    if (
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        user.email
      )) {
     
      //solucionar
      if(dir==1)requestLoginRegister("users/login", user, props.login)
      if(dir==2)requestLoginRegister("users/createUser", user )

    
    } else {
      Window.alert("Email erroneo.")
    }
  }

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
