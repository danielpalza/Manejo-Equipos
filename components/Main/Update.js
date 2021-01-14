import React, { useState, useEffect } from 'react';
import Fetch from '../Fetch';
import { connect } from 'react-redux';
import { mapStateToProps } from '../../store/stats/reducer';
import { mapDispatchToProps } from '../../store/stats/actions';
import {
  TextField,
  makeStyles,
  MenuItem,
  Button,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Edit from '@material-ui/icons/Edit';

import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

//mejorar el procesado de este formulario
const añoActual = 2020;

const mesArray = [
  { value: 'Enero' },
  { value: 'Febrero' },
  { value: 'Marzo' },
  { value: 'Abril' },
  { value: 'Mayo' },
  { value: 'Junio' },
  { value: 'Julio' },
  { value: 'Agosto' },
  { value: 'Septiembre' },
  { value: 'Octubre' },
  { value: 'Noviembre' },
  { value: 'Diciembre' },
];

let arr = [];
for (let i = 1; i < 32; i++) {
  arr.push({ value: `${i}` });
}
const diaArray = arr;

arr = [];
for (let i = 1940; i <= añoActual; i++) {
  arr.push({ value: `${i}` });
}
const añoArray = arr;

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
  const classes= useStyles()
  const [disabled, setDisabled] = useState(false);
  const [product, setProduct] = useState({
    model: '',
    id: '',
    serie: '',
  });
  const [mes, setMes] = useState('Enero');
  const [año, setAño] = useState('2020');
  const [dia, setDia] = useState('1');

  //debe agregar un equipo

  const handleChange = (event) => {
    event.target.name === 'Dia' && setDia(event.target.value);
    event.target.name === 'Mes' && setMes(event.target.value);
    event.target.name === 'Año' && setAño(event.target.value);
    event.target.name === 'Modelo' &&
      setProduct({ ...product, model: event.target.value });
    event.target.name === 'ID' &&
      setProduct({ ...product, id: event.target.value });
    event.target.name === 'Serie' &&
      setProduct({ ...product, serie: event.target.value });
  };

  const HandleRoute = () => {
    props.setRuta('');
  };

  const ActualizarEquipo = () => {

    const state = {
      body: {
        model:product.model===""?props.rowData.model:product.model,
        id:product.id===""?props.rowData.id:product.id,
        serie:product.serie===""?props.rowData.serie:product.serie,
        fechaEgreso: disabled ? `${dia}/${mes}/${año}` : '',
        _id: props.rowData._id,
      },
      use: ['equipment', 'updateEquipment'],
      mod: 'POST',
      token: props.action.state.statReducer.user.token,
      action: 'MESSAGE_IN',
    };
    props.action.loadBody(state);
    props.action.fetchTrue();
    props.action.reloadTrue();
    HandleRoute();
  };

  return (
    <Dialog
      open={props.open}
      onClose={HandleRoute}
      aria-labelledby="simple-dialog-title"
    >
      <div className={classes.root}>
        <TextField
          id="filled-basic"
          name="Modelo"
          label="Modelo"
          variant="filled"
          onChange={handleChange}
          defaultValue={product.model}
        />
        <TextField
          id="filled-basic"
          name="ID"
          label="ID"
          variant="filled"
          onChange={handleChange}
        />
        <TextField
          id="filled-basic"
          name="Serie"
          label="Serie"
          variant="filled"
          onChange={handleChange}
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
          name="Dia"
          label="Dia"
          value={dia}
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
          name="Mes"
          label="Mes"
          value={mes}
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
          name="Año"
          label="Año"
          value={año}
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
          onClick={() => HandleRoute()}
        >
          Cancelar
        </Button>
      </div>
    </Dialog>
  );
}

export default Update;
