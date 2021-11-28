import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavTeacher.module.css";

export default function Nav() {
  // function handdleSubmit(e){
  //   e.preventDefault();
  //  console.log( e.target.value);
  // ESTO VA EN EL BOTON onClick={(e) => handdleSubmit(e)} onChange={(e) => handleInput(e)}
  // }
  return (
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

      {/* <div className={styles.contentSearch}>
          <input
            type="text"
            placeholder="Buscar por profesor/curso..."
            className={styles.inputSearch}
          />
          <button className={styles.buscador}>
            <Icon>search</Icon>
          </button>
        </div> */}

      <Link to="/interaction">
        <button className={styles.inter}>Interacción</button>
      </Link>

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
        {/* <select name="" id="" className={styles.select}>
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
          </select> */}

        <Link to="/create-clase">
          <button className={styles.blue}>Crear clase</button>
        </Link>
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
  );
}
