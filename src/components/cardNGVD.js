import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Step from '../components/stepM1';

const useStyles = makeStyles({
  card: {
    width: 875,
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

  return (
    <div>
      <Card className={classes.card}>
          <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
              <br/>
              <center>
                <h3><p className='text-muted'><strong>Manual de usuario <br/><br/>Nuevo grupo de Valores Discretos</strong></p></h3>
              </center>
              <br/>
              <hr style={{width: '500px', marginTop: '-5px'}}/>
              </Typography>
                <p className='text-muted text-center' style={{lineHeight: '35px', fontSize: '16px'}}>Instrucciones para el uso correcto en la creación de nuevos grupos de Valores Discretos</p>
                <p className='text-muted text-center' style={{lineHeight: '35px', fontSize: '16px',}}><em>Entiende, ejecuta y configura <img src='/programa.png' alt='programa' width='50px' height='38px'/></em> </p>
                <hr/>
              <Typography >
                  <Step/>
              </Typography>
          </CardContent>
      </Card>
      <br/>
    </div>
  );
}