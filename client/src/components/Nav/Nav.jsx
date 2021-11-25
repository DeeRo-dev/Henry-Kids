import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@material-ui/core";
import styles from "./Nav.module.css";

export default function Nav() {
  // function handdleSubmit(e){
  //   e.preventDefault();
  //  console.log( e.target.value);
  // ESTO VA EN EL BOTON onClick={(e) => handdleSubmit(e)} onChange={(e) => handleInput(e)}
  // }
  return (
    <div className={styles.containerBackground}>
      <div className={styles.background}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
        <Link to="/">
          <img
            className={styles.logo}
            src="https://i.imgur.com/AWEe2XR.png"
            alt="not found"
          />
          </Link>
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
        {/* </div> */}

        <div className={styles.contenCat}>
          <select name="" id="" className={styles.select}>
            <option value="" selected disabled hidden>
              Categorías
            </option>
            <option value="">JavaScript</option>
            <option value="">React</option>
            <option value="">HTML</option>
            <option value="">CSS</option>
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
