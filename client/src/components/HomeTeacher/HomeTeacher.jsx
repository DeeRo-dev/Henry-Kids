import React ,{ useState, useEffect }from "react";
import /*  useDispatch, useSelector */ "react-redux";

import { useDispatch, useSelector } from "react-redux";
import NavTeacher from "../NavTeacher/NavTeacher.jsx";
import Pagination from "../Pagination/Pagination.jsx";
// import { styled } from "@material-ui/core";
import styles from "./HomeTeacher.module.css";
import { auth } from "../../firebase/firebaseConfig";
import { useNavigate } from "react-router";
// import Card from "../Card/Card.jsx";
// import { getAllclasses } from "../../actions/index.js";
 import CardTeacher from "../CardTeacher/CardTeacher.jsx";
import { getAllClassTeacher } from "../../actions/index.js";
import { useParams } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  function signOutUser(e) {
    auth
      .signOut(auth)
      .then(() => {
        navigate("/");
        window.location.reload()
        localStorage.clear()
        console.log("done");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // const dispatch = useDispatch();
  // useEffect(() => dispatch(getAllclasses()), [dispatch]);
  
  // let cardsInPage = 8;
  // let [page, setPage] = useState (1);

  // useEffect (() => {
  //   setPage (1);
  // }, []);

  // let currentPage;
  // let indexLastPage = page * cardsInPage;
  // let indexFirstPage = indexLastPage - cardsInPage;

  // allClasses.length > 9
  //   ? (currentPage = allClasses.slice (indexFirstPage, indexLastPage))
  //   : (currentPage = allClasses);

  // function Paginate (e, num) {
  //   e.preventDefault ();
  //   setPage (num);
  // }
  
  
var array = [{
  id:12,
  title:'altoCurso',
  category: 'java',
  description:'uncursito de java ',
  video_link: 'https://www.youtube.com/watch?v=RqQ1d1qEWlE',
  difficulty: 'Basica',
  game_link:'https://www.youtube.com/watch?v=3crsQUKgaDc',
  
},
{
 id:12,
  title:'Clase23',
  category: 'Objetos',
  description:'un curso orientado a la programacion de onjetos ',
  video_link: 'https://www.youtube.com/watch?v=rbuYtrNUxg4',
  difficulty: 'Basica',
  game_link:'https://www.youtube.com/watch?v=3crsQUKgaDc',
}
] 
  // const allClassTeacher = useSelector((state) => state.allClassTeacher);

  // const { id } = useParams();
  //  const dispatch = useDispatch();

  //  useEffect(() => {
  //   dispatch(getAllClassTeacher(id));
  // }, [id, dispatch]);

  return (
    <div className={styles.home}>
      <div className={styles.nav}>
      <NavTeacher />
      <button onClick={signOutUser}> Salir </button>
      </div>
    
    
 
   
      {/* <div>
           <Pagination cardsInPage={cardsInPage} totalElements={allClasses.length}
          paginate={Paginate} /> 
      </div>
       */}


      <div className={styles.cards}>
      {array.map((e) => { 
        return (
        <div key= {e.id}> 
         <CardTeacher 
        id={e.id}
        title={e.title}
        category={e.category}
        description={e.description}
        video_link={e.video_link}
        difficulty={e.difficulty}
        game_link={e.game_link}
        valoration={e.valoration}
        /> </div>)}
      )} 
      </div>

    </div>
  );
}
