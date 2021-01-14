import React, { useState } from 'react';
import Fetch from '../Fetch';
import { connect } from 'react-redux';
import { mapStateToProps } from '../../store/stats/reducer';
import { mapDispatchToProps } from '../../store/stats/actions';
import { TextField, makeStyles, MenuItem, Button, Dialog } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';


//Carga de datos de la lista
//Recibir la fecha 
const añoActual = 2020;
const mesArray = [
  { value: '1', label: 'Enero' },
  { value: '2', label: 'Febrero' },
  { value: '3', label: 'Marzo' },
  { value: '4', label: 'Abril' },
  { value: '5', label: 'Mayo' },
  { value: '6', label: 'Junio' },
  { value: '7', label: 'Julio' },
  { value: '8', label: 'Agosto' },
  { value: '9', label: 'Septiembre' },
  { value: '10', label: 'Octubre' },
  { value: '11', label: 'Noviembre' },
  { value: '12', label: 'Diciembre' },
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

  const AgregarEquipo = () => {
    const state = {
      body: { ...product, fechaIngreso: `${dia}/${mes}/${año}` },
      use: ['equipment', 'createEquipment'],
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
      <div className={classes.root}>
        <TextField
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
              {e.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
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
          onClick={HandleRoute}
        >
          Cancelar
        </Button>
      </div>
    </Dialog>
  );
}

export default Agregar
