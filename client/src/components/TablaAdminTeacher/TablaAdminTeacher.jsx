import React, {useEffect, useState} from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import { green } from '@material-ui/core/colors';
import style from './TablaAdminTeacher.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {  getProfesores, deleteUserAll,} from '../../actions';
//importar la tabla
import {makeStyles} from '@material-ui/core/styles';
// import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import CancelIcon from '@material-ui/icons/Cancel';

export default function TablaAdminTeacher () {
  const dispatch = useDispatch ();
  useEffect (
    () => {
      dispatch (getProfesores ());
    },
    [dispatch]
  );

  const allProfesores = useSelector (state => state.userTeacher);

  const useStyles = makeStyles ({
    root: {
      width: '70%',
    },
    container: {
      maxHeight: 440,
    },
  });
  const classes = useStyles ();
  const [page, setPage] = React.useState (0);
  const [rowsPerPage, setRowsPerPage] = React.useState (5);

  const handleChangePage = (event, newPage) => {
    setPage (newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage (+event.target.value);
    setPage (0);
  };

  const columns = [
    {id: 'lastName', label: 'Apellido', minWidth: 10},
    {id: 'firstName', label: 'Nombre', minWidth: 10},
    {id: 'id', label: 'ID', minWidth: 80},
    {id: 'email', label: 'Email', minWidth: 30},
    {id: 'type', label: 'Type/Usuario', minWidth: 20},
    {
      id: 'dni',
      label: 'DNI',
      minWidth: 30,
      align: 'right',
      format: value => value.toLocaleString ('en-US'),
    },
    {
      id: 'linkedin',
      label: 'linkedin',
      minWidth: 60,
      align: 'right',
      format: value => value.toLocaleString ('en-US'),
    },
    {
      id: 'cuentaBancaria',
      label: 'Datos Bancarios',
      minWidth: 20,
      align: 'right',
      format: value => value.toFixed (2),
    },
    // {
    //   id: 'imgDni',
    //   label: 'Img-DNI',
    //   minWidth: 70,
    //   align: 'right',
    //   format: value => value.toLocaleString ('en-US'),
    // },
  ];
  // let acceptIcon = <CheckCircleIcon className={style.btnCheck}  onClick={(rows)=>onClickAccept(rows)}/>
  // let rejectIcon = <CancelIcon className={style.btnClose} onClick={onClickRechazar}/>

  function createData (
    lastName,
    firstName,
    type,
    id,
    linkedin,
    dni, 
    cuentaBancaria,     
    email,
    // dniImag,
  ) {
    return {
      lastName,
      firstName,
      type,
      id,
      linkedin,
      dni, 
      cuentaBancaria,     
      email,
      // dniImag,
    };
  }

  const rows = allProfesores.map (user =>
    createData (
      user.lastName,
      user.firstName,
      user.type,
      user.id,
      user.linkedin,
      user.dni,
      user.cuentaBancaria,
      user.email,   
      // user.dniImag
    )
  );

  function onClickRechazar (id) {
    dispatch (deleteUserAll(id));
  }

  return (
    <div>

      <Paper className={style.contentTable}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map (column => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{minWidth: column.minWidth}}
                  >

                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice (page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map (row => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >

                      {columns.map (column => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format (value)
                              : value}
                          </TableCell>
                        );
                      })}

                      <CancelIcon
                        className={style.btnClose}
                        onClick={() => onClickRechazar (row.id)}
                      />
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
