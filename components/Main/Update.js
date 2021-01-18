import React, { useState } from 'react';
import _ from 'lodash';
import { createPostRequest } from '../Fetch';
import {
  TextField,
  makeStyles,
  MenuItem,
  Button,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';

import Dialog from '@material-ui/core/Dialog';
import Edit from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

let d = new Date();

// Arreglar para que los dates sean exactos, con años bisiestos y cantidad de dias en los meses exactos
const mesArray = _.range(1, 13);
const diaArray = _.range(1, 32);
const añoArray = _.range(1940, d.getFullYear() + 1);

//acomodar los estilos en otra parte
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  box: {
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '0.5vw',
  },
  Dialog: {
    display: 'flex',
    justifyContent: 'center',
    padding: '0.5vw',

    margin: '0.3vw',
  },
  button: {
    margin: '0.3vw',
  },
}));

function Update(props) {
  console.log("props update:", props)
  const classes = useStyles();
  const [disabled, setDisabled] = useState(false);
  const [product, setProduct] = useState({
    marca: ``,
    model: ``,
    id: ``,
    serie: ``,
    mes:'',
    año:'',
    dia:''
  });
  
  const handleChange = (event) => {
    setProduct({...product, [event.target.name]: event.target.value})
   };
   

   //comprimir mas este metodo
  const ActualizarEquipo = () => {
    const state = {
      model: product.model === '' ? props.rowData.model : product.model,
      marca: product.marca === '' ? props.rowData.marca : product.marca,
      id: product.id === '' ? props.rowData.id : product.id,
      serie: product.serie === '' ? props.rowData.serie : product.serie,
      fechaEgreso: disabled ? `${product.dia}/${product.mes}/${product.año}` : '',
      _id: props.rowData._id,
      fechaIngreso: props.rowData.fechaIngreso
    };

    //Arreglar la action, no necesitaria pedir todo los equipos al server de vuelta, tal vez un post sin accion
    createPostRequest('equipment/updateEquipment', props.action.state.statReducer.user.token, state, {});
    props.action.equipEdit(state)

    props.setRuta('');
  };
  
  //Cambiar para que aparezca los datos actuales del equipo al momento de modificarlos
  return (
    <Dialog
      open={props.open}
      onClose={()=>props.setRuta("")}
      aria-labelledby="simple-dialog-title"
    >
      <div className={classes.root}>
        <TextField
          id="filled-basic"
          name="model"
          label="Modelo"
          variant="filled"
          onChange={handleChange}
          defaultValue={props.rowData.model}
        />
        <TextField
          id="filled-basic"
          name="id"
          label="ID"
          variant="filled"
          onChange={handleChange}
          defaultValue={props.rowData.id}
        />
        <TextField
          id="filled-basic"
          name="serie"
          label="Serie"
          variant="filled"
          onChange={handleChange}
          defaultValue={props.rowData.serie}
        />
        <TextField
          id="filled-basic"
          name="marca"
          label="Marca"
          variant="filled"
          onChange={handleChange}
          defaultValue={props.rowData.marca}
        />
      </div>

      <FormControlLabel
        className={classes.box}
        control={
          <Checkbox
            checked={disabled}
            onChange={() => setDisabled(!disabled)}
            name="checkedB"
            color="primary"
          />
        }
        label="¿El equipo esta retirado?"
      />
      <div className={classes.root}>
        <TextField
          disabled={!disabled}
          id="standard-select-dia"
          select
          name="dia"
          label="Dia"
          value={product.dia}
          onChange={handleChange}
          helperText="Seleccione el dia"
        >
          {diaArray.map((e) => (
            <MenuItem key={e.value} value={e.value}>
              {e.value}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          disabled={!disabled}
          id="standard-select-mes"
          select
          name="mes"
          label="Mes"
          value={product.mes}
          onChange={handleChange}
          helperText="Seleccione el mes"
        >
          {mesArray.map((e) => (
            <MenuItem key={e.value} value={e.value}>
              {e.value}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          disabled={!disabled}
          id="standard-select-año"
          select
          name="año"
          label="Año"
          value={product.año}
          onChange={handleChange}
          helperText="Seleccione el año"
        >
          {añoArray.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div className={classes.Dialog}>
        <Button
          className={classes.button}
          variant="outlined"
          color="primary"
          startIcon={<Edit />}
          onClick={() => ActualizarEquipo()}
        >
          Actualizar
        </Button>
        <Button
          className={classes.button}
          variant="outlined"
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

export default Update;
