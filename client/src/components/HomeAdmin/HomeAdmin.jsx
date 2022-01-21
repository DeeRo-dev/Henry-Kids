import React, { useEffect, useState } from "react";
// import style from "./HomeAdmin.module.css";

// import { useNavigate } from "react-router-dom";
// import CheckboxLabels from "../SelectFiltros/SelectFiltros.jsx";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import style from "./HomeAdmin.module.css"
import { useDispatch, useSelector } from "react-redux";
import { getAllClasses,getUser } from "../../actions";
import CardClasseAdmin from "../CardClasseAdmin/CardClasseAdmin.jsx";
import Pagination from '../Paged/Paged.jsx';
import TablaDeStudent from "../TablaAdminStudent/TablaAdminStudent.jsx"
import TablaAdminTeacher from '../TablaAdminTeacher/TablaAdminTeacher';
// import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import NavAdmin from "../NavAdmin/NavAdmin.jsx"
import Footer from "../Footer/Footer.jsx"
export default function HomeAdmin() {


  const dispatch = useDispatch();
  //TRAER EL NOMBRE DEL ADMIN
  
  useEffect(() => {
    const id = window.localStorage.sessionUser;
    dispatch(getUser(id))
  }, [dispatch])
 
  const adminDatos = useSelector((state) => state.user);


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
    Clases: true,
    Profesores: false,
    Alumnos: false,
  });
  const handleChange = (event) => {
    if(event.target.name === "Clases"){
        setState({
            Clases: true,
            Profesores: false,
            Alumnos: false    
        })
    }
    if(event.target.name === "Profesores"){
        setState({
            Profesores: true,
            Clases: false,
            Alumnos: false
        })
    }
    if(event.target.name === "Alumnos"){
        setState({
            Alumnos: true,
            Clases: false,
            Profesores: false,
        })
    }
  }

  

  return (
    <div className={style.content}>
     
  <NavAdmin state={state} adminDatos={adminDatos}/>

  {/* ------------CHECKBOX------------ */}


  <div className={style.contentFiltrosYCards}>
      <div className={style.contentFiltros}>
        <FormGroup className={style.check} row>
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
      <div className={style.cardsYTables}>
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
                          categories={e.categories}
                          description={e.description}
                          video_link={e.video_link}
                          difficulty={e.difficulty}
                          game_link={e.game_link}
                          valoration={e.Evaluations[0].Promedio}
                        />
                      </div>)
                  }
                  )}

              </div >
              <div  className={style.pagination}>
              <Pagination
                cardsInPage={cardsInPage}
                totalElements={allClasses.length}
                paginate={Paginate}
               
              />
                </div>
            </div>
          ) : null
        }

      </div>

      {/* //MOSTRAR ALUMNOS */}
      <div className={style.tables}>
        {
          state.Alumnos ? (

            <div className={style.contentTable}>

              <TablaDeStudent />
            </div>
          ) : null

        }
      </div>

      {/* //MOSTRAR TABLA DE PROFESORES */}
      
      <div className={style.contentTable}>
        {state.Profesores && (
          <TablaAdminTeacher />)
        }
      </div>



    </div>
    <Footer/>
    </div>
  );

}
