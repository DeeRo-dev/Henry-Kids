import { StylesContext } from "@material-ui/styles";
import React from "react";
import styles from "./Card.module.css";

export default function Card({
  id,
  title,
  category,
  description,
  video_link,
  difficulty,
  game_link,
  valoration,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <img
          src="https://www.grupoeducar.cl/wp-content//uploads/2017/10/actualidad.png"
          alt="rover"
        />
      </div>
      <div className={styles.cardBody}>
        <span className={styles.category}>Javascript{category}</span>

        <div className={styles.title}>
          {title}
        </div>

        <div className={styles.description}>
          {description} 
        </div>

        <div className={styles.instructor}>Dificultad: {difficulty} </div>

        <div className={styles.instructor}>valoracion</div>
        <div className={styles.valoration}>
          {valoration}
          <img
            src="https://dondeestanlasluces.files.wordpress.com/2017/08/stars.png"
            alt="user"
          />
        </div>
      </div>
    </div>
  );
}
