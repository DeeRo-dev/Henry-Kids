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
  const [input, setInput] = useState({
    title: "",
    description: "",
    material: "",
    videolink: "",
    gamelink: "",
    state: "",
    dificulty: "",
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
      axios.post("http://localhost:3001/", input);
    } catch (error) {
      console.log(error);
    }
  }

  const [modal, setModal] = useState(false);
  const [modalIngresar, setModalIngresar] = useState(false);

  const toggleModal = (e) => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  if (modalIngresar) {
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
            <button
              className={styles.close_modal}
              onClick={toggleModal}
            ></button>
            <div>
              <form>
                <input type="text" placeholder="Titulo" />
                <input type="text" placeholder="Descripcion" />
                <input type="text" placeholder="Material de estudio" />
                <input type="text" placeholder="Link al video" />
                <input type="password" placeholder="Link de juegos" />
                <select
                  name="state"
                  onChange={handleChange}
                  className={styles.select}
                >
                  <option
                    value=""
                    selected
                    disabled
                    hidden
                    onChange={handleChange}
                  >
                    Dificultad
                  </option>
                  <option value={true}>Básica</option>
                  <option value={false}>Intermedia</option>
                  <option value={false}>Alta</option>
                </select>
                <input
                  type="date"
                  name="date"
                  onChange={handleChange}
                  min="2021-01-01"
                  max="2025-12-31"
                />

                <Link className={styles.btnCrear} to="/home">
                  <StyleButtonCrearCuenta
                    type="submit"
                    className={styles.btnCrearCuenta}
                    variant="contained"
                    color="primary"
                  >
                    Crear clase
                  </StyleButtonCrearCuenta>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
