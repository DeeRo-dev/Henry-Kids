import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./FormStyles.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Snackbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";
import MuiAlert from "@material-ui/lab/Alert";
import { createClass } from "../../actions/index.js";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const StyleAlert = withStyles({
  root: {
    marginBottom: "-10px",
    width: "300px",
  },
})(Snackbar);

export default function FormularioClase() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modal, setModal] = useState(true);
  const [input, setInput] = useState({
    title: "",
    description: "",
    studio_material: "",
    video_link: "",
    game_link: "",
    difficulty: "",
    date: "",
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      dispatch(createClass(input));
      navigate("/home");
    }, 2000);
  }

  const toggleModal = (e) => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const StyleButtonCrearCuenta = withStyles({
    root: {
      marginTop: "20px",
      width: "60%",
      border: "0",
      backgroundColor: "#ff8d00",
      borderRadius: "5px",
      height: "50px",
      color: "white",
      fontWeight: "400",
      fontSize: "1em",
      "&:hover": {
        backgroundColor: "var(--verde)",
      },
    },

    label: {
      color: "white",
    },
  })(Button);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={styles.background}>
      <div className={styles.containerBackground}>
        <div className={styles.modal}>
          <div onClick={toggleModal} className={styles.overlay}></div>
          <div className={styles.modal_content}>
            <Link className={styles.btnCrear} to="/home">
              <button className={styles.close_modal} onClick={toggleModal}>
                x
              </button>
            </Link>
            <div>
              <form onSubmit={onSubmit}>
                <input
                  type="text"
                  name="title"
                  placeholder="Titulo"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="description"
                  placeholder="Descripcion"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="studio_material"
                  placeholder="Material de estudio"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="video_link"
                  placeholder="Link al video"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="game_link"
                  placeholder="Link de juegos"
                  onChange={handleChange}
                />
                <div className={styles.containerOptions}>
                  {" "}
                  <select
                    name="difficulty"
                    className={styles.select}
                    onChange={handleChange}
                  >
                    <option value="" selected disabled hidden>
                      Dificultad
                    </option>
                    <option value="Basica">Básica</option>
                    <option value="Intermedia">Intermedia</option>
                    <option value="Alta">Alta</option>
                  </select>
                </div>
                {/* <div className={styles.containerOptions}>
                  {" "}
                  <select
                    name="categorias"
                    className={styles.select}
                    onChange={handleChange}
                  >
                    <option value="" selected disabled hidden>
                      Categoría
                    </option>
                    <option value="Javascript">Javascript</option>
                    <option value="React">React</option>
                    <option value="HTML">HTML</option>
                    <option value="CSS">CSS</option>
                  </select>
                </div> */}

                <StyleButtonCrearCuenta
                  type="submit"
                  className={styles.btnCrearCuenta}
                  variant="contained"
                  color="primary"
                  onClick={handleClick}
                >
                  Crear clase
                </StyleButtonCrearCuenta>

                <StyleAlert open={open} onClose={handleClose}>
                  <Alert severity="success">¡Clase creada exitosamente!</Alert>
                </StyleAlert>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
