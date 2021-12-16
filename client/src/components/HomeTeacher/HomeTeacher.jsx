import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavTeacher from "../NavTeacher/NavTeacher.jsx";
import Paged from "../Paged/Paged.jsx";
import styles from "./HomeTeacher.module.css";
import { auth } from "../../firebase/firebaseConfig";
import { useNavigate } from "react-router";
import CardTeacher from "../CardTeacher/CardTeacher.jsx";
import { getAllClassTeacher, editUser } from "../../actions/index.js";
import Footer from "../Footer/Footer.jsx"

export default function HomeTeacher() {
  const navigate = useNavigate();

  const allClassTeacher = useSelector((state) => state.allClassTeacher);

  const dispatch = useDispatch();

  let cardsInPage = 8;
  let [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(
      editUser("provi", {
        id: window.localStorage.sessionUser,
      })
    );
    setPage(1);
  }, [setPage, dispatch]);

  let currentPage;
  let indexLastPage = page * cardsInPage;
  let indexFirstPage = indexLastPage - cardsInPage;

  allClassTeacher?.length > 8
    ? (currentPage = allClassTeacher.slice(indexFirstPage, indexLastPage))
    : (currentPage = allClassTeacher);

  if (allClassTeacher?.length > 8) {
    currentPage = allClassTeacher.slice(indexFirstPage, indexLastPage);
  } else currentPage = allClassTeacher;

  function Paginate(e, num) {
    e.preventDefault();
    setPage(num);
  }

  let idUser = window.localStorage.sessionUser;

  useEffect(() => {
    dispatch(getAllClassTeacher(idUser));
  }, [idUser, dispatch]);

  return (
    <div className={styles.home}>
      <div className={styles.nav}>
        <NavTeacher />
      </div>
      <div className={styles.cards}>
        {currentPage &&
          currentPage.map((e) => {
            return (
              <div key={e.id}>
                <CardTeacher
                  id={e.id}
                  title={e.title}
                  category={e.categories[0]?.name}
                  description={e.description}
                  video_link={e.video_link}
                  difficulty={e.difficulty}
                  game_link={e.game_link}
                  valoration={e.Evaluations[0]?.Promedio}
                />{" "}
              </div>
            );
          })}
      </div>

      <div>
        <Paged
          cardsInPage={cardsInPage}
          totalElements={allClassTeacher?.length}
          paginate={Paginate}
        />
      </div>
      <div className={styles.footer}>
  <Footer/>
  </div>
    </div>
  );
}
