import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../Nav/Nav.jsx";
import { Link } from "react-router-dom";
// import {styled} from '@material-ui/core';
import styles from "./Home.module.css";
import Card from "../Card/Card.jsx";
import { editUser, getAllclasses } from "../../actions/index.js";
import Pagination from "../Pagination/Pagination.jsx";

export default function Home() {
  const dispatch = useDispatch();
  const allClasses = useSelector((state) => state.allClasses);
  useEffect(() => {
    const user = window.localStorage.sessionUser
    console.log(user)
    /* dispatch(
      editUser(1, {
        id: window.localStorage.sessionUser,
        firstName: "Marlon",
        lastName: "De La Roche",
        userName: "marlondelaroch3",
        type: "student",
        photo: null,
        email: "marlondelaroch3@gmail.com",
        password: "marlon1101",
      })
    )
      .then(() => {
        console.log("entró");
      })
      .catch((e) => {
        console.log(e);
      }); */
  });

  useEffect(() => {
    dispatch(getAllclasses());
  }, [dispatch]);

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

  return (
    <div className={styles.home}>
      <div>
        <Nav />
      </div>

      <div className={styles.cards}>
        {currentPage.map((e) => {
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
        })}
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
