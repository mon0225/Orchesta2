import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { hidden } from 'ansi-colors';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginLeft: -255,
    marginTop: -380,
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(10),
  },
}));

//function getImages() {
  //return [ 'Autentica', 'Ingresar', 'Crear', 'Creación BD', 'Guardar','Conexiòn BD', 'Creaciòn BD', 'Config BD', 'Config gral', 'Datos sensibles', 'Administrador'];
//}

function getSteps(step) {
  return [ <img src='/Pantallas/pantalla7.png' alt='img1' width='500px' height='280px' style={{ borderStyle: 'solid' , borderWidth:'3px'}} />, <img src= '/Pantallas/pantalla8.png' alt="img2" width='500px' height='280px' style={{borderStyle: 'solid' , borderWidth:'3px'}}/>, <img src='/Pantallas/pantalla9.png' alt="img3" width='500px' height='280px' style={{ borderStyle: 'solid' , borderWidth:'3px'}}/>, <img src='/Pantallas/pantalla10.png' alt="img4" width='500px' height='280px' style={{borderStyle: 'solid' , borderWidth:'3px'}}/>, <img src='/Pantallas/pantalla11.png' alt="img5" width='500px' height='280px' style={{borderStyle: 'solid' , borderWidth:'3px'}}/>, <img src='/Pantallas/pantalla13.png' alt="img6" width='500px' height='280px' style={{borderStyle: 'solid' , borderWidth:'3px'}}/>,           
  <img src='/Pantallas/pantalla17.png' alt="img7" width='500px' height='280px' style={{borderStyle: 'solid' , borderWidth:'3px'}}/>, <img src='/Pantallas/pantalla18.png' alt="img8" width='500px' height='280px' style={{borderStyle: 'solid' , borderWidth:'3px'}}/>, <img src='/Pantallas/pantalla19.png' alt="img9" width='500px' height='280px' style={{borderStyle: 'solid' , borderWidth:'3px'}}/>, <img src='/Pantallas/pantalla20.png' alt="img10" width='500px' height='280px' style={{borderStyle: 'solid' , borderWidth:'3px'}}/>, <img src='/Pantallas/pantalla21.png' alt="img11" width='500px' height='280px' style={{borderStyle: 'solid' , borderWidth:'3px'}}/>, <img src='/Pantallas/pantalla22.png' alt="img7" width='500px' height='280px' style={{borderStyle: 'solid' , borderWidth:'3px'}}/>,
  <img src='/Pantallas/pantalla23.png' alt="img7" width='500px' height='280px' style={{borderStyle: 'solid' , borderWidth:'3px'}}/>, <img src='/Pantallas/pantalla24.png' alt="img7" width='500px' height='280px' style={{borderStyle: 'solid' , borderWidth:'3px'}}/>, <img src='/Pantallas/pantalla26.png' alt="img7" width='500px' height='280px' style={{ borderStyle: 'solid' , borderWidth:'3px'}}/>, <img src='/Pantallas/pantalla27.png' alt="img7" width='500px' height='280px' style={{borderStyle: 'solid' , borderWidth:'3px'}}/>, <img src='/Pantallas/pantalla28.png' alt="img7" width='500px' height='280px' style={{borderStyle: 'solid' , borderWidth:'3px'}}/>,
  <img src='/Pantallas/pantalla29.png' alt="img7" width='500px' height='280px' style={{borderStyle: 'solid' , borderWidth:'3px'}}/>, <img src='/Pantallas/pantalla25.png' alt="img7" width='700px' height='180px' style={{borderStyle: 'solid' , borderWidth:'3px'}}/>];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Una vez desplegado la pantalla de metadatos detectar y 
      seleccionar la opción valores discretos.`;
    case 1:
      return `Ya seleccionado, dar clic derecho sobre el para crear un nuevo grupo.`;
    case 2:
      return `Una vez redireccionado se abrira una pantalla en la que se observaran tres etiquetas y un botón de salvar.
          Dentro de este apartado observamos tres etiquetas diferenciadas por colores, el color azul correspondera a la colección, el rojo al grupo y el amarillo al valor.`;
    case 3:
      return `Una vez seleccionada la etiqueta azul dar clic sobre el apartado de agrega el nombre e indicar el nombre de la colección a incluir. `;
    case 4:
      return `Una vez realizado el paso anterior, el boton de la etiqueta correspondiente a grupo(identificado con el color verde) se activara, <br/>dar clic para incluirlo en la pantalla y después modificar el campo de nombre como en el apartado anterior.`;
    case 5:
      return `Después dar clic sobre el botón color amarillo para poner los valores del grupo y modificar su nombre, incluir tantos valores se consideren necesarios.`;
    case 6:
      return `Ya indicada la información dar enter en salvar, ahora en la pantalla de inicio podremos observar en el archivo de valores discretos la colección creada.`;
    case 7:
      return `Una vez guardados los datos, si deseamos modificar los valores que ingresamos damos clic derecho en el grupo creado y elegimos la opción de edita.`;
    case 8:
      return `Para interactuar con los datos generados, en la página principal damos clic derecho sobre vistas configuradas y apretamos en nueva vista configurada.`;
    case 9:
      return `Se despliega pantalla de vista configurada con campos vacíos divididos en tres partes: configuraciones principales, acciones de campo y acciones.`;
    case 10:
      return `Ahora necesitamos crear un nuevo campo dentro de esta vista, damos clic sobre el botón con el simbolo de + encerrado en un círculo de color verde, ubicado en la parte superior izquierda del aparatado de Acciones de campo. 
      Después en la ventana nueva poner el nombre con el que identificaremos el campo y dar aceptar.`;
    case 11:
      return `Hecho lo anterior podremos observar en la pantalla una nueva pestaña con el nombre proporcionado, dentro de esta dentro del apartado de Configuraciones principales llenar los campos de 
      Nombre de la vista configurada, caption y descripción con datos relacionados al campo creado.`;
    case 12:
      return `Después en el apartado de Acciones de campo en la parte de documentación apretar el botón de ¿Es Valor Discreto?, 
      del cual se desplegaran dos opciones: Grupo valores discretos y Bloque, al dar enter al primer campo se mostrara un listado con todos los valores discretos creados, elegir y seleccionar el deseado 
       y en el caso de la segunda opción en caso de existir varios bloques de igual forma damos enter y buscamos en bloque el adecuado, en caso de contar sólo con uno el paso anterior no será necesario ya que en automático el sistema lo seleccionara.`;
    case 13:
      return `Ahora dar en el apartado de Acciones VC apretar el botón de Salvar y Continuar para guardar los cambios realizados, una vez realizado aparece una terminal indicando que la vista fue agregada exitosamente.`;
    case 14:
      return `Realizado lo anterior, regresamos a la pantalla de metadatos y abrimos el apartado de Vistas Configuradas para ver el listado de los valores creados, 
      buscamos el valor deseado y damos clic derecho sobre el y finalmente seleccionamos la opción de probar.`;
    case 15:
      return `Despliegue de nueva pantalla integrada por las pestañas Principal y Registros, además de dos campos, identificados como ID (establecido por default por el sistema) y campo del valor en el que observaremos los valores proporcionados a nuestro grupo, así como tres botones habilitados de 
      salvar (salvar y limpiar, salvar y mantener datos, salvar y lista).`;
    case 16:
      return `Independiente a la opción de salvado que seleccionemos en cuanto demos enter en automático los registros que tengamos seran guardados en una tabla para su registro, la cual ubicaremos en la pestaña de Registros.`;
    case 17:
      return `Una vez ubicados en la pestaña de Registros, seleccionamos el formato de descarga Excel, RTF, PDF, CSV, TXT y HTML) deseado, después damos clic en el botón de exportar e indicamos el lugar donde queremos llevar a cabo la descarga 
      del archivo, antes de exportar también podemos limitar el número de valores que deseamos ver en la lista desplegada. `;
    default:
      return 'Cada vez que necesitemos corroborar si los pasos realizados son correctos damos enter en el botón de  refresh ubicado en la parte superior derecha con flechas de color verde y en automático el sistema nos enviara una terminal en la que se nos indicara si hay error o si la configuración fue realizada correctamente.'
  }
}


function getStepTittle(step) {
    switch (step) {
      case 0:
        return `Configuración VD`;
      case 1:
        return `Creación nuevo grupo`;
      case 2:
        return `Estrcutura VD`;
      case 3:
        return `Creación - colección`;
      case 4:
        return `Creación - grupo`;
      case 5:
        return `Valores`;
      case 6:
        return `Salvado - colección VD`;
      case 7:
        return `Editar`;
      case 8:
        return `Vista Configurada`;
      case 9:
        return `Estructura VC`;
      case 10:
        return `Creación - nueva VC`;
      case 11:
        return `Configuraciones Principales`;
      case 12:
        return `Acciones de campo`;
      case 13:
        return `Acciones VC`;
      case 14:
        return `Prueba vista`;
      case 15:
        return 'Salvado y descarga';
      default:
        return 'Ayuda';
    }
  }

function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getStepTittle();

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
         {/* <Typography style={{fontSize: '32px', fontFamily: 'roboto', paddingLeft: '50px'}}>{getSteps(index)}</Typography>*/}
            <br/>
            <StepLabel >{label}</StepLabel>
            <StepContent >
            <br/>
            <center>
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
          <Typography style={{marginLeft: '570px'}}>Listo has terminado de instalar y usar la aplicaciòn vuelve a visualizar los pasos si tienes duda.</Typography>
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
