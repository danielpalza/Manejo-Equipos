import { findLastIndex } from 'lodash-es';

export let style = (theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    textDecoration: 'none',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    
  },

  slider: {
    width: '50vw',
    height: '60vh',
    margin: '1vh',
    [theme.breakpoints.down('xs')]: {
      width: '90vw',
    },
  },
  image: {
    width: '50vw',
    height: '60vh',
  },
  box: {
    display: 'flex',
    margin: '3vh',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  text: {
    margin: '2vh',
  },

  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
});
