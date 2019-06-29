import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';



const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 900,
    marginLeft: '60px',
    marginTop: '50px',
  },
  media: {
    height: '-75px',
    paddingTop: '40%', // 16:9

  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <div>
        <Card className={classes.card}>
            <br/>
            <center>
                <h3><p className='text-muted'><strong>Acerca de Orchesta</strong></p></h3>
            </center>
            <Typography variant="body2" color="textSecondary" component="p">
                <hr style={{width: '500px'}}/>
                <br/>
                <p ALIGN= 'justify' style={{fontSize: '16px', marginLeft: '10px', marginRight: '10px', lineHeight: '25px'}}> 
                  Orchesta es un espacio de trabajo para integrar soluciones informáticas con alto enfoque al negocio y con la capacidad de cubrir de punta a punta cualquier proyecto de informática utilizando estandares del ámbito lo cual agrega valor al resultado final.
                </p>
            </Typography>
            <br/>
            <CardMedia
                className={classes.media}
                image="/foto-home7.jpg"
                title="Orchesta"
            />
            <br/>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    <center>
                        <h3><p className='text-muted'><strong>El objetivo es simple</strong></p></h3>
                    </center>
                    <hr style={{width: '500px'}}/>
                    <br/>
                    <p ALIGN='justify' style={{fontSize: '16px', marginLeft: '10px', marginRight: '10px', lineHeight: '25px'}}>
                        Sacar el máximo provecho de tu recursos (humanos, financieros, tecnológicos) en beneficio de tu empresa.
                    </p>
                </Typography>
            </CardContent>
        </Card>
        <br/>
  </div>
  );
}