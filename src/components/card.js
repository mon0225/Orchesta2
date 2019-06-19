import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Step from '../components/stepM1';

const useStyles = makeStyles({
  card: {
    width: 1075,
    marginLeft: '185px',
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
            <Typography className={classes.title} color="textSecondary" gutterBottom>
            <br/>
            <center>
                <h2><strong>Nuevo grupo de Valores Discretos</strong></h2>
            </center>
            <br/>
            <hr/>
            </Typography>
            <Typography variant="h5" component="h2">
                {bull} <Step/>{bull}
            </Typography>
        </CardContent>
    </Card>
  );
}