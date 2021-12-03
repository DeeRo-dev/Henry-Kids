import React from "react";
import styles from "./Card.module.css";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
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
  let slice = video_link && video_link.slice(firstIndex, video_link.length)

  let url = `https://img.youtube.com/vi/${slice}/hqdefault.jpg`
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const idUser = window.localStorage.sessionUser
  console.log(idUser)
  
  return (
    <div className={styles.card} value={value}>
      <div className={styles.cardHeader}>
        <button className={styles.icono} value={title} onClick={() => { 
          dispatch(setFavorite(idUser, id)) }}><FavoriteBorderIcon /></button>

        <div>
          <img src={url} alt='Contenido sin imagen disponible' className={styles.img} />
        </div>
      </div>
      <div onClick={() => navigate(`/home/student/${id}`)}>
        <p className={styles.category}>JavaScript{category}</p>

        <div className={styles.title} >
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
    </div>
  );
}
