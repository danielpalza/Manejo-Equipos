import React, { useState } from 'react';
import { createPostRequest } from '../Fetch';

import {
  TextField,
 
  Button,
  Dialog,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';


//Carga de estilo

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      width: '25ch',
    },
    
  },
  textfield:{
    width: "30vw"
  }
}));

//Funcion agregar

function AgregarRegistro(props) {
  const classes = useStyles();
  const [registro, setRegistro] = useState()

  const handleChange = (event) => {
    setRegistro( event.target.value);
  };

  const AgregarRegistro = () => {
    const body = {"description":registro, idEquipment:props.rowData.id};

    createPostRequest(
      'register/createRegister',
      props.action.state.statReducer.user.token,
      body,
      {}
    );
  
    props.setRuta('');
  };

  return (
    <Dialog
      open={props.open}
      onClose={() => props.setRuta('')}
      aria-labelledby="simple-dialog-title"
    >
      <div className={classes.root}>
       
        <TextField 
          className={classes.textfield}
          id="filled-multiline-static"
          multiline
          rows={5}
          name="registro"
          label="Registro"
          variant="filled"
          onChange={handleChange}
        />
      </div>
      
      <div className={classes.root}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={AgregarRegistro}
        >
          Agregar
        </Button>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
          onClick={() => props.setRuta('')}
        >
          Cancelar
        </Button>
      </div>
    </Dialog>
  );
}

export default AgregarRegistro;
