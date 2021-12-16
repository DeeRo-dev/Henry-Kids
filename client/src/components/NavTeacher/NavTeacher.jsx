import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./NavTeacher.module.css";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Avatar from "@material-ui/core/Avatar";
import { auth } from "../../firebase/firebaseConfig";
import { useSelector, useDispatch } from "react-redux";
import { getCategoryAll, filterCategoryTeacher, getUser } from "../../actions";
import { makeStyles } from "@material-ui/core/styles";

export default function NavTeacher() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user[0]);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    dispatch(getUser(window.localStorage.sessionUser));
  }, [dispatch]);

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

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
      cursor: "pointer",
    },
  }));
  const classes = useStyles();
  // function handdleSubmit(e){
  //   e.preventDefault();
  //  console.log( e.target.value);
  // ESTO VA EN EL BOTON onClick={(e) => handdleSubmit(e)} onChange={(e) => handleInput(e)}
  // }

  //CONTIENE EL ESTADO DE TODAS LAS CATEGORIAS
  const allCategory = useSelector((state) => state.categoryAll);

  useEffect(() => {
    dispatch(getCategoryAll());
  }, [dispatch]);
  // console.log(category)

  function handleCategoryTeacher(e) {
    e.preventDefault();
    dispatch(filterCategoryTeacher(e.target.value));
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

      {/* <Link to="/interaction">
        <button className={styles.inter}>Interacción</button>
      </Link> */}
      <div className={styles.contenCat}>
        <select
          name=""
          id=""
          className={styles.select}
          onChange={(e) => handleCategoryTeacher(e)}
        >
          <option value="" selected disabled hidden className={styles.selects}>
            {" "}
            Tecnología{" "}
          </option>
          <option value="all">Todos</option>

          {allCategory.map((e) => (
            <option value={e.id} key={e.name}>
              {e.name}
            </option>
          ))}
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

      <div className={styles.perfil}>
        <Avatar
          onClick={handleClick}
          src={currentUser ? currentUser.photo : ""}
          className={classes.large}
        />
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Link to="/home/teacher/profile">
            <MenuItem onClick={handleClose}> Perfil </MenuItem>
          </Link>
          <MenuItem onClick={signOutUser}> Salir </MenuItem>
        </Menu>
        <h4 onClick={handleClick}>
          {window.localStorage.userName
            ? window.localStorage.userName
            : currentUser?.userName}
        </h4>
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
