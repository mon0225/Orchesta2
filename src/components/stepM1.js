import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '130%',
    marginLeft: -395,
    marginTop: -380
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
    marginLeft: '98px'
  },
  resetContainer: {
    padding: theme.spacing(10),
    marginLeft: '5px'
  },
}));

function getSteps() {
  return [<p style={{fontSize: '25px', marginLeft: '50px'}}><em><b>Creación valores discretos</b></em></p>, <p style={{fontSize: '25px', marginLeft: '50px'}}><em><b>Edición Grupo de Valores Discretos</b></em></p>, <p style={{fontSize: '25px', marginLeft: '50px'}}><em><b>Creación nueva colección</b></em></p>, <p style={{fontSize: '25px', marginLeft: '50px'}}><em><b>Integración de valores</b></em></p>, <p style={{fontSize: '25px', marginLeft: '50px'}}><em><b>Prueba de valores</b></em></p>];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <div className='card' style={{width: '450px', marginLeft: '65px', height:'220px'}}>
         <p ALIGN='justify' style={{marginTop: '15px', marginLeft: '10px', marginRight: '5px'}}>Para crear un <em><b>nuevo grupo de valores discretos</b></em>: </p>
         <hr style={{width: '410px', marginTop:'-5px'}}/>
         <p ALIGN='justify' style={{marginTop: '5px', marginLeft: '10px', marginRight: '5px'}}><em><b>&bull;</b></em> En la pantalla principal abrimos la pestaña de <em><b>Metadatos</b></em>.</p>
         <p ALIGN='justify' style={{marginTop: '5px', marginLeft: '10px', marginRight: '5px'}}><em><b>&bull;</b></em> Damos clic derecho sobre <em><b>valores discretos</b></em> y seleccionamos la opción <em><b>nuevo grupo</b></em>.</p>
      </div>;
    case 1:
      return <div className='card' style={{width: '450px', marginLeft: '70px', height:'220px'}}>
          <p ALIGN='justify' style={{marginTop: '15px', marginLeft: '10px', marginRight: '5px'}}>Redirección a vista de edición del Grupo de Valores Discretos, en la que se observaran cuatro etiquetas:</p>
          <hr style={{width: '410px',  marginTop:'-5px'}}/>
          <p ALIGN='justify' style={{marginTop: '5px', marginLeft:'15px'}}><i class="far fa-square" style={{backgroundColor: 'blue'}}></i> Etiqueta azul= <em><b>Nueva Colección</b></em>,</p>
          <br/>
          <p ALIGN='justify' style={{marginTop: '-30px', marginLeft:'15px'}}><i class="far fa-square" style={{backgroundColor: 'green'}}></i> Etiqueta verde=<em><b>Nuevo Grupo</b></em>,</p>
          <br/>
          <p ALIGN='justify' style={{marginTop: '-30px', marginLeft:'15px'}}><i class="far fa-square" style={{backgroundColor: 'yellow'}}></i> Etiqueta amarilla=<em><b>Nuevos Valores</b></em> y</p>
          <br/>
          <p ALIGN='justify'style={{marginTop: '-30px', marginLeft:'15px'}}><i class="far fa-square" style={{backgroundColor: 'red'}}></i> Etiqueta roja=<em><b>Eliminar Datos</b>.</em></p>
      </div>;
    case 2:
      return <div className='card' style={{width: '450px', marginLeft: '65px', height:'220px'}}>
        <p ALIGN='justify' style={{marginTop: '15px', marginLeft: '10px', marginRight: '5px'}}>Para crear una <em><b>nueva colección</b></em></p>
        <hr style={{width: '410px', marginTop:'-5px'}}/>
        <p ALIGN='justify' style={{marginTop: '5px', marginLeft: '10px', marginRight: '5px'}}><em><b>&bull;</b></em> Seleccionar la <em><b>etiqueta azul</b></em> y modificar el nombre de la nueva colección a crear.</p>
        <p ALIGN='justify' style={{marginTop: '5px', marginLeft: '10px', marginRight: '5px'}}><em><b>&bull;</b></em> Después apretar la <em><b>etiqueta verde</b></em> y nuevamente modificar el nombre del grupo de acuerdo a la colección establecida.</p>
      </div>;
    case 3:
      return <div className='card' style={{width: '450px', marginLeft: '65px', height:'220px'}}>
        <p ALIGN='justify' style={{marginTop: '15px', marginLeft: '10px', marginRight: '5px'}}>Para establecer los <em><b>valores del grupo</b></em></p>
        <hr style={{width: '410px', marginTop:'-5px'}}/>
        <p ALIGN='justify' style={{marginTop: '5px', marginLeft: '10px', marginRight: '5px'}}> <em><b>&bull;</b></em> Clic sobre la <em><b>etiqueta amarilla</b></em> para incorporar todos los campos de los valores del grupo que deseamos integrar, indicando el nombre de cada uno de ellos. </p>
        <p ALIGN='justify' style={{marginTop: '5px', marginLeft: '10px', marginRight: '5px'}}><em><b>&bull;</b></em> Establecidos los datos apretar el botón<em><b> salvar</b></em> para guardar la información.</p>
      </div>;
    default:
      return <div className='card' style={{width: '450px', marginLeft: '65px', height:'220px'}}>
      <p ALIGN='justify' style={{marginTop: '15px', marginLeft: '10px', marginRight: '5px'}}>Edición y prueba de <em><b>valores discretos creados</b></em></p>
      <hr style={{width: '410px', marginTop:'-5px'}}/>
      <p ALIGN='justify' style={{marginTop: '5px', marginLeft: '10px', marginRight: '5px'}}><em><b>&bull;</b></em> Para modificar los valores que ingresamos dar clic derecho en el grupo creado y elegir la <em><b>opción de edita</b></em>.</p>
      <p ALIGN='justify' style={{marginTop: '5px', marginLeft: '10px', marginRight: '5px'}}><em><b>&bull;</b></em> Para probar dar clic derecho en el valor discreto creado y seleccionar la opción de <em><b>prueba</b></em>.</p>
    </div>;
  }
}


function getStepImage(step) {
    switch (step) {
      case 0:
        return <img src='/Pantallas/pantalla8.png' alt='img1' width='500px' height='280px' style={{ borderStyle: 'solid' , borderWidth:'3px', marginLeft: '10px'}} />;
      case 1:
        return <img src= '/Pantallas/pantalla11.png' alt="img2" width='500px' height='280px' style={{borderStyle: 'solid' , borderWidth:'3px'}}/>;
      case 2:
        return <img src='/Pantallas/pantalla11.png' alt="img3" width='500px' height='280px' style={{ borderStyle: 'solid' , borderWidth:'3px'}}/>;
      case 3:
        return <img src='/Pantallas/pantalla13.png' alt="img4" width='500px' height='280px' style={{borderStyle: 'solid' , borderWidth:'3px'}}/>;
      default:
        return <img src='/Pantallas/pantalla18.png' alt="img7" width='500px' height='280px' style={{borderStyle: 'solid' , borderWidth:'3px'}}/>;
    }
  }

function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  return (
    <div className={classes.root}>
    <center>
      <Stepper xs={12} style={{ paddingLeft: 500, marginTop: '400px'}} activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <br/>
            <StepLabel style={{ fontSize: '100px'}} >{label}</StepLabel>
            <StepContent >
            <br/>
            <center>
              <Typography style={{fontSize: '32px', fontFamily: 'roboto', paddingLeft: '50px'}}>{getStepImage(index)}</Typography>
              <br/>
              <Typography style={{fontFamily: 'montserrat'}}>{getStepContent(index)}</Typography>
            </center>
              <div className={classes.actionsContainer}>
                <div>
                <br/>
                <center>
                {activeStep === 0 ? 
                  <Button
                    color={activeStep === -1}
                    style={{ background: 'linear-gradient(45deg, #1A2F6C 30%, #2759E8 90%)', color: 'white', width: '140px'}}
                    variant="contained"
                    onClick={handleNext}
                    className={classes.button}
                    >
                    Next
                    </Button>
                  : 
                  <div>
                    <Button
                    color={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                    style={{background: 'linear-gradient(45deg, #49BFA4 30%, #27E8DD 90%)', color: 'white', width: '140px'}}
                    >
                      Back
                      
                    </Button>
                    <Button
                    style={{ background: 'linear-gradient(45deg, #1A2F6C 30%, #2759E8 90%)', color: 'white', width: '140px'}}
                    variant="contained"
                    onClick={handleNext}
                    className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'End' : 'Next'}
                    </Button>
                  </div>
                }
                </center>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </center>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
        <center>
          <Typography style={{marginLeft: '570px', fontSize: '20px'}}><em><b>Ver nuevamente</b></em></Typography>
          <Button style={{background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', color: 'white', width: '140px', marginLeft: '570px', marginTop: '-170px'}} onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </center>
        </Paper>
      )}
    </div>
  );
}

export default VerticalLinearStepper;
