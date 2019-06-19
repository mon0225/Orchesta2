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
    width: '100%',
    marginLeft: -255,
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
  return [ <p style={{fontSize: '25px', marginLeft: '50px'}}><em><b>Configuración VD</b></em></p>, <p style={{fontSize: '25px', marginLeft: '50px'}}><em><b>Creación nuevo grupo</b></em></p>, <p style={{fontSize: '25px', marginLeft: '50px'}}><em><b>Estructura VD</b></em></p>, <p style={{fontSize: '25px', marginLeft: '50px'}}><em><b>Creación - colección</b></em></p>, <p style={{fontSize: '25px', marginLeft: '50px'}}><em><b>Creación - grupo</b></em></p>,<p style={{fontSize: '25px', marginLeft: '50px'}}><em><b>Valores</b></em></p>, <p style={{fontSize: '25px', marginLeft: '50px'}}><em><b>Salvado - colección VD</b></em></p>, 
  <p style={{fontSize: '25px', marginLeft: '50px'}}><em><b>Editar</b></em></p>, <p style={{fontSize: '25px', marginLeft: '50px'}}><em><b>Vista Configurada</b></em></p>, <p style={{fontSize: '25px', marginLeft: '50px'}}><em><b>Estructura VC</b></em></p>, <p style={{fontSize: '25px', marginLeft: '50px'}}><em><b>Creación - nueva VC</b></em></p>, <p  style={{fontSize: '25px', marginLeft: '50px'}}><em><b>Configuraciones Principales</b></em></p>, <p style={{fontSize: '25px', marginLeft: '50px'}}><em><b>Acciones de campo</b></em></p>, <p style={{fontSize: '25px', marginLeft: '50px'}}><em><b>Acciones VC</b></em></p>, 
  <p style={{fontSize: '25px', marginLeft: '50px'}}><em><b>Prueba vista</b></em></p>, <p style={{fontSize: '25px', marginLeft: '50px'}}><em><b>Salvado y descarga</b></em></p>, <p style={{fontSize: '25px', marginLeft: '50px'}}><em><b>Nota</b></em></p>];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <p style={{marginLeft: '60px'}}>Una vez desplegado la pantalla de metadatos detectar y seleccionar <br/>la <em><u>opción</u></em><em><b> valores discretos</b></em>.</p>;
    case 1:
      return <p style={{marginLeft: '60px'}}>Ya seleccionado, dar clic derecho sobre el para crear un <em><b>nuevo grupo</b></em>.</p>;
    case 2:
      return <p style={{marginLeft: '60px'}}>Una vez redireccionado se abrira una pantalla en la que se observaran tres <br/> etiquetas y un botón de salvar.
      Dentro de este apartado observamos tres <br/>etiquetas diferenciadas por colores, el color <strong style={{color: `blue`}}><b>azul</b></strong> correspondera a la <br/><em><b>colección</b></em>, el <strong style={{color: 'red'}}>rojo</strong> al <em><b>grupo</b></em> y el <strong style={{color: 'gold'}}>amarillo</strong> al <em><b>valor</b></em>.</p>;
    case 3:
      return <p style={{marginLeft: '60px'}}>Después de seleccionar la <strong style={{color: `blue`}}><b>etiqueta azul</b></strong> dar clic sobre el apartado <br/> de agrega el nombre e indicar el <em><u>nombre de la colección </u></em>a incluir.</p>;
    case 4:
      return <p style={{marginLeft: '60px'}}>Hecho lo anterior, el boton de la <strong style={{color: `green`}}><b>etiqueta verde</b></strong> (identificado con el <br/> <em><b>grupo</b></em>) se activara, dar <em><u>clic para incluirlo </u></em>en la pantalla y después <br/><em><u>modificar el campo de nombre</u></em> como en el apartado anterior.</p>;
    case 5:
      return <p style={{marginLeft: '60px'}}>Ahora <em><u>dar clic</u></em> sobre la <strong style={{color: 'gold'}}>etiqueta amarilla</strong> para <em><u>modificar el nombre</u></em>, <em><u>incluyendo todos los valores</u></em> que se consideren <br/>necesarios.</p>;
    case 6:
      return <p style={{marginLeft: '60px'}}>Ya indicada la información dar enter en salvar, ahora en la pantalla de <br/>inicio podremos observar en el archivo de valores discretos <br/>la colección creada.</p>;
    case 7:
      return <p style={{marginLeft: '60px'}}>Una vez guardados los datos, si deseamos modificar los valores que <br/>ingresamos damos clic derecho en el grupo creado y elegimos <br/>la opción de edita.</p>;
    case 8:
      return <p style={{marginLeft: '60px'}}>Para interactuar con los datos generados, en la página principal damos <br/>clic derecho sobre vistas configuradas y apretamos en nueva vista <br/>configurada.</p>;
    case 9:
      return <p style={{marginLeft: '60px'}}>Se despliega pantalla de vista configurada con campos vacíos divididos <br/>en tres partes: configuraciones principales, acciones de campo <br/>y acciones.</p>;
    case 10:
      return <p style={{marginLeft: '60px'}}>Ahora necesitamos crear un nuevo campo dentro de esta vista, damos<br/> clic sobre el botón con el simbolo de + encerrado en un círculo de <br/>color verde,ubicado en la parte superior izquierda del apartado<br/>  de Acciones de campo. 
      Después en la ventana nueva poner el<br/> nombre con el que identificaremos el campo y dar aceptar.</p>;
    case 11:
      return <p style={{marginLeft: '60px'}}>Hecho lo anterior podremos observar en la pantalla una nueva pestaña <br/>con el nombre proporcionado, dentro de esta dentro del apartado de<br/> Configuraciones principales llenar los campos de 
      Nombre de la <br/>vista configurada, caption y descripción con datos <br/>relacionados al campo creado.</p>;
    case 12:
      return <p style={{marginLeft: '60px'}}>Después en el apartado de Acciones de campo en la parte de documentación<br/> apretar el botón de ¿Es Valor Discreto?, 
      del cual se desplegaran dos <br/>opciones: Grupo valores discretos y Bloque, al dar enter al primer<br/> campo se mostrara un listado con todos los valores discretos <br/>creados, elegir y seleccionarel deseado 
       y en el caso de la<br/>  segunda opción en caso de existir varios bloques de <br/> igual forma damos enter y buscamos en bloque <br/> el adecuado, en casode contar sólo con uno el <br/>paso anterior no será necesario ya que en <br/>automático el sistema lo seleccionara.</p>;
    case 13:
      return <p style={{marginLeft: '60px'}}>Ahora dar en el apartado de Acciones VC apretar el botón de Salvar y<br/> Continuar para guardar los cambios realizados, una vez realizado<br/> aparece una terminal indicando que la vista fue agregada<br/> exitosamente.</p>;
    case 14:
      return <p style={{marginLeft: '60px'}}>Realizado lo anterior, regresamos a la pantalla de metadatos y abrimos <br/>el apartado de Vistas Configuradas para ver el listado de los valores <br/> creados,
      buscamos el valor deseado y damos clic derecho sobre <br/>el y finalmente seleccionamos la opción de probar.</p>;
    case 15:
      return <p style={{marginLeft: '60px'}}>Despliegue de nueva pantalla integrada por las pestañas Principal y Registros,<br/> además de dos campos, identificados como ID (establecido por default<br/> por el sistema) y campo del valor en el que observaremos los valores<br/> proporcionados a nuestro grupo, así como tres botones habilitados<br/> de 
      salvar (salvar y limpiar, salvar y mantener datos, salvar y lista).</p>;
    default:
      return <p style={{marginLeft: '60px'}}>Cada vez que necesitemos corroborar si los pasos realizados son correctos<br/> damos enter en el botón de refresh ubicado en la parte superior derecha<br/> con flechas de color verde y en automático el sistema nos enviara una<br/> terminal en la que se nos indicara el status actual.</p>
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
      case 8:
        return <img src='/Pantallas/pantalla19.png' alt="img9" width='500px' height='280px' style={{borderStyle: 'solid' , borderWidth:'3px'}}/>;
      case 9:
        return <img src='/Pantallas/pantalla20.png' alt="img10" width='500px' height='280px' style={{borderStyle: 'solid' , borderWidth:'3px'}}/>;
      case 10:
        return <img src='/Pantallas/pantalla21.png' alt="img11" width='500px' height='280px' style={{borderStyle: 'solid' , borderWidth:'3px'}}/>;
      case 11:
        return <img src='/Pantallas/pantalla22.png' alt="img7" width='500px' height='280px' style={{borderStyle: 'solid' , borderWidth:'3px'}}/>;
      case 12:
        return <img src='/Pantallas/pantalla23.png' alt="img7" width='500px' height='280px' style={{borderStyle: 'solid' , borderWidth:'3px'}}/>;
      case 13:
        return <img src='/Pantallas/pantalla24.png' alt="img7" width='500px' height='280px' style={{borderStyle: 'solid' , borderWidth:'3px'}}/>;
      case 14:
        return <img src='/Pantallas/pantalla26.png' alt="img7" width='500px' height='280px' style={{ borderStyle: 'solid' , borderWidth:'3px'}}/>;
      case 15:
        return <img src='/Pantallas/pantalla27.png' alt="img7" width='500px' height='280px' style={{borderStyle: 'solid' , borderWidth:'3px'}}/>;
      case 16:
        return <img src='/Pantallas/pantalla28.png' alt="img7" width='500px' height='280px' style={{borderStyle: 'solid' , borderWidth:'3px'}}/>;
      case 17:
        return <img src='/Pantallas/pantalla29.png' alt="img7" width='500px' height='280px' style={{borderStyle: 'solid' , borderWidth:'3px'}}/>;
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
