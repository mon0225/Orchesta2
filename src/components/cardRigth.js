import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    width: 405,
    marginLeft: '968px',
    marginTop: '-1314px'
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
                <h3><p className='text-muted'><strong>Glosario <i class="fas fa-atlas"></i></strong></p></h3>
            </center>
            <hr style={{width: '200px'}}/>
            <br/>
            </Typography>
            <Typography>
                <p className= 'text-muted' ALIGN='justify' style={{fontSize: '16px', marginLeft: '10px', marginRight: '10px', lineHeight: '22px'}}>
                    En esta parte intregramos un glosario explicando a más detalle algunos términos importantes en la 
                    operativa fundamental del sistema.
                </p>
            </Typography>
            <br/>
            <Typography>
                <center>
                    <hr/>
                    <h5><p className='text-muted'><strong>Valores Discretos</strong></p></h5>
                    <hr/>
                </center>
                <p className='text-muted' ALIGN='justify' style={{fontSize: '14px', lineHeight: '22px'}}><em><b>Catálogo de datos</b></em> generales precargados en la aplicación para su descarga en automático, caracterizados por su repetición constante en la integración de la aplicación. Ejemplos: estado civil, sexo, día de la semana, etc.</p>
                <p className='text-muted' ALIGN='justify' style={{fontSize: '14px', lineHeight: '22px'}}><em><b>Ejemplo de uso</b></em>:</p>
                <p className='text-muted' ALIGN='justify' style={{fontSize: '14px', lineHeight: '22px'}}><em><b>Dependiendo el tema que se busca desarrollar, en este caso elijo</b></em>:</p>
                <hr/>
            </Typography>
            <br/>
            <Typography>
                <center>
                    <hr/>
                    <h5><p className='text-muted'><strong>Metadatos</strong></p></h5>
                    <hr/>
                </center>
                <p className='text-muted' ALIGN='justify' style={{fontSize: '14px', lineHeight: '22px'}}><em><b>Grupo de datos</b></em> indispensables para la creación de una aplicación, enfocados en la descripción del contenido de archivos o información integrada.</p>
                <hr/>
            </Typography>
        </CardContent>
    </Card>
  );
}