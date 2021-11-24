import React from "react";
import {Link} from 'react-router-dom'
import style from './css/Nav.module.css'
import {Icon} from '@material-ui/core'


export default function Nav(){

  // function handdleSubmit(e){
  //   e.preventDefault();
  //  console.log( e.target.value);
 // ESTO VA EN EL BOTON onClick={(e) => handdleSubmit(e)} onChange={(e) => handleInput(e)}
  // }
  return(
    <nav className={style.nav}>
      <div className={style.logo}>
     <img className={style.logo }src="https://i.imgur.com/AWEe2XR.png" alt="not found" />
      </div>
      
      <div className={style.contentSearch}>
        <div className={style.buscador}>
          <button className={style.iconoBuscar}>
             <Icon >
             search
          </Icon>
          </button>
         
         <input type="text" 
                placeholder='Buscar' 
                className={style.inputSearch}/>
          {/* <button type='submit' > Buscar</button> */}
      </div>
      </div>
   
     <div className={style.contenCat}>
       <select name="" id="" className={style.select}>
         <option value="">javascript</option>
         <option value="">HTML</option>
         <option value="">CSS</option>
         <option value="">REACT</option>

       </select>
     </div>
    <div className={style.contenValorado}>
    <select name="" id="" className={style.select}>
         <option value="" >Mas valorado</option>
         <option value="">Menos valorado</option>
       </select>
       </div>
       <div className={style.contenDuracion}>
           <select name="" id="" className={style.select}>
         <option value="">Máx duración</option>
         <option value="">Menos duración</option>
       </select>
       </div>
     
   
    <div className={style.contentBoton}>
     {/* <input className={style.botonInSesion}type="submit" value="Usuario"/> */}
     <div className={style.botonInSesion}>
     <p>Usuario</p>
     </div>
    </div>
   
    </nav>
  )
}