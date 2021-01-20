import React from 'react';
import {  
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
  },
}));

const ListNavbar = (props) => {
  const classes = useStyles();
    
  return (
    <div className={classes.root}>
      
       
      <List>
        <ListItem button onClick={()=>props.handleRoute("INICIO")}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Inicio" />
        </ListItem>

        <ListItem button onClick={()=>props.handleRoute("AGREGAR")}>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary="Agregar" />
        </ListItem>

        <ListItem button onClick={()=>props.handleRoute("OUT")}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Cerrar sesion" />
        </ListItem>
      </List>
    </div>
  );
};

export default ListNavbar;
