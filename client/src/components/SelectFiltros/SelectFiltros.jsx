import React ,{useEffect, useState}from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import style from "./SelectFiltros.module.css"
import { useDispatch, useSelector } from "react-redux";
import { getAllClasses, getAlumnos,getProfesores, getUser} from "../../actions";
import CardClasseAdmin from "../CardClasseAdmin/CardClasseAdmin.jsx";
import CardAlumnos from '../CardAlumno/CardAlumno';
import Pagination from '../Paged/Paged.jsx';
import CardDatosProfe from '../CardDatosProfe/CardDatosProfe.jsx';


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
  },[dispatch])
  const allClasses = useSelector((state) => state.allClasses);

  //TRAER  LOS AlUMNOS
 
  useEffect(() => {
    dispatch(getAlumnos())
  },[dispatch])
  const allAlumnos = useSelector((state) => state.userStudent);
 
  // console.log(allAlumnos)



 //TRAER LOS PROFESOREs
 useEffect(() => {
   dispatch(getProfesores())
 },[dispatch])
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
    Profesores:false,
    Alumnos: false,
    
  });

  const handleChange = (event) => {
   
    setState({ ...state, 
      [event.target.name]: event.target.checked });
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
  
        <div>
           {
          state.Clases ? (
              <div>
              <div className={style.contentCards} id="cards" >
        
             {
            currentPage.map((e) => { 
               return (
                  <div key= {e.id} className={style.card}> 
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
        
             {
               
               allAlumnos?.map((e) => { 
            
                  return (
                    <div key={e.id}>
                  
                  <CardAlumnos key= {e.id}
                    firstName={e.firstName}
                    lastName={e.lastName}
                    userName={e.userName}
                    id={e.id} 
                    email={e.email}
                   />
                   </div>
                
                   )
             } 
             )} 
           
            </div>
          ) : null
           
        }
  
        {
          state.Profesores ? (

              <div >
        
             {
               
               allProfesores?.map((e) => { 
                return (
                  <div>
                   
                                
                 {
                   <CardDatosProfe 
                     key= {e.id}
                     firstName={e.firstName}
                     lastName={e.lastName}
                     userName={e.userName}
                     id={e.id} 
                     email={e.email}
                     dni={e.dni}
                     cuentaBancaria={e.cuentaBancaria}
                     linkedin={e.linkedin}
                     pais={e.pais}
                     region={e.region}
                    fecha={e.fecha}
                   /> 
                  }
                     </div> 
                   )
           
             } 
             )} 
            
            </div>
          ) : null
           
        }
        </div>
        
  </div>

 );  
}
