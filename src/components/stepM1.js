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
    marginLeft: '68px'
  },
  resetContainer: {
    padding: theme.spacing(10),
    marginLeft: '5px'
  },
}));

function getSteps() {
  return [<p style={{fontSize: '25px', marginLeft: '50px'}}><em><b>Creación del grupo</b></em></p>, <p style={{fontSize: '25px', marginLeft: '50px'}}><em><b>Creación de colección</b></em></p>, <p style={{fontSize: '25px', marginLeft: '50px'}}><em><b>Creación de nuevo grupo</b></em></p>, <p style={{fontSize: '25px', marginLeft: '50px'}}><em><b>Agregar valores</b></em></p>, <p style={{fontSize: '25px', marginLeft: '50px'}}><em><b>Guardar</b></em></p>];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <p style={{marginLeft: '60px'}}>Una vez desplegado la pantalla de metadatos ubicamos la <em><u>opción</u></em><em><b> valores<br/> discretos</b></em>, y damos clic derecho en crear un <em><b>nuevo grupo</b></em>.</p>;
    case 1:
      return <p style={{marginLeft: '60px'}}>Hecho lo anterior, se abrira pantalla conformada por tres etiquetas de colores <br/>(<strong style={{color: `blue`}}><b>azul</b></strong> para la <em><b>colección</b></em>, <strong style={{color: 'red'}}>rojo</strong> el <em><b>grupo</b></em> y <strong style={{color: 'gold'}}>amarillo</strong> el <em><b>valor</b></em>), 
      seleccionar la <br/><em><b>etiqueta azul</b></em> para agregar el <em><u>nombre de la colección </u></em>. </p>;
    case 2:
      return <p style={{marginLeft: '60px'}}>Siguiente paso, veremos que el boton de la <strong style={{color: `green`}}><b>etiqueta verde</b></strong> (identificado con el <br/> <em><b>grupo</b></em>) se activara, dar <em><u>enter para incluirlo </u></em> y después <br/><em><u>modificar el campo de nombre</u></em> como en el apartado anterior.</p>;
    case 3:
      return <p style={{marginLeft: '60px'}}>Ahora <em><u>damos clic</u></em> sobre la <strong style={{color: 'gold'}}>etiqueta amarilla</strong> <em><u> con el nombre determinado e incluimos tantos valores consideremos necesarios</u></em>.</p>;
    case 4:
      return <p style={{marginLeft: '60px'}}>Ya establecida la información apretamos el botón de salvar para guardar la información, ahora cuando consultermos la pantalla de <br/>inicio podremos observar la nueva colección creada dentro del archivo de valores discretos.</p>;
    default:
      return <p style={{marginLeft: '60px'}}>Una vez guardados los datos, si deseamos modificar los valores que <br/>ingresamos damos clic derecho en el grupo creado y elegimos <br/>la opción de edita.</p>
  }
}


function getStepImage(step) {
    switch (step) {
      case 0:
        return <img src='/Pantallas/pantalla7.png' alt='img1' width='500px' height='280px' style={{ borderStyle: 'solid' , borderWidth:'3px', marginLeft: '10px'}} />;
      case 1:
        return <img src= '/Pantallas/pantalla8.png' alt="img2" width='500px' height='280px' style={{borderStyle: 'solid' , borderWidth:'3px'}}/>;
      case 2:
        return <img src='/Pantallas/pantalla9.png' alt="img3" width='500px' height='280px' style={{ borderStyle: 'solid' , borderWidth:'3px'}}/>;
      case 3:
        return <img src='/Pantallas/pantalla10.png' alt="img4" width='500px' height='280px' style={{borderStyle: 'solid' , borderWidth:'3px'}}/>;
      case 4:
        return <img src='/Pantallas/pantalla11.png' alt="img5" width='500px' height='280px' style={{borderStyle: 'solid' , borderWidth:'3px'}}/>;
      case 5:
        return <img src='/Pantallas/pantalla13.png' alt="img6" width='500px' height='280px' style={{borderStyle: 'solid' , borderWidth:'3px'}}/>;
      case 6:
        return <img src='/Pantallas/pantalla17.png' alt="img7" width='500px' height='280px' style={{borderStyle: 'solid' , borderWidth:'3px'}}/>;
      case 7:
        return <img src='/Pantallas/pantalla18.png' alt="img8" width='500px' height='280px' style={{borderStyle: 'solid' , borderWidth:'3px'}}/>;
      default:
        return <img src='/Pantallas/pantalla25.png' alt="img7" width='700px' height='180px' style={{borderStyle: 'solid' , borderWidth:'3px'}}/>;
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
          <Typography style={{marginLeft: '570px', fontSize: '20px'}}>Iniciar otra vez</Typography>
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
