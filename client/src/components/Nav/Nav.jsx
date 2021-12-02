import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { Icon } from "@material-ui/core";
import styles from "./Nav.module.css";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { auth } from "../../firebase/firebaseConfig";
import {useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { searchClass } from "../../actions/index";


export default function Nav() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [flag, setFlag] = useState(true);
  const [flag2, setFlag2] = useState(true);
  const [classFound, setClassFound] = useState("");
  const dispatch = useDispatch();
  const [, setClass] = useState("");
  const actualClass = useSelector((state) => state.allClasses);

  function handleInput(e) {
    e.preventDefault();
    const { value } = e.target;
    setClass(value);

    if (actualClass.length === 1 && flag && flag2) {
      setClassFound(value.slice(0, value.length - 1));
      setFlag(false);
    }
    if (!value.length) {
      setFlag(true);
      setFlag2(true);
      dispatch(searchClass("x"));
    }
    if (!flag && value === classFound) {
      setClassFound("");
      setFlag(true);
      setFlag2(false);
    }

    if (flag && value.length > 0) {
      dispatch(searchClass(value));
    }
  }





  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }

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
            onChange={(e) => handleInput(e)}
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
            aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}/> </div>
            
     
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
