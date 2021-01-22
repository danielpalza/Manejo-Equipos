import React, { useState } from 'react';
import { CssBaseline, Box } from '@material-ui/core';
import {useTheme, makeStyles } from '@material-ui/core/styles';
import Barra from './Barra';
import Caja from '../Navbar/Caja';
import Agregar from './Agregar';
import Table from './Table';
import { connect } from 'react-redux';
import { mapStateToProps } from '../../store/stats/reducer';
import { mapDispatchToProps } from '../../store/stats/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

function Main(props) {
  //Cambiar este guardado para poder usar el main sin redux, es para lo unico que lo precisa
  if (props.state.statReducer.user.token !== undefined) {
    localStorage.setItem('token', props.state.statReducer.user.token);
  }

  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const [ruta, setRuta] = useState('');

  //Metodos
  const handleRoute = (prop) => {
    setRuta(prop);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  //Mejorar el cierre de sesion
  const handleCloseSession = () => {
    localStorage.setItem('token', '');
    props.unLogin();
  };
  ruta === 'OUT' && handleCloseSession();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Barra handleDrawerOpen={handleDrawerOpen} val={open} />
      <Caja
        handleRoute={handleRoute}
        handleDrawerClose={handleDrawerClose}
        val={open}
      />
      <Box className={classes.content}>
        <Box className={classes.toolbar}></Box>
        <Box>
          <Table />
          <Agregar
            action={props}
            open={ruta === 'AGREGAR' ? true : false}
            setRuta={handleRoute}
          />
        </Box>
      </Box>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
