import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Table from './table'

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
  return [<p style={{fontSize: '25px', marginLeft: '50px'}}><em><b>Creación VD</b></em></p>, <p style={{fontSize: '25px', marginLeft: '50px'}}><em><b>Creación nueva colección</b></em></p>, <p style={{fontSize: '25px', marginLeft: '50px'}}><em><b>Creación nuevo grupo</b></em></p>, <p style={{fontSize: '25px', marginLeft: '50px'}}><em><b>Integración de valores</b></em></p>, <p style={{fontSize: '25px', marginLeft: '50px'}}><em><b>Salvado información</b></em></p>, <p style={{fontSize: '25px', marginLeft: '50px'}}><em><b>Consulta de valores</b></em></p>, <p style={{fontSize: '25px', marginLeft: '50px'}}><em><b>Modificación de datos</b></em></p>,];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <div className='card' style={{width: '450px', marginLeft: '80px', height:'220px'}}>
      <p ALIGN='justify' style={{marginTop: '15px', marginLeft: '10px', marginRight: '5px'}}>Para crear una <em><b>Vista configurada</b></em>:</p>
      <hr style={{width: '410px', marginTop:'-5px'}}/>
      <p ALIGN='justify' style={{marginTop: '5px', marginLeft: '10px', marginRight: '5px'}}><em><b>&bull;</b></em> En la pantalla principal abrimos la pestaña de <em><b>Metadatos</b></em>.</p>
      <p ALIGN='justify' style={{marginTop: '5px', marginLeft: '10px', marginRight: '5px'}}><em><b>&bull;</b></em> Damos clic derecho sobre <em><b>Vista configurada</b></em> y seleccionamos la opción <em><b>nueva vista</b></em>.</p>
    </div>;
    case 1:
      return <div className='card' style={{width: '450px', marginLeft: '70px', height:'220px'}}>
      <p ALIGN='justify' style={{marginTop: '15px', marginLeft: '10px', marginRight: '5px'}}>Redirección a <em><b>Vista configurada </b></em> la cual estara integrada por siete partes:</p>
      <hr style={{width: '410px',  marginTop:'-5px'}}/>
      <p ALIGN='justify' style={{marginLeft:'15px', lineHeight: '10px', fontSize:'13px', marginTop: '-5px'}}> <i class="fas fa-check"></i><em>Configuraciones principales</em>,</p>
      <p ALIGN='justify' style={{marginLeft:'15px', lineHeight: '10px', fontSize:'13px'}}> <i class="fas fa-check"></i><em>Acciones VC</em>,</p>
      <p ALIGN='justify' style={{marginLeft:'15px', lineHeight: '10px', fontSize:'13px'}}><i class="fas fa-check"></i> <em>Acciones de campo</em>,</p>
      <p ALIGN='justify' style={{marginLeft:'15px', lineHeight: '18px', fontSize:'13px'}}><i class="fas fa-check"></i> <em>Configuraciones físicas <br/> del campo</em>,</p>
      <p ALIGN='justify' style={{marginLeft:'235px', marginTop: '-110px', lineHeight: '10px', fontSize:'13px', float: 'right'}}> <i class="fas fa-check"></i><em>Comportamiento del campo </em>,</p>
      <p ALIGN='justify' style={{marginLeft:'235px',  marginTop: '-1px',lineHeight: '10px', fontSize:'13px'}}> <i class="fas fa-check"></i><em>Documentación</em>,</p>
      <p ALIGN='justify' style={{marginLeft:'235px',  marginTop: '2px',lineHeight: '10px', fontSize:'13px'}}><i class="fas fa-check"></i> <em>Acciones</em>.</p>
    </div>;
    case 2:
      return <div>
        <div className='card' style={{width: '450px', marginLeft: '65px', height:'220px'}}>
          <p ALIGN='justify' style={{marginTop: '15px', marginLeft: '10px', marginRight: '5px'}}> <em><b>Configuraciones Principales</b></em>:</p>
          <hr style={{width: '410px', marginTop:'-5px'}}/>
          <p ALIGN='justify' style={{marginTop: '5px', marginLeft: '10px', marginRight: '5px'}}><em><b>&bull;</b></em> En esta parte se mostraran el conjunto de datos que determinaran el valor de las variables del sistema operativo.</p>
          <p ALIGN='justify' style={{marginTop: '5px', marginLeft: '10px', marginRight: '5px'}}><em><b>&bull;</b></em> Dentro de este apartado tendremos que modificar principalmente los campos de:</p>
          </div>
          <div className='card' style={{width: '450px', marginLeft: '65px', height:'220px'}}>
            <p ALIGN='justify' style={{marginTop: '20px', marginLeft: '10px', marginRight:'10px', fontSize:'14px'}}><i class="fas fa-check"></i><em><b>Nombre de tabla.-</b></em> entendido como el nombre con el que se ubicara la tabla física que lleguemos a crear.</p>
            <p ALIGN='justify' style={{marginLeft: '10px', marginRight: '5px', fontSize:'14px'}}><i class="fas fa-check"></i><em><b>Nombre Vista Configurada.- </b></em>entendido como el nombre que se le de al metadato, el cual por cuestiones de orden se recomienda  iniciar con un prefijo, Ej: VC_EVC.</p>
            <p ALIGN='justify' style={{marginLeft: '10px', marginRight: '5px', fontSize:'14px'}}><i class="fas fa-check"></i><em><b>Descripción.- </b></em>Explicación de la creación y uso del metadato.</p>
            <p ALIGN='justify' style={{marginLeft: '10px', marginRight: '5px', fontSize:'14px'}}><i class="fas fa-check"></i><em><b>Botones.- </b></em>Además se visualizan botones a activar indicando que se muestre el grid, las secfuencias continuas o se establezcan nombres estandarizados.</p>
        </div>
      </div>;
      
    
      /*<p>
          <p ALIGN='justify' style={{marginLeft: '80px'}}><em><b>2.- </b></em>Para <em><b>crear un nuevo campo</b></em> dentro de la  vista, dar enter en el <em><b>botón de <i class="fas fa-plus-circle" style={{color: 'green'}}></i></b></em> ubicado en la parte superior izquierda del apartado de <em><b>Acciones de campo</b></em>.</p> 
          <p ALIGN='justify' style={{marginLeft: '80px'}}><em><b>3.-</b></em> Una vez abierta la ventana cambiar el nombre y dar aceptar para guardarlo.</p>
        </p>*/
    case 3: 
      return <div>
      <div className='card' style={{width: '450px', marginLeft: '65px', height:'220px'}}>
        <p ALIGN='justify' style={{marginTop: '15px', marginLeft: '10px', marginRight: '5px'}}> <em><b>Configuraciones Físicas del Campo</b></em></p>
        <hr style={{width: '410px', marginTop:'-5px'}}/>
        <p ALIGN='justify' style={{marginTop: '5px', marginLeft: '10px', marginRight: '5px'}}><em><b>&bull;</b></em> En esta parte se mostraran las propiedades principales de los valores físicos del metadato determinados por el dominio de la apliación.</p>
        <p ALIGN='justify' style={{marginTop: '5px', marginLeft: '10px', marginRight: '5px'}}><em><b>&bull;</b></em> Dentro de este apartado tendremos que modificar los campos de:</p>
        </div>
        <div className='card' style={{width: '450px', marginLeft: '65px', height:'220px'}}>
          <p ALIGN='justify' style={{marginTop: '16px', marginLeft: '10px', marginRight:'10px', fontSize:'13px'}}><i class="fas fa-check"></i><em><b>Nombre.-</b></em> en el que se indicara el nombre con el que será conocido el metadato para su creación</p>
          <p ALIGN='justify' style={{marginLeft: '10px', marginRight: '5px', fontSize:'13px', lineHeight: '15px'}}><i class="fas fa-check"></i><em><b>Tipo de Dato- </b></em>entendido como la clase de datos que se manejaremos en la apliación, como lo es numérico, boolean, varchar,etc. </p>
          <p ALIGN='justify' style={{marginLeft: '10px', marginRight: '5px', fontSize:'13px', lineHeight: '15px'}}><i class="fas fa-check"></i><em><b>Longitud.- </b></em>el espacio en longitud que la cadena de caracteres tendra de acuerdo a lo que busquemos.</p>
          <p ALIGN='justify' style={{marginLeft: '10px', marginRight: '5px', fontSize:'13px', lineHeight: '15px'}}><i class="fas fa-check"></i><em><b>Precisión.- </b></em>Entendido en el caso de que el tipo de valor sea numérico la cantidad de decimales que podrá tener.</p>
          <p ALIGN='justify' style={{marginLeft: '10px', marginRight: '5px', fontSize:'13px', lineHeight: '15px'}}><i class="fas fa-check"></i><em><b>Botones.- </b></em>Además se anexan botones con opciones a activar indicando si la vista es la llave primaria, valor único o si permite valores nulos.</p>
      </div>
    </div>;

      
     /*del cual se desplegaran dos <br/>opciones: , al dar enter al primer<br/> campo se mostrara un listado con todos los valores discretos <br/>creados, elegir y seleccionarel deseado 
       y en el caso de la<br/>  segunda opción en caso de existir varios bloques de <br/> igual forma damos enter y buscamos en bloque <br/> el adecuado, en casode contar sólo con uno el <br/>paso anterior no será necesario ya que en <br/>automático el sistema lo seleccionara.</p>;*/
    case 4:
      return <div>
      <div className='card' style={{width: '450px', marginLeft: '65px', height:'220px'}}>
        <p ALIGN='justify' style={{marginTop: '15px', marginLeft: '10px', marginRight: '5px'}}> <em><b>Comportamiento del Campo</b></em></p>
        <hr style={{width: '410px', marginTop:'-5px'}}/>
        <p ALIGN='justify' style={{marginTop: '5px', marginLeft: '10px', marginRight: '5px'}}><em><b>&bull;</b></em> En esta parte estableceremos el estado de nuestro objeto, mediante la modificación de atributos principales (posición (translación),tamaño (escala), orientación (rotación) o apariencia) de acuerdo al resultado final que esperamos.</p>
        </div>
        <div className='card' style={{width: '450px', marginLeft: '65px', height:'220px'}}>
          <p ALIGN='justify' style={{marginTop: '5px', marginLeft: '10px', marginRight: '5px'}}><em><b>&bull;</b></em> Dentro de este apartado tendremos que modificar los campos de:</p>
          <p ALIGN='justify' style={{marginTop: '-5px', marginLeft: '10px', marginRight:'10px', fontSize:'13px'}}><i class="fas fa-check"></i><em><b>Etiqueta.-</b></em> en el que se indicara el nombre con el que daremos a conocer el metadato ante el cliente.
          </p>
          <p ALIGN='justify' style={{marginLeft: '10px', marginRight: '5px', fontSize:'13px', lineHeight: '15px'}}><i class="fas fa-check"></i><em><b>Control.- </b></em>Apartado en la que se determinara el tipo de control por el cual podremos obtener una entrada de datos, por ejemplo textBox, comboBox, dateTime, checkBox, etc. </p>
          <p ALIGN='justify' style={{marginLeft: '10px', marginRight: '5px', fontSize:'13px', lineHeight: '15px'}}><i class="fas fa-check"></i><em><b>Ubicación.- </b></em>localización física del código que define el comportamiento.</p>
        </div>
        <div className='card' style={{width: '450px', marginLeft: '65px', height:'220px'}}>
          <p ALIGN='justify' style={{marginTop: '15px', marginLeft: '10px', marginRight: '5px', fontSize:'13px', lineHeight: '15px'}}><i class="fas fa-check"></i><em><b>Valor nulo default.- </b></em>estableceremos si habran datos nulos o no en la aplicación.</p>
          <p ALIGN='justify' style={{marginLeft: '10px', marginRight: '5px', fontSize:'13px', lineHeight: '15px'}}><i class="fas fa-check"></i><em><b>Formato.- </b></em>Si se desea tener una estructura determinada, ejemplo Money, Percent, Date, etc.</p>
          <p ALIGN='justify' style={{marginLeft: '10px', marginRight: '5px', fontSize:'13px', lineHeight: '15px'}}><i class="fas fa-check"></i><em><b>Estilo del campo.- </b></em>estableceremos si habran datos nulos o no en la aplicación.</p>
          <p ALIGN='justify' style={{marginLeft: '10px', marginRight: '5px', fontSize:'13px', lineHeight: '15px'}}><i class="fas fa-check"></i><em><b>Width.- </b></em>Establecer el ancho de los objetos a mostrar en la aplicación.</p>
          <p ALIGN='justify' style={{marginLeft: '10px', marginRight: '5px', fontSize:'13px', lineHeight: '15px'}}><i class="fas fa-check"></i><em><b>Height.- </b></em>Indicar la altura de los objetos en la aplicación.</p>
        </div>
        <div className='card' style={{width: '450px', marginLeft: '65px', height:'220px'}}>
          <p ALIGN='justify' style={{marginTop: '18px', marginLeft: '10px', marginRight: '5px', fontSize:'13px', lineHeight: '18px'}}><i class="fas fa-check"></i><em><b>Tipo de validación.- </b></em>Con este campo nos aseguramos de establcer criterios o reglas que comprueben la significación y seguridad de los datos, procurando que el programa funcione de manera ordenada, correcta y útil, ejemplo números enteros, decimales, alfabetico, etc.</p>
          <p ALIGN='justify' style={{marginLeft: '10px', marginRight: '5px', fontSize:'13px', lineHeight: '18px'}}><i class="fas fa-check"></i><em><b>Semáforo.- </b></em> En esta opción se determinara la estructura mediante la cual sincronizaremos los procesos que haran que la ejecución del código de realice de manera ordenada.</p>
          <p ALIGN='justify' style={{marginLeft: '10px', marginRight: '5px', fontSize:'13px', lineHeight: '18px'}}><i class="fas fa-check"></i><em><b>Valor sumarizado.- </b></em> Campo en el que podremos establecer funciones de operaciones matemàticas, ejemplo AVG, SUM, etc.</p>
          <p ALIGN='justify' style={{marginLeft: '10px', marginRight: '5px', fontSize:'13px', lineHeight: '15px'}}><i class="fas fa-check"></i><em><b>Botones.- </b></em>Además se anexan botones con opciones a activar como que el archivo sea solo lectura, el valor sea requerido y si el texto es multilínea.</p>
        </div>
      </div>;
    case 5:
      return <div>
      <div className='card' style={{width: '450px', marginLeft: '65px', height:'220px'}}>
        <p ALIGN='justify' style={{marginTop: '18px', marginLeft: '10px', marginRight: '5px'}}> <em><b>Documentación</b></em></p>
        <hr style={{width: '410px', marginTop:'5px'}}/>
        <p ALIGN='justify' style={{marginTop: '5px', marginLeft: '10px', marginRight: '5px'}}><em><b>&bull;</b></em> En esta división se adjuntaran y anexaran los textos o documentos relacionados con la estructura del sistema, así como los valores discretos creados.</p>
        <p ALIGN='justify' style={{marginTop: '5px', marginLeft: '10px', marginRight: '5px'}}><em><b>&bull;</b></em> En este apartado los campos a manipular seran:</p>
        </div>
        <div className='card' style={{width: '450px', marginLeft: '65px', height:'220px'}}>
          <p ALIGN='justify' style={{marginTop: '25px', marginLeft: '10px', marginRight:'10px', fontSize:'13px'}}><i class="fas fa-check"></i><em><b>Composición nombre lógico.-</b></em>Nombre para identificar los documentos adjuntados.
          </p>
          <p ALIGN='justify' style={{marginLeft: '10px', marginRight: '5px', fontSize:'13px', lineHeight: '18px'}}><i class="fas fa-check"></i><em><b>Texto para documentación.- </b></em>Explicación del Valor Discreto en caso de considerarse complejo. </p>
          <p ALIGN='justify' style={{marginLeft: '10px', marginRight: '5px', fontSize:'13px', lineHeight: '18px'}}><i class="fas fa-check"></i><em><b>¿Es campo relacionado?.- </b></em>Relación con vistas configuradas creadas con anterioridad.</p>
          <p ALIGN='justify' style={{marginLeft: '10px', marginRight: '5px', fontSize:'13px', lineHeight: '18px'}}><i class="fas fa-check"></i><em><b>¿Es valor discreto?.- </b></em>Selección y anexo de los valores discretos creados.</p>
        </div>     
      </div>
    case 6:
      return <div>
        <div className='card' style={{width: '450px', marginLeft: '65px', height:'220px'}}>
          <p ALIGN='justify' style={{marginTop: '15px', marginLeft: '10px', marginRight: '5px'}}> <em><b>Acciones de campos</b></em></p>
          <hr style={{width: '410px', marginTop:'-5px'}}/>
          <p ALIGN='justify' style={{marginTop: '5px', marginLeft: '10px', marginRight: '5px'}}><em><b>&bull;</b></em> En esta parte encontraremos pestañas de acciones que podremos implementar, como calculos, e-mail, secuencias, etc.</p>
          <p ALIGN='justify' style={{marginTop: '15px', marginLeft: '10px', marginRight: '5px'}}><em><b>&bull;</b></em> Las pestañas que principalmente se usaran serán:</p>
        </div>
        <div className='card' style={{width: '450px', marginLeft: '65px', height:'220px'}}>
          <p ALIGN='justify' style={{marginTop: '30px', marginLeft: '10px', marginRight:'10px', fontSize:'13px', lineHeight: '18px'}}><i class="fas fa-check"></i><em><b>Agregar.-</b></em> Representado como botón con símbolo de más, el cual cada vez que se use creara una nueva pestaña de vista configurada.
          </p>
          <p ALIGN='justify' style={{marginLeft: '10px', marginRight: '5px', fontSize:'13px', lineHeight: '18px'}}><i class="fas fa-check"></i><em><b><img src='../sigma.png' alt='operación' width='10px' height='11px'/> Calc- </b></em>Podremos agregar calculos matemáticos u operaciones que deseamos realizar. </p>
          <p ALIGN='justify' style={{marginLeft: '10px', marginRight: '5px', fontSize:'13px', lineHeight: '18px'}}><i class="fas fa-check"></i><em><b>Seq.- </b></em>Si queremos crear una secuencia de datos, ejemplo tipo continuo con numeración.</p>
        </div>     
      </div>
    default:
      return <div>
      <div className='card' style={{width: '450px', marginLeft: '65px', height:'220px'}}>
        <p ALIGN='justify' style={{marginTop: '15px', marginLeft: '10px', marginRight: '5px'}}> <em><b>Acciones VC</b></em></p>
        <hr style={{width: '410px', marginTop:'-5px'}}/>
        <p ALIGN='justify' style={{marginTop: '5px', marginLeft: '10px', marginRight: '5px'}}><em><b>&bull;</b></em> integrado por tres botones para vista previa y salvado de los datos establecidos.</p>
        <p ALIGN='justify' style={{marginTop: '15px', marginLeft: '10px', marginRight: '5px'}}><em><b>&bull;</b></em>Este apartado se dividira en:</p>
        </div>
        <div className='card' style={{width: '450px', marginLeft: '65px', height:'220px'}}>
          <p ALIGN='justify' style={{marginTop: '30px', marginLeft: '10px', marginRight:'10px', fontSize:'13px', lineHeight: '18px'}}><i class="fas fa-check"></i><em><b>Vista previa.-</b></em> Despliegue de vista preliminar de los metadatos creados para su revisión final.
          </p>
          <p ALIGN='justify' style={{marginLeft: '10px', marginRight: '5px', fontSize:'13px', lineHeight: '18px'}}><i class="fas fa-check"></i><em><b>Salvar y continuar- </b></em>Almacenamiento de la información generada permitiendonos continuar usando la aplicación. </p>
          <p ALIGN='justify' style={{marginLeft: '10px', marginRight: '5px', fontSize:'13px', lineHeight: '18px'}}><i class="fas fa-check"></i><em><b>Salvar y cerrar.- </b></em>Cierre de la aplicación una vez se hayan guardado los datos finales.</p>
        </div>     
      </div>
  }
}


function getStepImage(step) {
    switch (step) {
      case 0:
        return <img src='/Pantallas/pantalla19.png' alt='img1' width='500px' height='280px' style={{ borderStyle: 'solid' , borderWidth:'3px', marginLeft: '10px'}} />;
      case 1:
        return <img src= '/Pantallas/pantalla20.png' alt="img2" width='500px' height='280px' style={{borderStyle: 'solid' , borderWidth:'3px'}}/>;
      case 2:
        return <img src='/Pantallas/pantalla30.png' alt="img3" width='500px' height='280px' style={{ borderStyle: 'solid' , borderWidth:'3px'}}/>;
      case 3:
        return <img src='/Pantallas/pantalla22.png' alt="img4" width='500px' height='280px' style={{borderStyle: 'solid' , borderWidth:'3px'}}/>;
      case 4:
        return <img src='/Pantallas/pantalla21.png' alt="img5" width='500px' height='280px' style={{borderStyle: 'solid' , borderWidth:'3px'}}/>;
      case 5:
        return <img src='/Pantallas/pantalla17.png' alt="img6" width='500px' height='280px' style={{borderStyle: 'solid' , borderWidth:'3px'}}/>;
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
