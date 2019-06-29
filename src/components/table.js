import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '43%',
    marginTop: '-30px',
    xs: 12, 
    sm: 12, 
    md: 12,
    lineHeight: '10px',
    marginLeft: '-100px'
  },
  paper: {
    marginTop: theme.spacing(3),
    width: '100%',

    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 220,
    fontSize: '3px',
    lineHeight: '10px'
  },
}));

function createData(name) {
  return { name };
}

const rows = [
  createData('Configuraciones principales'),
  createData('Acciones VC'),
  createData('Acciones de campo'),
  createData('Configuraciones físicas del campo'),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Paper className={classes.paper}>
      <Table className={classes.table} size="small">
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
  );
}
