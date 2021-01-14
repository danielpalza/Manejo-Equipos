import React,{ useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Fetch from '../Fetch';
import { connect } from 'react-redux';
import { mapStateToProps } from '../../store/stats/reducer';
import { mapDispatchToProps } from '../../store/stats/actions';
import { TextField, makeStyles, MenuItem, Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      width: '25ch',
    },
  },
  boxDialog:{
    display:"flex",
    justifyContent:"center",

    padding:"1vw"
  },
  button:{
    margin:"0.3vw"
  }
}));

function Delete(props) {
  const classes = useStyles();


  const handleClose=()=>{
    props.setRuta("")
  }

  const BorrarEquipo = () => {
    const state = {
      body: {_id:props.rowData._id},
      use: ['equipment', 'deleteEquipment'],
      mod: 'POST',
      token: props.action.state.statReducer.user.token,
      action: 'MESSAGE_IN',
    };
    props.action.loadBody(state)
    props.action.fetchTrue()
    props.action.reloadTrue()
    handleClose()

  };

  return (
  <Dialog open={props.open} onClose={handleClose} aria-labelledby="simple-dialog-title" >
    <DialogTitle id="simple-dialog-title">¿Seguro quiere borrar este elemento?</DialogTitle>
      <div className={classes.boxDialog}>
        <Button className={classes.button} variant="outlined" color="secondary" onClick={()=> BorrarEquipo()} startIcon={<DeleteIcon />}>
          Borrar
        </Button>
        <Button className={classes.button} variant="outlined" color="primary" onClick={()=> handleClose()} startIcon={<ClearOutlinedIcon />}>
          Cancelar
        </Button>
      </div>
  </Dialog>
  );
}

export default Delete
