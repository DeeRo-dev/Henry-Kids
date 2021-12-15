import React from "react";
import styles from "./CardTeacher.module.css"
import LongMenu from "../MenuDesplegable/MenuDesplegable";
import {Link} from 'react-router-dom'

export default function CardTeacher({
  id,
  title,
  category,
  description,
  video_link,
  difficulty,
  game_link,
  valoration,
}) {

  console.log(valoration)
  let firstIndex = video_link && video_link.indexOf("=") + 1;
  let slice = video_link && video_link.slice(firstIndex, video_link.length)

  let url = `https://img.youtube.com/vi/${slice}/hqdefault.jpg`

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.threeBtns}/>
        <div className={styles.botoncitos}>
        <LongMenu id={id} />
        </div>
        <div className={styles.preview}>
          <img src={url} alt='Contenido sin imagen disponible' />
        </div>
        <Link to={"/home/teacher/" + id}>
        <p className={styles.category}>{category}</p>
        <div className={styles.title}>
          {title}
        </div>
        {/* <div className={styles.description}>
          {description}
        </div> */}
        <div
          className={styles.instructor}>Dificultad: {difficulty}
        </div>
        <form  >
        <p className={styles.clasificacion}>
  <input  checked={valoration===5? true: false} id="radio1" type="radio"  name="estrellas" value="5"/>
  <label  for="radio1">★</label>
  <input  checked={valoration===4? true: false} id="radio2" type="radio" name="estrellas" value="4"/>
  <label for="radio2">★</label>
  <input  checked={valoration===3? true: false} id="radio3" type="radio" name="estrellas" value="3"/>
  <label for="radio3">★</label>
  <input  checked={valoration===2? true: false} id="radio4" type="radio" name="estrellas" value="2"/>
  <label for="radio4">★</label>
  <input  checked={valoration===1? true: false} id="radio5" type="radio" name="estrellas" value="1"/>
  <label for="radio5">★</label>
          </p>
          </form  >
</Link>
      </div>
    </div>
  );
}