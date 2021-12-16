import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAlumnos, deleteUserAll } from "../../actions";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import style from "./TablaAdminStudent.module.css";
import CancelIcon from '@material-ui/icons/Cancel';



export default function TablaDeStudent(){

const dispatch = useDispatch();


//TRAER  LOS AlUMNOS
useEffect(() => {
  dispatch(getAlumnos())
}, [dispatch])
const allAlumnos = useSelector((state) => state.userStudent);


const useStyles = makeStyles ({
    root: {
      width: '70%',
   
    },
    container: {
      maxHeight: 440,
    },
  });

  //Estado de ALUMNOS
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const columns = [{ id: 'lastName', label: 'Apellido', minWidth: 10 },
  { id: 'firstName', label: 'Nombre', minWidth: 10 },
  { id: 'id', label: 'ID', minWidth: 80 },
  { id: 'email', label: 'Email', minWidth: 30 },
  { id: 'type', label: 'Type/Usuario', minWidth: 20 },
  ];


  //alumnos
  function createData(lastName, firstName, id, email, type) {
   return { lastName, firstName, id, email, type };
  }


  const rows = allAlumnos.map((user) => createData(user.lastName, user.firstName, user.id, user.email, user.type))

  function onClickRechazar(id) {
    dispatch(deleteUserAll(id));
  }

  return (
        <div>
         <Paper className={style.contentTable}>
           <TableContainer className={classes.container}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }}
              >

                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
            return (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>

                {columns.map((column) => {
                  const value = row[column.id];
                  return (

                    <TableCell key={column.id} align={column.align}>
                      {column.format && typeof value === 'number' ? column.format(value) : value}
                    </TableCell>
                  );
                })}

                <CancelIcon className={style.btnClose} onClick={() => onClickRechazar(row.id)} />
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
)

}