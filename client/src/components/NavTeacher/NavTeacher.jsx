import React from "react";
import { Link,useNavigate } from "react-router-dom";
import styles from "./NavTeacher.module.css";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { auth } from "../../firebase/firebaseConfig";
import { useSelector } from "react-redux";




export default function Nav() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);

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
  
  const category = useSelector((state) => state.category)
 let nameCate = category.map( e => e.name)
  nameCate = nameCate.join().split(",");
  nameCate = nameCate.filter((e) => e);

  function handleCategory(e){
    e.preventDefault(); console.log(category)
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
            nameCate.map((nameCate) => (
               <option value={nameCate.name} key={nameCate.id}>{nameCate.name}</option>
               
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


      {/* <div className={styles.contentBoton}> */}
      {/* <input className={style.botonInSesion}type="submit" value="Usuario"/> */}
      {/* <div className={styles.botonInSesion}> */}
      {/* <p>Usuario</p>
     </div>
    </div> */}
    </nav>
  );
}
