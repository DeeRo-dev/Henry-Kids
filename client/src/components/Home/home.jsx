import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../Nav/Nav.jsx";
import { Link } from "react-router-dom";
import { styled } from "@material-ui/core";
import styles from "./Home.module.css";
import Card from "../Card/Card.jsx";
import { editUser, getAllClasses, getFavorites } from "../../actions/index.js";
import Paged from "../Paged/Paged.jsx";


export default function Home() {
  
  const dispatch = useDispatch();
  const allClasses = useSelector((state) => state.allClasses);
 
  let [page, setPage] = useState(1);
  let cardsInPage = 8;

  let currentPage;
  let indexLastPage = page * cardsInPage;
  let indexFirstPage = indexLastPage - cardsInPage;
/* 
  currentPage && currentPage.length > 9
    ? (currentPage = allClasses.slice(indexFirstPage, indexLastPage))
    : (currentPage = allClasses);
 */
    if (allClasses.length > 8) {
      currentPage = allClasses.slice(indexFirstPage, indexLastPage);
  } else currentPage = allClasses

    useEffect(() => {
      setPage(1);
    }, []); 
  
  
  useEffect(() => {
    dispatch(getAllClasses());
    dispatch(getFavorites())
    dispatch(
      editUser("provi", {
        id: window.localStorage.sessionUser,
      })
    );
  }, [dispatch]);


  allClasses.length > 9
    ? (currentPage = allClasses.slice(indexFirstPage, indexLastPage))
    : (currentPage = allClasses);

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
                  category={e.categories[0].name}
                  description={e.description}
                  video_link={e.video_link}
                  difficulty={e.difficulty}
                  game_link={e.game_link}
                  valoration={e.Evaluations[0].Evaluation}
                />{" "}
              </Link>
            </div>
          );
        })}
      </div>

      <div>
        <Paged
          cardsInPage={cardsInPage}
          totalElements={allClasses.length}
          paginate={Paginate}
        />
      </div>
    </div>
  );
}
