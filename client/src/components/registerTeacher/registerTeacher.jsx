import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import styles from "./RegisterTeacher.module.css";
import { Button, withStyles } from "@material-ui/core";

export default function RegisterTeacher() {
  const [modal, setModal] = useState(false);
  const StyleButtonCrearCuenta = withStyles({
    root: {
      marginTop: "20px",
      width: "10%",
      border: "0",
      backgroundColor: "#ff8d00",
      borderRadius: "5px",
      height: "35px",
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

  const toggleModal = (e) => {
    setModal(!modal);
  };

  return (
    <div className={styles.modal}>
      <div onClick={toggleModal} className={styles.overlay}></div>
      <div className={styles.modal_content}>
        {/* <button className={styles.close_modal} onClick={toggleModal}>
      x
    </button> */}

        <div className={styles.container}>
          <form className={styles.inputs}>
            <input name="firstName" type="text" placeholder="País:" />
            <input name="firstName" type="text" placeholder="Región:" />

            <p id={styles.p}>Fecha de nacimiento:</p>
            <input
              name="firstName"
              type="date"
              placeholder="Fecha de naciemiento:"
            />
            <p id={styles.pDNI}>Foto DNI:</p>
            <input name="firstName" type="file" placeholder="Foto DNI:" />
            {/* <Link className={styles.btnCrear} to="/home"> */}
            <div className={styles.containerBtn}>
              <StyleButtonCrearCuenta
                type="button"
                className={styles.btnCrearCuenta}
                variant="contained"
                color="primary"
              >
                Enviar
              </StyleButtonCrearCuenta>
            </div>
            {/* </Link> */}
          </form>
        </div>
      </div>
    </div>
  );
}
