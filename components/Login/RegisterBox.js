import React, { useState } from 'react';
import { makeStyles, TextField, Button, Box } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  boxText: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(1),
  },
}));

const RegisterBox = (props) => {
  const classes = useStyle();
  const [user, setUser] = useState({ email: '', password: '', confirmacion: '', name: '', lastName: ''});

  //Verificamos que las claves sean iguales
  const handleConfirmacion = () => {
    user.password === user.confirmacion && props.userLoad(user, 2);
    user.password !== user.confirmacion && Window.alert ("Las contraseñas no son iguales")
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
              email: e.target.value });
          }}
        />
      </Box>
      <Box display="flex">
        <Box className={classes.boxText} m={3}>
          <TextField
            id="standard-basic"
            color="primary"
            type="password"
            label="Contraseña"
            onChange={(e) => {
              setUser({
                ...user,
                password: e.target.value });
            }}
          />
        </Box>
        <Box className={classes.boxText} m={3}>
          <TextField
            id="standard-basic"
            color="primary"
            type="password"
            label="Confirmación"
            onChange={(e) => {
              setUser({
                ...user,
               confirmacion: e.target.value });
            }}
          />
        </Box>
      </Box>
      <Box display="flex">
        <Box className={classes.boxText} m={3}>
          <TextField
            id="standard-basic"
            color="primary"
            label="Nombre"
            onChange={(e) => {
              setUser({
                ...user,
               name: e.target.value });
            }}
          />
        </Box>
        <Box className={classes.boxText} m={3}>
          <TextField
            id="standard-basic"
            color="primary"
            label="Apellido"
            onChange={(e) => {
              setUser({
                ...user,
                lastName: e.target.value });
            }}
          />
        </Box>
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
            Registrar
          </Button>
        </Box>
        <Box m={2}>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            onClick={(e) => {
              props.setRuta('LOGIN');
            }}
          >
            Iniciar sesion
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default RegisterBox;
