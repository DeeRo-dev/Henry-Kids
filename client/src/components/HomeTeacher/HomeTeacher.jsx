import React ,{ useState, useEffect }from "react";
import { useDispatch, useSelector } from "react-redux";
import NavTeacher from "../NavTeacher/NavTeacher.jsx";
import Pagination from "../Pagination/Pagination.jsx";
import styles from "./HomeTeacher.module.css";
import { auth } from "../../firebase/firebaseConfig";
import { useNavigate } from "react-router";
 import CardTeacher from "../CardTeacher/CardTeacher.jsx";
import { getAllClassTeacher } from "../../actions/index.js";


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

  const allClassTeacher = useSelector((state) => state.allClassTeacher);

  const dispatch = useDispatch();
 
  
  let cardsInPage = 8;
  let [page, setPage] = useState (1);

  useEffect (() => {
    setPage (1);
  }, []);

  let currentPage;
  let indexLastPage = page * cardsInPage;
  let indexFirstPage = indexLastPage - cardsInPage;

  allClassTeacher.length > 9
    ? (currentPage = allClassTeacher.slice (indexFirstPage, indexLastPage))
    : (currentPage = allClassTeacher);

  
    function Paginate (e, num) {
    e.preventDefault ();
    setPage (num);
  }
  
  let idUser = window.localStorage.sessionUser 
   
   useEffect(() => {
    dispatch(getAllClassTeacher(idUser))
  }, [idUser, dispatch]);


  // window.localStorage.type
  
  return (
    <div className={styles.home}>
      <div className={styles.nav}>
      <NavTeacher />
      </div>
    

      <div className={styles.cards}>
      {currentPage.map((e) => { 
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

      <div>
           <Pagination cardsInPage={cardsInPage} totalElements={allClassTeacher.length}
          paginate={Paginate} /> 
      </div>
      

    </div>
  );
}
