import React, { forwardRef, useState, useEffect } from 'react';
import MaterialTable from "@material-table/core";
import Delete from './Delete';
import Update from './Update';
import Registro from './Registro';
import AgregarRegistro from './AgregarRegistro';

import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { mapStateToProps } from '../../store/stats/reducer';
import { mapDispatchToProps } from '../../store/stats/actions';

import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import Add from '@material-ui/icons/Add';
import Assignment from '@material-ui/icons/Assignment';

import { createGetRequest } from '../Fetch';

const useStyle = makeStyles((theme) => ({
  root: {
    width: '80vw',
  },
}));

function Table(props) {
  const classes = useStyle();
  const [ruta, setRuta] = useState('');
  const [rowData, setRowData] = useState({});

  //Icons
  const tableIcons = {
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Add: forwardRef((props, ref) => <Add {...props} ref={ref} />),
    Assignment: forwardRef((props, ref) => <Assignment {...props} ref={ref} />),
  };

  let columns = [
    { title: 'Marca', field: 'marca' },
    { title: 'Modelo', field: 'model' },
    { title: 'Id', field: 'id' },
    { title: 'N° Serie', field: 'serie', type: 'numeric' },
    {
      title: 'Fecha de ingreso',
      field: 'fechaIngreso',
    },
    {
      title: 'Fecha de egreso',
      field: 'fechaEgreso',
    },
  ];

  let data = props.state.statReducer.equipments;

  useEffect(() => {
    createGetRequest(
      'equipment/getAllEquipment',
      props.state.statReducer.user.token,
      props.equipLoad
    );
  }, []);

  //Revisar la tabla para ver como funciona y mejorarlo, es un desastre

  function handleAction(data, action) {
    setRowData(data);
    setRuta(action);
  }

  return (
    <div className={classes.root}>
      <MaterialTable
        title=""
        columns={columns}
        data={data}
        icons={tableIcons}
        actions={[
          {
            icon: 'delete',
            tooltip: 'Borrar',
            onClick: (event, rowData) => handleAction(rowData, 'DELETE'),
          },
          {
            icon: 'edit',
            tooltip: 'Editar',
            onClick: (event, rowData) => handleAction(rowData, 'UPDATE'),
          },
          {
            icon: 'add',
            tooltip: 'Agregar',
            onClick: (event, rowData) => handleAction(rowData, 'ADD'),
          },
          {
            icon: 'assignment',
            tooltip: 'Registros',
            onClick: (event, rowData) => handleAction(rowData, 'REGISTER'),
          },
        ]}
      />
      <div>
        <Update
          rowData={rowData}
          action={props}
          open={ruta === 'UPDATE' ? true : false}
          setRuta={setRuta}
        />
        <Delete
          rowData={rowData}
          action={props}
          open={ruta === 'DELETE' ? true : false}
          setRuta={setRuta}
        />
        <Registro
          rowData={rowData}
          action={props}
          open={ruta === 'REGISTER' ? true : false}
          ruta={ruta}
          setRuta={setRuta}
        />
        <AgregarRegistro
          rowData={rowData}
          action={props}
          open={ruta === 'ADD' ? true : false}
          
          setRuta={setRuta}
        />
        
      </div>
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Table);
//
