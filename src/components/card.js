import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Step from '../components/stepM1';

const useStyles = makeStyles({
  card: {
    width: 1305,
    marginLeft: '68px',
    marginTop: '50px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
        <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom component="p"> 
            <br/>
            <center>
              <h3><p className='text-muted'><strong>Valores Discretos</strong></p></h3>
            </center>
            <hr style={{width: '500px'}}/>
            <br/>
            </Typography>
            <Typography>
              <p className='text-muted' ALIGN='center' style={{fontSize: '16px', marginLeft: '10px', marginRight: '10px', lineHeight: '25px'}}>
                Instrucciones de uso de Valores Discretos dentro de la Aplicación de ORCHESTA, facilitando al usuario los conocimientos necesarios para el dominio del tema.
              </p>
            </Typography>
        </CardContent>
    </Card>
  );
}