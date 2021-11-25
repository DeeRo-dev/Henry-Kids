import React from "react";
import {Link} from 'react-router-dom'
import {Icon} from '@material-ui/core'
import styles from "./Nav.module.css";

export default function Nav(){

  // function handdleSubmit(e){
  //   e.preventDefault();
  //  console.log( e.target.value);
 // ESTO VA EN EL BOTON onClick={(e) => handdleSubmit(e)} onChange={(e) => handleInput(e)}
  // }
  return(
    <nav className={styles.nav}>
      <div className={styles.logo}>
     <img className={styles.logo }src="https://i.imgur.com/AWEe2XR.png" alt="not found" />
      </div>
      
      <div className={styles.contentSearch}>
        {/* <div className={styles.buscador}> */}
          {/* <button className={styles.iconoBuscar}> */}
          {/* </button> */}
         <input type="text" 
                placeholder='Buscar por profesor/curso...' 
                className={styles.inputSearch}/>
                <button className={styles.buscador}>
           <Icon >
             search
          </Icon>
          </button>
          {/* <button type='submit' > Buscar</button> */}
      </div>
      {/* </div> */}
   
     <div className={styles.contenCat}>
       <select name="" id="" className={styles.select}>
       <option value="" selected disabled hidden>Categorías</option>
         <option value="">JavaScript</option>
         <option value="">React</option>
         <option value="">HTML</option>
         <option value="">CSS</option>
        

       </select>
     </div>
    <div className={styles.contenValorado}>
    <select name="" id="" className={styles.select}>
         <option value="" >Valoración</option>
       </select>
       </div>

     <div className={styles.imagen}>
 <img src="https://estudiantes.ucontinental.edu.pe/wp-content/uploads/2020/09/Madurez-emocional-7.jpg"
 alt="404"  className={styles.img}/>
     </div>
   
    {/* <div className={styles.contentBoton}> */}
     {/* <input className={style.botonInSesion}type="submit" value="Usuario"/> */}
     {/* <div className={styles.botonInSesion}> */}
     {/* <p>Usuario</p>
     </div>
    </div> */}
   
    </nav>
  )
}