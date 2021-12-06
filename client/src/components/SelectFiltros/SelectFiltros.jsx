import React ,{useEffect, useState}from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import style from "./SelectFiltros.module.css"
import { useDispatch, useSelector } from "react-redux";
import { getAllclasses} from "../../actions";
import CardClasseAdmin from "../CardClasseAdmin/CardClasseAdmin.jsx";
import Pagination from '../Pagination/Pagination.jsx';
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
  const allClasses = useSelector((state) => state.allClasses);
  useEffect(() => {
    dispatch(getAllclasses())
  },[dispatch])

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
    Profesores:true,
    Alumnos: true,
    
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
  <div>

 <div>
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
  
  
        {
          state.Clases ? (

              <div className={style.contentCards} id="cards" >
        
             {
            currentPage.map((e) => { 
               return (
                  <div key= {e.id}> 
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
           <Pagination
                    cardsInPage={cardsInPage}
                    totalElements={allClasses.length}
                    paginate={Paginate}
                />
            </div>
          ) : null
           
        }
  
  </div>

 );  
}
