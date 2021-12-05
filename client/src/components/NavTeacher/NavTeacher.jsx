import React from "react";
import {useEffect, useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import styles from "./NavTeacher.module.css";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { auth } from "../../firebase/firebaseConfig";
import { useSelector, useDispatch} from "react-redux";
import { getCategory } from "../../actions";



export default function NavTeacher() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  const dispatch = useDispatch()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const signOutUser = (e) =>  {
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
  }
  

  // function handdleSubmit(e){
  //   e.preventDefault();
  //  console.log( e.target.value);
  // ESTO VA EN EL BOTON onClick={(e) => handdleSubmit(e)} onChange={(e) => handleInput(e)}
  // }
  
  const allCategory = useSelector((state) => state.category)


 useEffect(()=> {
  dispatch(getCategory())
}, [dispatch])

  function handleCategory(e){
    e.preventDefault();
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
       
          <img
            className={styles.logo}
            src="https://i.imgur.com/AWEe2XR.png"
            alt="not found"
          />
     
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
        <select name="" id="" className={styles.select}  onChange={(e) => handleCategory(e)}>
        {
            allCategory.map((e) => (
               <option value={e} key={e}>{e}</option>
               
            ))
          }
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

        <Link to="/home/create-clase">
          <button className={styles.blue}>Crear clase</button>
        </Link>
      </div>
      

    <div className={styles.imagen}>
      
      <img
            src="https://static.diariofemenino.com/media/13502/carta-gracias-profesor.jpg"
            alt="404"
            className={styles.img}
            onClick={handleClick}/> </div>
            
     
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


      {/* <div className={styles.contentBoton}> */}
      {/* <input className={style.botonInSesion}type="submit" value="Usuario"/> */}
      {/* <div className={styles.botonInSesion}> */}
      {/* <p>Usuario</p>
     </div>
    </div> */}
    </nav>
  );
}
