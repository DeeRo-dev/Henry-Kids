import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Avatar, Icon, makeStyles } from "@material-ui/core";
import { auth } from "../../firebase/firebaseConfig";
import { useSelector, useDispatch } from "react-redux";
import { withStyles } from "@material-ui/styles";
import MuiAlert from "@material-ui/lab/Alert";
import { Snackbar } from "@material-ui/core";
import {
  getCategoryAll,
  getUser,
  filterCategory,
  filterDifficulty,
  editUser,
} from "../../actions";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const StyleAlert = withStyles({
  root: {

    marginBottom: "450px",
    width: "300px",
  },
})(Snackbar);

export default function Nav() {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  const currentUser = useSelector((state) => state.user[0]);
  const allCategory = useSelector((state) => state.categoryAll);

  

  useEffect(() => {
    dispatch(getCategoryAll());
  }, [dispatch]);
  // console.log(category)

  function handleCategory(e) {
    e.preventDefault();
    console.log(e.target.value);
    dispatch(filterCategory(e.target.value));
  }

  function handleDifficulty(e) {
    e.preventDefault();
    dispatch(filterDifficulty(e.target.value));
  }

  // function typeUser(e){
  //   console.log('click')
  //   e.preventDefault();
  //   dispatch(editUser(window.localStorage.sessionUser,{type:"teacher"}))
  // }

<<<<<<< HEAD
=======

>>>>>>> 456ccca8e2d6e58141037cf12f67e341be957dbe
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
<<<<<<< HEAD
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
=======
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
      marginRight: "20px",
>>>>>>> 456ccca8e2d6e58141037cf12f67e341be957dbe
      cursor: "pointer",
    },
  }));
  const classes = useStyles();
<<<<<<< HEAD
=======

  const [open, setOpen] = React.useState(false);

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  function handleOpen() {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  }

>>>>>>> 456ccca8e2d6e58141037cf12f67e341be957dbe

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
          <SearchBar />
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

<<<<<<< HEAD
              {allCategory.map((e) => (
                <option value={e.id} key={e.name}>
                  {e.name}
                </option>
              ))}
=======
              {
                allCategory.map((e) => (
                  <option value={e.id} key={e.name}>{e.name}</option>

                ))
              }
>>>>>>> 456ccca8e2d6e58141037cf12f67e341be957dbe
            </select>
          </div>
          <div>
            <select
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
                {" "}
                Dificultad{" "}
              </option>
              <option value="all"> Todos </option>
              <option value="Basica"> Básica </option>
              <option value="Intermedia"> Intermedia </option>
              <option value="Alta"> Alta </option>
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
            <option value="2" className={styles.selects}>
              ⭐⭐
            </option>
            <option value="1" className={styles.selects}>
              ⭐
            </option>
          </select> */}
<<<<<<< HEAD
            <div>
              <Link to={"/home/student/register-teacher"}>
                <button className={styles.blue}> ¿Te gustaria enseñar?</button>
              </Link>
            </div>
=======


            {currentUser ?
              currentUser.solictud ?
                <div>

                  <button className={styles.blue} onClick={handleOpen}>¿Te gustaria enseñar?</button>

                </div>
                :
                <div>
                  <Link to={"/home/student/register-teacher"}>
                    <button className={styles.blue}> ¿Te gustaria enseñar?</button>
                  </Link>
                </div>

              : <div>
                <Link to={"/home/student/register-teacher"}>
                  <button className={styles.blue}> ¿Te gustaria enseñar?</button>
                </Link>
              </div>

            }
            <StyleAlert className={styles.alert} open={open} onClose={handleCloseAlert}>
              <Alert severity="success">
                ¡Actualmente tenes una solicitud pendiente de confirmacion!
              </Alert>
            </StyleAlert>

>>>>>>> 456ccca8e2d6e58141037cf12f67e341be957dbe
            {/* <Link to="/create-clase">
         <button className={styles.blue}>
             Crear clase
          </button>
      </Link> */}
<<<<<<< HEAD
=======

>>>>>>> 456ccca8e2d6e58141037cf12f67e341be957dbe
          </div>

          <div className={styles.perfil}>
            <Avatar
<<<<<<< HEAD
              src={currentUser ? currentUser.photo : ""}
=======
              src={currentUser?.photo ? currentUser?.photo : ""}
>>>>>>> 456ccca8e2d6e58141037cf12f67e341be957dbe
              className={classes.large}
              onClick={handleClick}
            />{" "}
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
            <h4 onClick={handleClick}>{currentUser?.userName}</h4>
          </div>
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
