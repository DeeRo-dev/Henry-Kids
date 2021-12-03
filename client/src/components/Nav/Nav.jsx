import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Nav.module.css";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { auth } from "../../firebase/firebaseConfig";
import { useState } from "react";
<<<<<<< HEAD
import { useSelector, useDispatch } from "react-redux";
import { searchClass } from "../../actions/index.js";
import DifficultyFilter from '../DifficultyFilter/DifficultyFilter'
=======
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import { getUser } from "../../actions";
>>>>>>> funcionalidad-buscador

export default function Nav() {
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

  // function handdleSubmit(e){
  //   e.preventDefault();
  //  console.log( e.target.value);
  // ESTO VA EN EL BOTON onClick={(e) => handdleSubmit(e)} onChange={(e) => handleInput(e)}
  // }
  const category = useSelector((state) => state.category);
  let nameCate = category.map((e) => e.name);
  nameCate = nameCate.join().split(",");
  nameCate = nameCate.filter((e) => e);
  
  function handleCategory(e) {
    e.preventDefault();
    console.log(category);
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
          <div>
            {" "}
            <SearchBar />
          </div>
          <div className={styles.contenCat}>
            <select
              name=""
              id=""
              className={styles.select}
              onChange={(e) => handleCategory(e)}
            >
              {nameCate.map((nameCate) => (
                <option value={nameCate.name} key={nameCate.id}>
                  {nameCate.name}
                </option>
              ))}
            </select>
          </div>
          <DifficultyFilter/>
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
              src={ currentUser ? currentUser.photo 
                : "https://f5c4537feeb2b644adaf-b9c0667778661278083bed3d7c96b2f8.ssl.cf1.rackcdn.com/artistas/perfil-usuario.png"}
              alt="404"
              className={styles.img}
              onClick={handleClick}
            />{" "}
          </div>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link to="/home/student/profile">
              <MenuItem onClick={handleClose}> Perfil </MenuItem>
            </Link>
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
