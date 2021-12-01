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


  let firstIndex = video_link && video_link.indexOf("=") + 1;
  let slice = video_link && video_link.slice(firstIndex, video_link.length)

  let url = `https://img.youtube.com/vi/${slice}/hqdefault.jpg`

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div>
          <img src={url} alt='Contenido sin imagen disponible' />
        </div>
      </div>

      <p className={styles.category}>JavaScript{category}</p>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.description}>
        {description}
      </div>

      <div className={styles.instructor}>Dificultad: {difficulty} </div>
      <p className={styles.valoration}>
        {valoration}
        <img
          src="https://dondeestanlasluces.files.wordpress.com/2017/08/stars.png"
          alt="user"
        />
      </p>
    </div>

  );
}
