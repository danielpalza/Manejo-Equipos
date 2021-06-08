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
          <Link to="/login">
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
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          pharetra risus sapien, nec tempus erat ornare a. Phasellus tempus urna
          id ante varius ullamcorper. Proin eros purus, tincidunt condimentum
          facilisis ac, semper quis nunc. Praesent condimentum imperdiet tellus
          eu porttitor. Nam eu bibendum magna, ac volutpat ligula. Vivamus non
          ultricies lorem. Duis ut aliquam enim. Ut id pulvinar nulla.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. In mattis quam at nunc dignissim egestas.
          Aliquam erat volutpat. Cras egestas eros nisl, id interdum sapien
          malesuada non. Aenean velit tellus, fermentum sit amet ex pulvinar,
          accumsan consectetur risus. Phasellus consectetur vel nisi eget
          imperdiet. Fusce massa nulla, facilisis ut elementum ac, consequat a
          diam. Mauris pharetra ex non tellus euismod interdum. Proin eu quam
          purus. Nunc euismod tempus neque ut molestie. Fusce ullamcorper ante
          ligula, sed semper dolor faucibus ut. Nullam sit amet sodales metus,
          at mollis ipsum. Praesent sed pulvinar urna. Donec posuere, massa at
          iaculis suscipit, quam nibh tincidunt ipsum, non hendrerit augue dui
          non arcu. Quisque tempus neque in sem tincidunt, ut aliquam odio
          congue. Pellentesque suscipit augue turpis, et dapibus libero
          porttitor at. Donec suscipit, nisi eget pharetra molestie, ex nunc
          gravida urna, et mattis diam nunc nec lorem. Suspendisse justo ipsum,
          finibus eu ex sit amet, tincidunt feugiat justo. Vivamus egestas,
          sapien non interdum bibendum, risus enim tincidunt nunc, quis
          vestibulum metus orci eu urna.
        </Typography>
        <Box className={classes.box}>
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            interval={3000}
            showThumbs={false}
            showStatus={false}
          >
            <div>
              <img src={imagen1} className={classes.img} />
              
            </div>
            <div>
              <img src={imagen2} className={classes.img}/>
              
            </div>
            <div>
              <img src={imagen3} className={classes.img}/>
             
            </div>
            <div>
              <img src={imagen4} className={classes.img}/>
             
            </div>
            <div>
              <img src={imagen5} className={classes.img}/>
             
            </div>
          </Carousel>
        </Box>
      </Container>
    </Fragment>
  );
}

export default Home;
