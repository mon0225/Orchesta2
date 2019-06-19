import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Ventajas from './ventajas'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    fontSize: '100px',
    xs: 2, 
    sm: 3, 
    md: 4
  },
  icon: {
    margin: theme.spacing(2),
  },
  iconHover: {
    margin: theme.spacing(2),
    '&:hover': {
     
    },
  },
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <div style={{ xs: 2, sm: 3, md: 4}}>
      <Paper item xs={6} style={{fontFamily: 'Montserrat', marginLeft: '200px', marginRight:'200px', marginTop: '30px', marginBottom: '10px'}} className={classes.root}>
        <Typography style={{fontFamily: 'montserrat', marginBottom: '-80px'}} variant="h4" component="h4">
            Glosario
        </Typography>
        <br/>
        <i className="material-icons">
          import_contacts
        </i>
        <br/>
        <Typography style={{fontFamily: 'montserrat'}} component="p">
          Aplicación diseñada como herramienta para el usuario en la creación de nuevas páginas web generadas con un diseño preestablecido en un tiempo de elaboración reducido, integrada por una serie de instrucciones de fácil seguimiento para la automatización de contenidos y diseño final.
        </Typography>
      </Paper>
      
      <Paper style={{fontFamily: 'Montserrat', marginLeft: '200px', marginRight:'200px', marginTop: '30px', marginBottom: '10px'}} className={classes.root}>
      <Typography style={{fontFamily: 'montserrat', marginBottom: '-80px'}} variant="h4" component="h4">
          Objetivo
      </Typography>
      <br/>
      <i class="material-icons" style={{fontSize: '130px', color: 'rgba(0, 0, 0, 0.54)'}}>
        tab_unselected
      </i>
      <br/>
      <Typography style={{fontFamily: 'montserrat'}} component="p">
        Elaboración de páginas electrónicas en un tiempo de producción minimo, de fácil uso para usuarios con conocimientos básicos en el tema e integrador de código para programadores con un ahorro en el tiempo de trabajo. 
      </Typography>
    </Paper>

      <Paper style={{fontFamily: 'Montserrat', marginLeft: '200px', marginRight:'200px', marginTop: '40px', marginBottom: '10px', height: '350px'}} className={classes.root}>
        <Typography style={{fontFamily: 'montserrat', marginBottom: '-60px'}} variant="h4" component="h4">
          <Ventajas />
        </Typography>
      </Paper>
    </div>
  );
}