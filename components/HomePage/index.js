import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { style } from './style';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const useStyle = makeStyles(style);

function Home() {
  const classes = useStyle();

  return (
    <Fragment>
      <AppBar>
        <Toolbar>
          <Link to="/login"> 
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<AccountCircleIcon />}
            >
              Iniciar sesión
            </Button>
          </Link>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm">

          
      </Container>
    </Fragment>
  );
}

export default Home;
