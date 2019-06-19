import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Step from './stepss'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PaperManual from './paper';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 1200,
    marginTop: 40,
    marginLeft: 125,
    xs: 12, 
    sm: 12, 
    md: 12
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    paddingLeft: 2000,
    width: 0
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
  title: {
    fontFamily: 'calibri',
    fontSize: '20em',
  },
  image: {
    width: '300px',
    fontSize: '20em',
  },
}));

function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <div style={{fontFamily: 'Montserrat'}}>
    <Card id="card" className={classes.card}>
      <CardContent>
       
          <PaperManual />
       
        <Typography variant="body2" color="textSecondary" component="p">
          <Step/>
        </Typography>
      </CardContent>
        <CardContent>
          <Typography paragraph>
            <p style={{marginLeft: '2px'}}>
              <small><strong>*Nota:   </strong></small>
              <small>Para ayudar en el entendimiento del uso de la herramienta anexamos un glosario.</small>
            </p>
          </Typography>
        </CardContent>
    
    </Card>
    
    
    </div>
    
  );
}

export default RecipeReviewCard;