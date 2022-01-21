import React, { useEffect,useState } from "react";
import styles from "./Card.module.css";
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFavorite, removeFavorite, getFavorites,getValoracion } from "../../actions";


export default function Card({
  id,
  isFav,
  value,
  title,
  categories,
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
  const idUser = window.localStorage.sessionUser;
 
  const favoritesRedux = useSelector(state => state.favorites)
  
 
 
  useEffect (()=> {dispatch(getFavorites(idUser))},[])

  function onclickFav(e, idUser, id) {
    e.preventDefault();
    console.log(e.target.checked)
    dispatch(setFavorite(idUser, id))
    .then(()=> dispatch(getFavorites(idUser)))



    /* window.location.reload() */
   /*  setTimeout(() => {
      dispatch(getFavorites(idUser))
    }, 1000);
    */
    
  }

  function onClickRemove(e, idUser, id) {
    e.preventDefault();
    console.log(e.target.checked)
    dispatch(removeFavorite(idUser, id));
    dispatch(getFavorites(idUser))
  }

  let fav;
  favoritesRedux === undefined ?
      fav = false
    : fav = favoritesRedux.some(c => c.id === id)

   


  return (
    <div className={styles.card} value={value}>
      <div className={styles.threeBtns} />
      
        <FormGroup row>
        <FormControlLabel
          checked={fav ? true : false}
          className={styles.icono}
          control={<Checkbox icon={<FavoriteBorder />}  checkedIcon={<Favorite />} name="checkedH" />}
          label=""
          onChange={fav ? (e) => onClickRemove(e, idUser, id)  : (e) => onclickFav(e, idUser, id)}
          onClic
        />
      </FormGroup>
     
      <Link to={"/home/student/" + id}> 
        <div className={styles.cardHeader}>
          <img src={url} alt="Contenido sin imagen disponible" />
        </div>

        <p className={styles.categories}>{categories}</p>
        <div className={styles.cuerpoTexto}>
          <div className={styles.title}>{title}</div>

          {/* <div className={styles.description}>{description}</div> */}

          <div className={styles.instructor}>Dificultad: {difficulty} </div>
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
          </form>
        </div>
       </Link> 
    </div>
  );
}
