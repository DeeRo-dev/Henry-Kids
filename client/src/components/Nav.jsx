import React from "react";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { getNameDogs } from "../store/actions";
import {Link} from 'react-router-dom'
import style from './css/Nav.module.css'




export default function Nav(){

  // const dispatch = useDispatch();
  // const [name, setName] = useState('');

// function handleInput(e){
//   e.preventDefault();
//   setName(e.target.value)
 
// }
// function handdleSubmit(e){
//   e.preventDefault();
//  console.log( e.target.value);
//   dispatch(getNameDogs(name))
//   setName(' ')
// }

  return(
    <nav className={style.nav}>
      <div className={style.logo}>
      <h3>Henry Kids</h3>
      </div>
      <div className={style.contentSearch}>
      <p>search</p>
    </div>
     <div className={style.contenCat}>
       <select name="" id="">
         <option value="">javascript</option>
         <option value="">HTML</option>
         <option value="">CSS</option>
         <option value="">REACT</option>

       </select>
     </div>
    <div className={style.contenValorado}>
    <select name="" id="">
         <option value="">Mas valorado</option>
         <option value="">Menos valorado</option>
       </select>
       </div>
       <div className={style.contenDuracion}>
           <select name="" id="">
         <option value="">max duración</option>
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