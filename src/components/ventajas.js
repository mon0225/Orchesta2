import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '130%',
    marginLeft: '10px'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    fontFamily: 'montserrat'
  },
}));

function ControlledExpansionPanels() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <i class="material-icons">
                    dashboard
                </i>
                <Typography style={{marginLeft: '10px'}} className={classes.secondaryHeading}>  Página web profesional  </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography style={{marginLeft: '30px', fontSize: '13px', fontFamily: 'montserrat'}}>
                    - Genera un resultado profesional con un diseño moderno y elegante.
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
            >
                 <i style={{fontSize: '20px'}}class="fas fa-database"></i>
                <Typography style={{marginLeft: '15px'}} className={classes.secondaryHeading}>
                    Uso de base de datos
                </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography style={{marginLeft: '30px', fontSize: '13px', fontFamily: 'montserrat'}}>
                    - Permite el uso de BD existentes o nuevas para manipular datos, además de dar opción de descargar el archivo final en formatos tipo MySQL, SQL, BDL o server local.
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
            >
                <i class="material-icons">
                    code
                </i>
                <Typography style={{marginLeft: '10px', }} className={classes.secondaryHeading}>
                    Ejecución del código
                </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography style={{marginLeft: '30px', fontSize: '13px', fontFamily: 'montserrat'}}>
                    -Agiliza las horas de trabajo del programador reduciendo al mìnimo la integración de código.
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
            >
                <i class="material-icons">
                    perm_identity
                </i>
                <Typography style={{marginLeft: '10px'}} className={classes.secondaryHeading}>
                    Control de seguridad
                </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography style={{marginLeft: '30px', fontSize: '13px', fontFamily: 'montserrat'}}>
                    - Integración de perfil de administrador con los datos de seguridad para su acceso.
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel5bh-content"
                id="panel5bh-header"
            >
                <i class="material-icons">
                    settings_applications
                </i>
                <Typography style={{marginLeft: '10px'}} className={classes.secondaryHeading}>
                    Control de modificaciones
                </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography style={{marginLeft: '30px',fontSize: '13px', fontFamily: 'montserrat'}}>
                    - En caso de modificar el resultado se manejan sólo dos opciones en formato XML o en la misma aplicación.
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
  );
}

export default ControlledExpansionPanels;








