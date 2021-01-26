import React, { useState, useEffect } from 'react';
import { createPostRequest } from '../Fetch';

import { Box, MenuItem, Button, Dialog } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';

//Carga de estilo

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      width: '25ch',
    },
  },
  box: {
    width: '40vw',
    Box: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
}));

//Registro


function Registro(props) {
  const classes = useStyles();
  console.log('props registro: ', props);
  const [registro, setRegister] = useState();
  let token = props.action.state.statReducer.user.token;

  //Arreglar porque no muestra bien los registros
  const loadRegister = () => {
    console.log('load register:', registro);
    if (registro !== undefined && registro.length > 0) {
      return registro.map((a) => (
        <Box key={a._id} className={classes.box}>
           <h4>{new Date(a.created_at).toLocaleDateString('en-GB')}</h4>
           <p>{a.description}</p>
           <Divider />
         </Box>))
    } else {
      return <Box>No hay registros aun.</Box>;
    }
  };

  async function fetchRegistros() {
    let urlAPI =
      'https://manejo-equipos-api.herokuapp.com/api/v1/register/getAllRegister';

    const myInitPost = {
      method: 'POST',
      body: JSON.stringify({ idEquipment: props.rowData.id }),
      headers: {
        'Content-Type': 'application/json',
        token,
      },
    };

    //Configuracion de request
    let myRequest = new Request(urlAPI, myInitPost);

    await fetch(myRequest)
      .then((res) => res.json())
      .then((data) => {
        console.log('data fetch:', data);
        setRegister(data.data);
      })
      .catch((e) =>
        console.log({
          Status: 'ERROR_FETCH',
          message: 'Error en el proceso',
          text: e,
        })
      );
  }

  useEffect(() => {
    fetchRegistros();
  }, [props.ruta == 'REGISTER']);

  return (
    <Dialog
      open={props.open}
      onClose={() => props.setRuta('')}
      aria-labelledby="simple-dialog-title"
    >
      <div className={classes.root}>
        {loadRegister()}
      </div>
    </Dialog>
  );
}

export default Registro;
