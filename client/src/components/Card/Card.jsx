import React from "react";
import styles from "./Card.module.css";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setFavorite } from "../../actions";



export default function Card({
  id,
  value,
  title,
  category,
  description,
  video_link,
  difficulty,
  game_link,
  valoration,
}) {


  let firstIndex = video_link && video_link.indexOf("=") + 1;
  let slice = video_link && video_link.slice(firstIndex, video_link.length);

  let url = `https://img.youtube.com/vi/${slice}/hqdefault.jpg`;
  
  
  const dispatch = useDispatch();

  const idUser = window.localStorage.sessionUser
  
  function onclickFav(event, idUser, id){
   event.preventDefault()
    dispatch(setFavorite(idUser, id))
  }

  return (
    <div className={styles.card} value={value}>
      <div>
      <FavoriteBorderIcon className={styles.icono} value={title} onClick={
         (event)=>onclickFav(event, idUser, id) }/>
      </div>
     
      
        <div className={styles.cardHeader}>
          <img src={url} alt='Contenido sin imagen disponible' className={styles.img} />

      </div>
      <div>
        <p className={styles.category}>JavaScript{category}</p>

        <div className={styles.title}>{title}</div>

        <div className={styles.description}>{description}</div>

        <div className={styles.instructor}>Dificultad: {difficulty} </div>
        <p className={styles.valoration}>Valoración: {valoration}</p>
      </div>
    </div>
  );
}
