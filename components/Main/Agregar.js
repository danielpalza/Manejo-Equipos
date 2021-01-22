import React, { useState } from 'react';
import { createPostRequest } from '../Fetch';
import range from 'lodash/range';
import {
  TextField,
  MenuItem,
  Button,
  Dialog,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

//Carga de datos de la lista
//Recibir la fecha
let d = new Date();

// Arreglar para que los dates sean exactos, con años bisiestos y cantidad de dias en los meses exactos
const mesArray = range(1, 13);
const diaArray = range(1, 32);
const añoArray = range(1940, d.getFullYear() + 1);

//Carga de estilo

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      width: '25ch',
    },
  },
}));

//Funcion agregar

function Agregar(props) {
  const classes = useStyles();
  const [product, setProduct] = useState({
    model: '',
    id: '',
    serie: '',
    marca: '',
    mes: '',
    año: '',
    dia: '',
  });

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const AgregarEquipo = () => {
    const body = {
      ...product,
      fechaIngreso: `${product.dia}/${product.mes}/${product.año}`,
    };
    createPostRequest(
      'equipment/createEquipment',
      props.action.state.statReducer.user.token,
      body,
      {}
    );
    props.action.equipAdd(body);
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
          id="filled-basic"
          name="model"
          label="Modelo"
          variant="filled"
          onChange={handleChange}
        />
        <TextField
          id="filled-basic"
          name="id"
          label="ID"
          variant="filled"
          onChange={handleChange}
        />
        <TextField
          id="filled-basic"
          name="serie"
          label="N° Serie"
          variant="filled"
          onChange={handleChange}
        />
        <TextField
          id="filled-basic"
          name="marca"
          label="Marca"
          variant="filled"
          onChange={handleChange}
        />
      </div>
      <div className={classes.root}>
        <TextField
          id="standard-select-dia"
          select
          name="dia"
          label="Dia"
          value={product.dia}
          onChange={handleChange}
          helperText="Seleccione el dia"
        >
          {diaArray.map((e) => (
            <MenuItem key={e} value={e}>
              {e}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="standard-select-mes"
          select
          name="mes"
          label="Mes"
          value={product.mes}
          onChange={handleChange}
          helperText="Seleccione el mes"
        >
          {mesArray.map((e) => (
            <MenuItem key={e} value={e}>
              {e}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="standard-select-año"
          select
          name="año"
          label="Año"
          value={product.año}
          onChange={handleChange}
          helperText="Seleccione el año"
        >
          {añoArray.map((e) => (
            <MenuItem key={e} value={e}>
              {e}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div className={classes.root}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={AgregarEquipo}
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

export default Agregar;
