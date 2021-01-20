import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import {createPostRequest} from "../Fetch";
import { makeStyles, Button } from '@material-ui/core';


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
  console.log("props :", props)
  const classes = useStyles();

  const BorrarEquipo = () => {
   createPostRequest("equipment/deleteEquipment",props.action.state.statReducer.user.token, {_id:props.rowData._id}, {})
   props.action.equipDelete(props.rowData._id)
   props.setRuta("")

  };

  return (
  <Dialog open={props.open} onClose={()=> props.setRuta("")} aria-labelledby="simple-dialog-title" >
    <DialogTitle id="simple-dialog-title">¿Seguro quiere borrar este equipo?</DialogTitle>
      <div className={classes.boxDialog}>
        <Button className={classes.button} variant="outlined" color="secondary" onClick={()=> BorrarEquipo()} startIcon={<DeleteIcon />}>
          Borrar
        </Button>
        <Button className={classes.button} variant="outlined" color="primary" onClick={()=> props.setRuta("")} startIcon={<ClearOutlinedIcon />}>
          Cancelar
        </Button>
      </div>
  </Dialog>
  );
}

export default Delete
