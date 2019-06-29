import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    marginTop: '-5px'
  },
}));

export default function InsetDividers() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <List className={classes.root}>
      <ListItem>
      <ListItemText ALIGN='justify' primary="-Refuerza el desarrollo ágil de software de la empresa." />
      </ListItem>
      <Divider style={{marginTop: '-10px', width: '100px'}} variant="inset" component="li" />
      <ListItem>
        <ListItemText ALIGN='justify' primary="-Minimiza el margen de error de tus sistemas." />
      </ListItem>
      <Divider style={{marginTop: '-10px'}} variant="inset" component="li" />
      <ListItem>
        <ListItemText ALIGN='justify' primary="-Alto nivel de estandarización de los componentes desarrollados." />
      </ListItem>
      <Divider style={{marginTop: '-10px'}} variant="inset" component="li" />
      <ListItem>
        <ListItemText ALIGN='justify' primary="-Facilita tu proceso de entrenamiento." />
      </ListItem>
      <Divider style={{marginTop: '-10px'}} variant="inset" component="li" />
      <ListItem>
        <ListItemText ALIGN='justify' primary="-Integración con diferentes tecnologías del mercado." />
      </ListItem>
    </List>
  );
}