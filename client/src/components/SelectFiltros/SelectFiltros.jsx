import React, { useEffect, useState } from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import style from "./SelectFiltros.module.css"
import { useDispatch, useSelector } from "react-redux";
import { getAllClasses } from "../../actions";
import CardClasseAdmin from "../CardClasseAdmin/CardClasseAdmin.jsx";
import Pagination from '../Paged/Paged.jsx';
import TablaDeStudent from "../TablaAdminStudent/TablaAdminStudent.jsx"
import TablaAdminTeacher from '../TablaAdminTeacher/TablaAdminTeacher';

//importar la tabla

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

  //tRAER TODAS LAS CLASES
  useEffect(() => {
    dispatch(getAllClasses())
  }, [dispatch])
  const allClasses = useSelector((state) => state.allClasses);

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
      <div className={style.cosas}>
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

      {/* //MOSTRAR ALUMNOS */}
      <div>
        {
          state.Alumnos ? (

            <div >

              <TablaDeStudent />
            </div>
          ) : null

        }
      </div>

      {/*      //MOSTRAR TABLA DE PROFESORES */}
      
      <div>
        {state.Profesores && (
          <TablaAdminTeacher />)
        }
      </div>



    </div>

  );
}
