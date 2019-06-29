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
  },
}));

export default function InsetDividers() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <List className={classes.root}>
      <ListItem>
      <ListItemText ALIGN='justify' primary="-Implementación en tiempo real de soluciones informáticas para cubrir los objetivos de tu negocio." />
      </ListItem>
      <Divider style={{marginTop: '-10px'}} variant="inset" component="li" />
      <ListItem>
        <ListItemText ALIGN='justify' primary="-Agrega valor a tu negocio con los metadatos de las soluciones implementadas con Orchesta, serán tus nuevos activos tecnológicos." />
      </ListItem>
    </List>
  );
}