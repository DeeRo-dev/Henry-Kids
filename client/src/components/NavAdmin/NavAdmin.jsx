import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./NavAdmin.module.css";
import SearchBar from "../SearchBar/SearchBar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Icon } from "@material-ui/core";
import { auth } from "../../firebase/firebaseConfig";
import { useSelector, useDispatch } from "react-redux";

import {
  getCategory,
  getUser,
  filterCategory,
  filterDifficulty,
  editUser,
  getCategoryAll,
} from "../../actions";

export default function NavAdmin({ state, adminDatos }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUser = useSelector((state) => state.user[0]);

  useEffect(() => {
    dispatch(getUser(window.localStorage.sessionUser));
  }, [dispatch]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const signOutUser = (e) => {
    auth
      .signOut(auth)
      .then(() => {
        console.log("done");
        navigate("/");
        window.location.reload();
        localStorage.clear();
      })
      .catch((error) => {
        console.log(error);
      });
  };



  function handleCategory(e) {
    e.preventDefault();
    dispatch(filterCategory(e.target.value));
  }

  function handleDifficulty(e) {
    e.preventDefault();
    dispatch(filterDifficulty(e.target.value));
  }

  console.log(adminDatos)

  //CONTIENE LAS CATEGORIAS
  const allCategory = useSelector((state) => state.categoryAll);

  useEffect(() => {
    dispatch(getCategoryAll());
  }, [dispatch]);
  // console.log(category)

 
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
          <div className={styles.divEmpty}>
            {state.Clases && <div><SearchBar /></div>}
          </div>
          <div className={styles.divDif}>
            {state.Clases && <select
              name=""
              id=""
              className={styles.select}
              onChange={(e) => handleDifficulty(e)}
            >
              <option
                value=""
                selected
                disabled
                hidden
                className={styles.selects}
              >

                Dificultad
              </option>
              <option value="all"> Todos </option>
              <option value="Basica"> Básica </option>
              <option value="Intermedia"> Intermedia </option>
              <option value="Alta"> Alta </option>
            </select>}
          </div>


          <div className={styles.contenCat}>
          <select
              name=""
              id=""
              className={styles.select}
              onChange={(e) => handleCategory(e)}
            >
              <option
                value=""
                selected
                disabled
                hidden
                className={styles.selects}
              >
                {" "}
                Tecnología{" "}
              </option>
              <option value="all">Todos</option>
             
                {
             allCategory.map((e) => (
              <option value={e.id} key={e.name}>{e.name} </option>
               
            ))
          } 
            </select>
          </div>

          <div >

            <div className={styles.btnCat}>
              <Link to={"/home/admin/FormCategory"}>
                <button className={styles.blue}> Crear Categoria</button>

              </Link>
            </div>


          </div>



          <div className={styles.contenValorado}>

            <div className={styles.btnSoli}>
              <Link to={"/user/solicitud/lista"}>
                <button className={styles.blue}>Ver Solicitudes</button>

              </Link>
            </div>

          </div>
          <div className={styles.imagen} onClick={handleClick}>

            <p className={styles.initials}>{adminDatos[0]?.firstName[0]}
            {adminDatos[0]?.lastName[0]}</p>

          </div>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
           {/*  <Link to="/home/student/profile">
              <MenuItem onClick={handleClose}> Perfil </MenuItem>
            </Link> */}
            <MenuItem onClick={signOutUser}> Salir </MenuItem>
          </Menu>

          {/* <div className={styles.imagen}>
          <img
            src="https://static.guiainfantil.com/media/24057/c/el-desarrollo-de-un-nino-de-5-anos-que-aprenden-los-ninos-a-esta-edad-md.jpg"
            alt="404"
            className={styles.img}
          />
        </div> */}

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
