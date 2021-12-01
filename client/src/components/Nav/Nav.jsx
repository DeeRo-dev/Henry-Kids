import React from "react";
import { Icon } from "@material-ui/core";
import styles from "./Nav.module.css";
import {useState} from 'react'
import { useSelector } from "react-redux";

export default function Nav() {
  // function handdleSubmit(e){
  //   e.preventDefault();
  //  console.log( e.target.value);
  // ESTO VA EN EL BOTON onClick={(e) => handdleSubmit(e)} onChange={(e) => handleInput(e)}
  // }
  const category = useSelector((state) => state.category)
  let nameCate = category.map( e => e.name)
  nameCate = nameCate.join().split(",");
  nameCate = nameCate.filter((e) => e);
  console.log(nameCate)
  function handleCategory(e){
    e.preventDefault();
    console.log(category)
  }
  return (
    <div className={styles.containerBackground}>
      <div className={styles.background}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
      
          <img
            className={styles.logo}
            src="https://i.imgur.com/AWEe2XR.png"
            alt="not found"
          />
 
        </div>

        <div className={styles.contentSearch}>
          {/* <div className={styles.buscador}> */}
          {/* <button className={styles.iconoBuscar}> */}
          {/* </button> */}
          <input
            type="text"
            placeholder="Buscar por profesor/curso..."
            className={styles.inputSearch}
          />
          <button className={styles.buscador}>
            <Icon>search</Icon>
          </button>
          {/* <button type='submit' > Buscar</button> */}
        </div>
        <div className={styles.contenCat}>
          <select name="" id="" className={styles.select} onChange={(e) => handleCategory(e)}>
          {
            nameCate.map((nameCate) => (
               <option value={nameCate.name} key={nameCate.id}>{nameCate.name}</option>
               
            ))
          }
          </select>
        </div>
        <div className={styles.contenValorado}>
          <select name="" id="" className={styles.select}>
            <option
              value=""
              selected
              disabled
              hidden
              className={styles.selects}
            >
              {" "}
              Valoración{" "}
            </option>
            <option value="" className={styles.selects}>
              ⭐⭐⭐⭐⭐
            </option>
            <option value="" className={styles.selects}>
              ⭐⭐⭐⭐
            </option>
            <option value="" className={styles.selects}>
              ⭐⭐⭐
            </option>
            <option value="" className={styles.selects}>
              ⭐⭐
            </option>
            <option value="" className={styles.selects}>
              ⭐
            </option>
          </select>
         
       {/* <Link to="/create-clase">
         <button className={styles.blue}>
             Crear clase
          </button>
      </Link>
   */}
        </div>
        <div className={styles.imagen}>
          <img
            src="https://static.guiainfantil.com/media/24057/c/el-desarrollo-de-un-nino-de-5-anos-que-aprenden-los-ninos-a-esta-edad-md.jpg"
            alt="404"
            className={styles.img}
          />
        </div>

        {/* <div className={styles.contentBoton}> */}
        {/* <input className={style.botonInSesion}type="submit" value="Usuario"/> */}
        {/* <div className={styles.botonInSesion}> */}
        {/* <p>Usuario</p>
     </div>
    </div> */}
      </nav>
      </div>
    </div>
  );
}
