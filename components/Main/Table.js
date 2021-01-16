import React, { forwardRef, useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import Delete from './Delete';
import Update from './Update';
import { makeStyles, IconButton } from '@material-ui/core';
import { connect } from 'react-redux';
import { mapStateToProps } from '../../store/stats/reducer';
import { mapDispatchToProps } from '../../store/stats/actions';

import {DeleteOutline} from '@material-ui/icons/DeleteOutline';
import {Edit} from '@material-ui/icons/Edit';

import {createGetRequest} from "../Fetch"

import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

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
  };
  

  let columns = [
    { title: 'Modelo', field: 'model' },
    { title: 'Id', field: 'id' },
    { title: 'N° Serie', field: 'serie', type: 'numeric' },
    {
      title: 'Fecha ingreso',
      field: 'fechaIngreso',
    },
    {
      title: 'Fecha egreso',
      field: 'fechaEngreso',
    },
  ];

  let data = props.state.statReducer.equipments;

  useEffect(() => {
    createGetRequest("equipment/getAllEquipment", props.state.statReducer.user.token, props.equipLoad )
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
          icon:"delete",
          tooltip: 'Borrar',
          onClick: (event,rowData) => handleAction(rowData, "DELETE"),
        },
        {
          icon:"edit",
          tooltip: 'Editar',
          onClick: (event,rowData) => handleAction(rowData, "UPDATE"),
        }
      ]}
      />
      <div>
        <Update rowData={rowData} action={props} open={ruta==="UPDATE"?true:false} setRuta={setRuta} />
        <Delete rowData={rowData} action={props} open={ruta==="DELETE"?true:false} setRuta={setRuta} />

      </div>
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Table);
//
