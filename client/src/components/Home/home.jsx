import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../Nav/Nav.jsx";
import { Link } from "react-router-dom";
import { styled } from "@material-ui/core";
import styles from "./Home.module.css";
import Card from "../Card/Card.jsx";
import { editUser, getAllClasses, getFavorites, getUser } from "../../actions/index.js";
import Paged from "../Paged/Paged.jsx";
import Footer from "../Footer/Footer.jsx"

export default function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllClasses());
    dispatch(getFavorites())
    dispatch(
      editUser("provi", {
        id: window.localStorage.sessionUser,
      })
    );
  }, [dispatch]);

  const allClasses = useSelector((state) => state.allClasses);
  const favorites = useSelector(state => state.favorites)

  useEffect(() => {
    dispatch(getUser(window.localStorage.sessionUser));
  }, [dispatch]);

/*    if (favorites) {
    for (let i = 0; i < favorites.length; i++) {
      for (let j = 0; j < allClasses.length; j++) {
        if (favorites[i].id === allClasses[i].id) {
          allClasses[i].isFav= true;
        } else allClasses[i].isFav= false
      }
    }
  }
 
 */
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


  allClasses.length > 8
    ? (currentPage = allClasses.slice(indexFirstPage, indexLastPage))
    : (currentPage = allClasses);

  function Paginate(e, num) {
    e.preventDefault();
    setPage(num);
  }

  return (
    <div className={styles.home}>
     <div className={styles.nav}>
        <Nav />
      </div>
      <div className={styles.cards}>
        {currentPage?.map((e) => {
         
          return (
            <div key={e.id}>
              <Card
                id={e.id}
                title={e.title}
                isFav={e.isFav}
                categories={e.categories[0]?.name}
                description={e.description}
                video_link={e.video_link}
                difficulty={e.difficulty}
                game_link={e.game_link}
                valoration={e.Evaluations[0].Promedio} 
              />{" "}
            </div>
          );  
        })}
      </div>

      <div className={styles.paged}>
        <Paged
          cardsInPage={cardsInPage}
          totalElements={allClasses.length}
          paginate={Paginate}
        />
      </div>
        <Footer/>
    </div>
  );
}
