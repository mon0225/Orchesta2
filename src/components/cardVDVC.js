import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Step2 from '../components/stepM2';

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
                <h3><p className='text-muted'><strong>Manual de usuario <br/> <br/>Uso de Valores Discretos dentro de Vista Configurada</strong></p></h3>
              </center>
              <br/>
              <hr style={{width: '500px'}}/>
              </Typography>
                {/*<p className='text-muted text-center' style={{lineHeight: '35px', fontSize: '16px'}}>Instrucciones para el uso correcto de Valores Discretos dentro del apartado de Vista Configurada</p>*/}
                <p className='text-muted text-center' style={{lineHeight: '35px', fontSize: '20px',}}><em>Entiende, ejecuta y configura</em> </p>
                <center>
                  <img src='/programa.png' alt='programa' width='50px' height='38px'/>
                </center>
                <hr/>
              <Typography >
                  <Step2/>
              </Typography>
          </CardContent>
      </Card>
      <br/>
    </div>
  );
}


























