import React, { useState } from "react";
import styles from "./FormStyles.module.css";
import axios from "axios";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";

export default function FormularioClase() {
  const [modal, setModal] = useState(false);
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
    if (e.target.value === "Seleccione") {
      setInput({
        ...input,
        [e.target.name]: "",
      });
    } else {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    }
  }

  function onSubmit(e) {
    e.preventDefault();

    try {
      axios.post("http://localhost:3001/class", input);
    } catch (error) {
      console.log(error);
    }
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
              <form onSubmit={(e) => onSubmit(e)}>
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

                <StyleButtonCrearCuenta
                  type="submit"
                  className={styles.btnCrearCuenta}
                  variant="contained"
                  color="primary"
                >
                  Crear clase
                </StyleButtonCrearCuenta>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
