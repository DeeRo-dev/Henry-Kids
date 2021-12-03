import React from "react";
import styles from "./Card.module.css";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import axios from 'axios'
import { Link } from "react-router-dom";

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

   
let idUser = window.localStorage.sessionUser 


/* 
function agregarFav(){
  
  console.log("click")
  return axios.post( `https://henry-kids.herokuapp.com/fav/${idUser}/${id}`)
} */

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
      <FavoriteBorderIcon className={styles.icono} color = 'secondary' value="agragar"/>
        <div>
          <img src={url} alt='Contenido sin imagen disponible' className={styles.img}/>
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
