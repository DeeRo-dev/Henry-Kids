import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../Nav/Nav.jsx";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@material-ui/core";
import styles from "./Home.module.css";
import Card from "../Card/Card.jsx";
import { getAllclasses } from "../../actions/index.js";
import { auth } from "../../firebase/firebaseConfig";

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allClasses = useSelector((state) => state.allClasses);

  useEffect(() => dispatch(getAllclasses()), [dispatch]);

  function signOutUser(e) {
    auth
      .signOut(auth)
      .then(() => {
        console.log("done");
        navigate("/");
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
        <button onClick={signOutUser}> Salir </button>

        {allClasses.map((e) => {
          return (
            <div key={e.id}>
              {" "}
              <Link to={"/home/" + e.id}>
                {" "}
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
    </div>
  );
}
