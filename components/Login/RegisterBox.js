import React, { useState } from 'react';
import { TextField, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyle = makeStyles((theme) => ({
  boxText: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(1),
  },
}));

const RegisterBox = (props) => {
  const classes = useStyle();
  const [user, setUser] = useState({
    email: '',
    password: '',
    confirmacion: '',
    name: '',
    lastName: '',
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  //Mejorar esta verificacion
  const handleConfirmacion = () => {
    if (user.password == user.confirmacion) {
      if (Object.values(user).every((a) => a !== '')) {
        props.userLoad(user, 2);
        props.setRuta('LOGIN');
      } else {
        window.alert('Complete todos los campos');
      }
    } else {
      window.alert('Las contraseñas no son iguales');
    }
  };

  return (
    <div>
      <Box className={classes.boxText} m={3}>
        <TextField
          id="standard-basic"
          name="email"
          color="primary"
          label="Email"
          onChange={handleChange}
        />
      </Box>
      <Box display="flex">
        <Box className={classes.boxText} m={3}>
          <TextField
            id="standard-basic"
            color="primary"
            name="password"
            type="password"
            label="Contraseña"
            onChange={handleChange}
          />
        </Box>
        <Box className={classes.boxText} m={3}>
          <TextField
            id="standard-basic"
            color="primary"
            name="confirmacion"
            type="password"
            label="Confirmación"
            onChange={handleChange}
          />
        </Box>
      </Box>
      <Box display="flex">
        <Box className={classes.boxText} m={3}>
          <TextField
            id="standard-basic"
            color="primary"
            name="name"
            label="Nombre"
            onChange={handleChange}
          />
        </Box>
        <Box className={classes.boxText} m={3}>
          <TextField
            id="standard-basic"
            color="primary"
            name="lastName"
            label="Apellido"
            onChange={handleChange}
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
        <Box m={2}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button fullWidth={true} variant="contained" color="primary">
              Regresar
            </Button>
          </Link>
        </Box>
      </Box>
    </div>
  );
};

export default RegisterBox;
