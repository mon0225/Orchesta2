import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Ventajas from './ventajas'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 3,
    marginTop: '5px',
    marginLeft: '100px',
    marginRight: '100px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontFamily: 'montserrat',
    spacing: '100px',
    lineHeight: '30px'
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <Paper style={{marginTop: '20px', marginLeft: '30px'}} className={classes.paper}>
          <br/>
          <strong style={{fontSize: '25px'}}>Concepto</strong>
          <br/>
          <p ALIGN='justify'>Aplicación diseñada como herramienta para el usuario en la creación de nuevas páginas web generadas con un diseño preestablecido en un tiempo de elaboración reducido, integrada por una serie de instrucciones de fácil seguimiento para la automatización de contenidos y diseño final.</p>
          <br/>
          <br/>
          <strong style={{fontSize: '25px', marginTop: '-100px', marginRight: '10px'}}>Objetivo</strong>
          <br/>
          <p ALIGN='justify'>Elaboración de páginas electrónicas en un tiempo de producción minimo, de fácil uso para usuarios con conocimientos básicos en el tema e integrador de código para programadores con un ahorro en el tiempo de trabajo.</p>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper style={{marginTop: '20px', marginRight: '10px'}} className={classes.paper}>
          <strong style={{fontSize: '25px'}}>Características</strong>
          <br/><br/>Tipo de servicio: PLATAFORMA
          <br/>
          <br/>
          <strong style={{fontSize: '25px', marginTop: '-90px', marginRight: '10px'}}>Ventajas</strong>
          <br/>
          <br/>
          <Ventajas />
          </Paper>
        </Grid>
    
      
      </Grid>

    
    </div>
  );
}