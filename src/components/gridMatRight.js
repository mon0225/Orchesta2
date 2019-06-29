import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Ventajas from './ventajas';
import Vent from './ventGrid1';
import Vent2 from './ventGrid2'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 385,
    maxHeight: 820,
    marginTop: '-54%',
    marginLeft: '1000px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
                <h3><p className='text-center text-muted'><strong>Beneficios</strong></p></h3>
                <center>
                  <img src='/ventajas.jpg' alt='ventajas' title='ventajas' width='130px' height='100px'/>
                </center>
                <hr style={{width: '250px'}}/>
                <br/>
                <p ALIGN='justify' style={{fontSize: '16px', marginLeft: '10px', marginRight: '10px', lineHeight: '25px', marginTop:'-10px'}}>
                <b>Business Inteligence & Data Science Ready!</b><br/>
                <b>Para el negocio</b>
                <Vent/>
                  {/*<ul>
                    <li>&bull; Implementación en tiempo real de soluciones informáticas para cubrir los objetivos de tu negocio.</li>
                    <li>&bull; Agrega valor a tu negocio con los metadatos de las soluciones implementadas con Orchesta, serán tus nuevos activos tecnológicos.</li>
                  </ul>*/}
                  </p>
                  <p ALIGN='justify' style={{fontSize: '16px', marginLeft: '10px', marginRight: '10px', lineHeight: '25px', marginTop: '-10px'}}>
                <b>Para el área de sistemas</b>
                <Vent2 />
                  {/*<ul>
                  <li>&bull; Refuerza el desarrollo ágil de software de la empresa.</li>
                  <li>&bull; Minimiza el margen de error de tus sistemas.</li>
                  <li>&bull; Alto nivel de estandarización de los componentes desarrollados.</li>
                  <li>&bull; Facilita tu proceso de entrenamiento.</li>
                  <li>&bull; Integración con diferentes tecnologías del mercado.</li>
                  </ul>*/}
                </p>
                {
                  //<p style={{marginTop: '10px'}}><Ventajas /></p>
                }                
            </Typography>
          </CardContent>
    </Card>
  </div>    
  );
}