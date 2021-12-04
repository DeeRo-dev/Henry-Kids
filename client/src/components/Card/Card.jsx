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
  
  function onClickNav(event, id){
   /*  event.stopPropagation(); */
    event.preventDefault();
   return navigate(`/home/student/${id}`)
  }
  
  
  function onclickFav(event, idUser, id){
   /* event.stopPropagation(); */
   event.preventDefault();
    dispatch(setFavorite(idUser, id))
    console.log('fav')
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

        <div className={styles.title} >
          {title}
        </div>

        <div className={styles.description} onClick={(event)=>onClickNav(event, id)}>
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
