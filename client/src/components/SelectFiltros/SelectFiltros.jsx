import React, { useEffect, useState } from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import style from "./SelectFiltros.module.css"
import { useDispatch, useSelector } from "react-redux";
import { getAllClasses, getAlumnos, getProfesores, getUser, deleteUser } from "../../actions";
import CardClasseAdmin from "../CardClasseAdmin/CardClasseAdmin.jsx";
import CardAlumnos from '../CardAlumno/CardAlumno';
import Pagination from '../Paged/Paged.jsx';
import CardDatosProfe from '../CardDatosProfe/CardDatosProfe.jsx';
//importar la tabla
import { makeStyles } from '@material-ui/core/styles';
// import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
// const GreenCheckbox = withStyles({
//   root: {
//     color: green[400],
//     '&$checked': {
//       color: green[600],
//     },
//   },
//   checked: {},
// })((props) => <Checkbox color="default" {...props} />);

export default function CheckboxLabels() {
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.user);
  // useEffect(() => {
  //   dispatch(getUser('all'))
  // },[dispatch])


  //tRAER TODAS LAS CLASES


  useEffect(() => {
    dispatch(getAllClasses())
  }, [dispatch])
  const allClasses = useSelector((state) => state.allClasses);

  //TRAER  LOS AlUMNOS

  useEffect(() => {
    dispatch(getAlumnos())
  }, [dispatch])
  const allAlumnos = useSelector((state) => state.userStudent);

  // console.log(allAlumnos)



  //TRAER LOS PROFESOREs
  useEffect(() => {
    dispatch(getProfesores())
  }, [dispatch])
  const allProfesores = useSelector((state) => state.userTeacher);


  //PAGINADO
  let cardsInPage = 8;
  let [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, []);

  let currentPage;
  let indexLastPage = page * cardsInPage;
  let indexFirstPage = indexLastPage - cardsInPage;

  allClasses.length > 9
    ? (currentPage = allClasses.slice(indexFirstPage, indexLastPage))
    : (currentPage = allClasses);

  function Paginate(e, num) {
    e.preventDefault();
    setPage(num);
  }


  const [state, setState] = React.useState({
    Clases: false,
    Profesores: false,
    Alumnos: false,

  });

  const handleChange = (event) => {

    setState({
      ...state,
      [event.target.name]: event.target.checked
    });
    // console.log(event.target.name )
    // if(event.target.name=== 'Clases' && event.target.checked === true){

    //   console.log('Mostrar cursos')
    // }else if(event.target.name=== 'Clases' && event.target.checked !== true){
    //   console.log('No Mostrar cursos')
    // }
  };
  const useStyles = makeStyles({
    root: {
      width: '70%',
    },
    container: {
      maxHeight: 440,
    },
  });

  //Estado de ALUMNOS
  const classes = useStyles();
  const [page2, setPage2] = React.useState(0);
  const [rowsPerPage2, setRowsPerPage2] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage2(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage2(+event.target.value);
    setPage2(0);
  };


  const columns = [{ id: 'lastName', label: 'Apellido', minWidth: 10 },
  { id: 'firstName', label: 'Nombre', minWidth: 10 },
  { id: 'id', label: 'ID', minWidth: 80 },
  { id: 'email', label: 'Email', minWidth: 30 },
  { id: 'type', label: 'Type/Usuario', minWidth: 20 },



  ];
  // let acceptIcon = <CheckCircleIcon className={style.btnCheck}  onClick={(rows)=>onClickAccept(rows)}/>
  // let rejectIcon = <CancelIcon className={style.btnClose} onClick={onClickRechazar}/>



  //alumnos
  function createData(lastName, firstName, id, email, type) {

    return { lastName, firstName, id, email, type };
  }


  const rows = allAlumnos.map((user) => createData(user.lastName, user.firstName, user.id, user.email, user.type))

  //----------------------------------------------------------------------------
  //profesores


  const columns1 = [{ id: 'lastName', label: 'Apellido', minWidth: 10 },
  { id: 'firstName', label: 'Nombre', minWidth: 10 },
  { id: 'id', label: 'ID', minWidth: 80 },
  { id: 'email', label: 'Email', minWidth: 30 },
  { id: 'type', label: 'Type/Usuario', minWidth: 20 },
  {
    id: 'dni',
    label: 'DNI',
    minWidth: 30,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'linkedin',
    label: 'linkedin',
    minWidth: 60,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'cuentaBancaria',
    label: 'Datos Bancarios',
    minWidth: 20,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'imgDni',
    label: 'Img-DNI',
    minWidth: 70,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },]


  function createData1(lastName, firstName, id, email, type, dni, linkedin, cuentaBancaria, dniImag) {
    return { lastName, firstName, id, email ,type, dni, linkedin, cuentaBancaria, dniImag };
  }

  const rows2 = allProfesores.map((user) => createData1(user.lastName, user.firstName, user.id, user.email, user.type,
    user.dni, user.linkedin, user.cuentaBancaria, user.dniImag))

  //Estado de profesores
  const classes1 = useStyles();
  const [page1, setPage1] = React.useState(0);
  const [rowsPerPage1, setRowsPerPage1] = React.useState(5);

  const handleChangePage1 = (event, newPage) => {
    setPage1(newPage);
  };

  const handleChangeRowsPerPage1 = (event) => {
    setRowsPerPage1(event.target.value);
    setPage1(0);
  };


  function onClickRechazar(id) {
    dispatch(deleteUser(id))
  }

  return (

    <div className={style.content}>

      <div className={style.contentFiltros}>
        <FormGroup row>

          <FormControlLabel
            control={
              <Checkbox
                checked={state.Clases}
                onChange={handleChange}
                name="Clases"
                color="primary"

              />
            }
            label="Clases"
            className={style.check}

          />

          <FormControlLabel
            control={
              <Checkbox
                checked={state.Profesores}
                onChange={handleChange}
                name="Profesores"
                color="primary"

              />
            }
            label="Profesores"
            className={style.check}
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={state.Alumnos}
                onChange={handleChange}
                name="Alumnos"
                color="primary"
              />
            }
            className={style.check}
            label="Alumnos"
          />

        </FormGroup>
      </div>

      <div>
        {
          state.Clases ? (
            <div>
              <div className={style.contentCards} id="cards" >

                {
                  //clases
                  currentPage.map((e) => {
                    return (
                      <div key={e.id} className={style.card}>
                        <CardClasseAdmin
                          id={e.id}
                          title={e.title}
                          category={e.category}
                          description={e.description}
                          video_link={e.video_link}
                          difficulty={e.difficulty}
                          game_link={e.game_link}
                          valoration={e.valoration}
                        />
                      </div>)
                  }
                  )}

              </div>
              <Pagination
                cardsInPage={cardsInPage}
                totalElements={allClasses.length}
                paginate={Paginate}
                className={style.pagination}
              />

            </div>
          ) : null

        }
      </div>
      <div>
        {
          state.Alumnos ? (

            <div >
              {/* //MOSTRAR ALUMNOS */}
              {

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
                        {rows.slice(page2 * rowsPerPage2, page2 * rowsPerPage2 + rowsPerPage2).map((row) => {
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
                    rowsPerPage={rowsPerPage2}
                    page={page2}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </Paper>
              }

            </div>
          ) : null
          //Mostrar PROFESORES
        }
        {
          state.Profesores ? (
            <div>
              
            {
              <Paper className={style.contentTable}>
                <TableContainer className={classes1.container}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        {columns1.map((column) => (
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
                      {rows2.slice(page1 * rowsPerPage1, page1 * rowsPerPage1 + rowsPerPage1).map((row) => {
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
                  rowsPerPage={rowsPerPage1}
                  page={page1}
                  onPageChange={handleChangePage1}
                  onRowsPerPageChange={handleChangeRowsPerPage1}
                />
              </Paper>
            
            }
            </div>
          ):null
        }
      </div>
    </div>

  );
}
