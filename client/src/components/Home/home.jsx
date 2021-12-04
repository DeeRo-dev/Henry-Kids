import React, {  useState,  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../Nav/Nav.jsx";
// import {styled} from '@material-ui/core';
import styles from "./Home.module.css";
import Card from "../Card/Card.jsx";
import { editUser, getAllclasses/* ,getUser   */} from "../../actions/index.js";
import Pagination from "../Pagination/Pagination.jsx";
// // import { auth } from "../../firebase/firebaseConfig.js";
import { Link } from "react-router-dom";

export default function Home() {
  
  const dispatch = useDispatch();
  const allClasses = useSelector((state) => state.allClasses);
 
  let [page, setPage] = useState(1);
  let cardsInPage = 8;

  let currentPage;
  let indexLastPage = page * cardsInPage;
  let indexFirstPage = indexLastPage - cardsInPage;

  if (allClasses.length > 8){
    currentPage = allClasses.slice(indexFirstPage, indexLastPage)
  } else currentPage = allClasses;

    useEffect(() => {
      setPage(1);
    }, []); 
  
  
  useEffect(() => {
    dispatch(getAllclasses());
    dispatch(
      editUser("provi", {
        id: window.localStorage.sessionUser,
      })
    );
  }, [dispatch]);


  

  function Paginate(e, num) {
    e.preventDefault();
    setPage(num);
  }

  return (
    <div className={styles.home}>
      <div>
        <Nav />
      </div>

      <div className={styles.cards}>
        {currentPage?.map((e) => {
          return (
            <div key={e.id}>
              <Link to={"/home/student/" + e.id}>
                <Card
                  id={e.id}
                  title={e.title}
                  category={e.category}
                  description={e.description}
                  video_link={e.video_link}
                  difficulty={e.difficulty}
                  game_link={e.game_link}
                  valoration={e.valoration}
                />{" "}
              </Link>
            </div>
          );
        })
        
        }
      </div>
      
      <div>
        <Pagination
          cardsInPage={cardsInPage}
          totalElements={allClasses.length}
          paginate={Paginate}
        />
      </div>
    </div>
  );
}
