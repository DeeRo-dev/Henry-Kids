import React from "react";
import styles from "./CardTeacher.module.css"
import LongMenu from "../MenuDesplegable/MenuDesplegable";


export default function CardTeacher({
  id,
  title,
  category,
  description,
  video_link,
  difficulty,
  game_link,
  valoration,

}){

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
       
      <LongMenu/>
        <img
          src="https://www.redeszone.net/app/uploads-redeszone.net/2019/04/javascript-chrome-firefox.jpg"
          alt="rover"
        />
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