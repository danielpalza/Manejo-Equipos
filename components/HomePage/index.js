import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { style } from './style';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {
  AppBar,
  Toolbar,
  Box,
  Container,
  Button,
  IconButton,
  Typography,
} from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

import imagen1 from '../../images/1.jpg';
import imagen2 from '../../images/2.jpg';
import imagen3 from '../../images/3.jpg';
import imagen4 from '../../images/4.jpg';
import imagen5 from '../../images/5.jpg';

const useStyle = makeStyles(style);

function Home() {
  const classes = useStyle();

  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h4">Manejo de equipos</Typography>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              startIcon={<AccountCircleIcon />}
            >
              Iniciar sesión
            </Button>
          </Link>
        </Toolbar>
      </AppBar>

      <Container className={classes.box}>
        <Box >
          <Typography variant="h6">
            Logre una mejor organizacion de sus procesos de mantenimiento
          </Typography>
          <Typography variant="body1">
            Una manera de poder organizar el mantenimiento del inventario de
            equipamiento. Aproveche al maximo el tiempo que tiene, genere
            documentacion de los equipos que adquirieron mantenimiento , y
            planifique mejor sus tareas del dia.
          </Typography>
        </Box>
        <Box >
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            interval={3000}
            showThumbs={false}
            showStatus={false}
            className={classes.image}
          >
            <div>
              <img src={imagen1}  />
            </div>
            <div>
              <img src={imagen2}  />
            </div>
            <div>
              <img src={imagen3}  />
            </div>
            <div>
              <img src={imagen4} />
            </div>
            <div>
              <img src={imagen5}  />
            </div>
          </Carousel>
        </Box>
      </Container>
    </Fragment>
  );
}

export default Home;
