import React, { useState } from 'react';
import { TextField, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyle = makeStyles((theme) => ({
  boxText: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(3),
  },
}));

const LoginBox = (props) => {
  console.log('props login:', props);
  const classes = useStyle();
  const [user, setUser] = useState({ email: '', password: '' });

  // Manejo de faltas, pasar al login mayor

  const handleConfirmacion = () => {
    user.password.length === 0 && window.alert('Debe ingresar una contraseña');
    user.password.length > 0 && props.userLoad(user, 1);
  };

  return (
    <div>
      <Box className={classes.boxText} m={3}>
        <TextField
          id="standard-basic"
          color="primary"
          label="Email"
          onChange={(e) => {
            setUser({
              ...user,
              email: e.target.value,
            });
          }}
        />
      </Box>
      <Box className={classes.boxText} m={3}>
        <TextField
          id="standard-basic"
          color="primary"
          type="password"
          label="Contraseña"
          onChange={(e) => {
            setUser({
              ...user,
              password: e.target.value,
            });
          }}
        />
      </Box>
      <Box justifyContent="center" padding={2}>
        <Box m={2}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={(e) => {
              handleConfirmacion();
            }}
          >
            Iniciar sesion
          </Button>
        </Box>
        <Box m={2}>
          <Button
            fullWidth={true}
            variant="contained"
            color="secondary"
            onClick={(e) => {
              props.setRuta('REGISTER');
            }}
          >
            Registrar
          </Button>
          
        </Box>
        <Box m={2}>
        <Link to="/">
            <Button
              fullWidth={true}
              variant="contained"
              color="primary"
              
            >
              Regresar
            </Button>
          </Link>
        </Box>
      </Box>
    </div>
  );
};

export default LoginBox;
