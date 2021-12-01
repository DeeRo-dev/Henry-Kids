import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../Nav/Nav.jsx";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import Card from "../Card/Card.jsx";
import { getAllclasses } from "../../actions/index.js";
import { auth } from "../../firebase/firebaseConfig";
import Pagination from './../Pagination/Pagination';

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allClasses = useSelector((state) => state.allClasses);

  useEffect (() => dispatch (getAllclasses ()), [dispatch]);

  let cardsInPage = 8;
  let [page, setPage] = useState(1);

  useEffect (() => {
    setPage (1);
  }, []);

  let currentPage;
  let indexLastPage = page * cardsInPage;
  let indexFirstPage = indexLastPage - cardsInPage;

  allClasses.length > 9
    ? (currentPage = allClasses.slice (indexFirstPage, indexLastPage))
    : (currentPage = allClasses);

  function Paginate (e, num) {
    e.preventDefault ();
    setPage (num);
  }

  function signOutUser(e) {
    auth
      .signOut(auth)
      .then(() => {
        navigate("/");
        window.location.reload();
        localStorage.clear();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className={styles.home}>
      <div>
        <Nav />
      </div>


      <div className={styles.cards}>
        {allClasses.map((e) => {
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
