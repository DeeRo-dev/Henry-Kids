import React, { useEffect } from "react";
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
  const idUser = window.localStorage.sessionUser;
  useEffect (()=> {dispatch(getFavorites(idUser))},[dispatch, idUser])
  const favoritesRedux = useSelector(state => state.favorites)

  useEffect (()=> {dispatch(getValoracion(id))},[])
  const valoracion = useSelector(state => state.valoracion)
  
  
  

  function onclickFav(e, idUser, id) {
    e.preventDefault();
    console.log(e.target.checked)
    dispatch(setFavorite(idUser, id));
  }

  function onClickRemove(e, idUser, id) {
    e.preventDefault();
    console.log(e.target.checked)
    dispatch(removeFavorite(idUser, id));
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
          className={styles.icono}
          control={<Checkbox icon={<FavoriteBorder />}  checkedIcon={<Favorite />} name="checkedH" />}
          label=""
          onChange={fav ? (e) => onClickRemove(e, idUser, id) : (e) => onclickFav(e, idUser, id)}
        />
      </FormGroup>
      <Link to={"/home/student/" + id}> 
        <div className={styles.cardHeader}>
          <img src={url} alt="Contenido sin imagen disponible" />
        </div>

        <p className={styles.category}>{category}</p>
        <div className={styles.cuerpoTexto}>
          <div className={styles.title}>{title}</div>

          {/* <div className={styles.description}>{description}</div> */}

          <div className={styles.instructor}>Dificultad: {difficulty} </div>
          <form  >
          <p className={styles.clasificacion}>
  <input  checked={valoracion.promedio===5? true: false} id="radio1" type="radio"  name="estrellas" value="5"/>
  <label  for="radio1">★</label>
  <input  checked={valoracion.promedio===4? true: false} id="radio2" type="radio" name="estrellas" value="4"/>
  <label for="radio2">★</label>
  <input  checked={valoracion.promedio===3? true: false} id="radio3" type="radio" name="estrellas" value="3"/>
  <label for="radio3">★</label>
  <input  checked={valoracion.promedio===2? true: false} id="radio4" type="radio" name="estrellas" value="2"/>
  <label for="radio4">★</label>
  <input  checked={valoracion.promedio===1? true: false} id="radio5" type="radio" name="estrellas" value="1"/>
  <label for="radio5">★</label>
          </p>
          </form>
        </div>
       </Link> 
    </div>
  );
}
