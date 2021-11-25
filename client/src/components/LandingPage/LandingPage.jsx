import React, { useState } from "react";
import styles from "./LandingPage.module.css";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

export default function LandingPage() {
  const [modal, setModal] = useState(false);

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

  const StyleButtonIngresar = withStyles({
    root: {
      paddingRight: "40px",
      paddingLeft: "40px",
      marginBottom: "30px",
      backgroundColor: "var(--amarillo)",
      fontFamily: "montserrat",
      fontWeight: "bold",
      fontSize: "24px",
      "&:hover": {
        backgroundColor: "var(--verde)",
      },
    },

    label: {
      color: "white",
    },
  })(Button);

  const StyleButtonRegistrarse = withStyles({
    root: {
      paddingRight: "17px",
      paddingLeft: "17px",
      backgroundColor: "var(--naranja)",
      fontFamily: "montserrat",
      fontWeight: "bold",
      fontSize: "24px",
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

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div className={styles.containerBackground}>
      <div className={styles.background}>
        <img
          className={styles.logo}
          src="https://i.imgur.com/AWEe2XR.png"
          alt="img"
        />
        <div>
          <div className={styles.containerBtns}>
            <StyleButtonIngresar
              onClick={(e) => toggleModal(e)}
              className={styles.btnIngresar}
              /* variant="contained"
              color="primary" */
            >
              Ingresar
            </StyleButtonIngresar>
            <StyleButtonRegistrarse
              onClick={toggleModal}
              /* className={styles.btnRegistrarse} */
              variant="contained"
              color="primary"
            >
              Registrarse
            </StyleButtonRegistrarse>
          </div>

          {modal && (
            <div className={styles.modal}>
              <div onClick={toggleModal} className={styles.overlay}></div>
              <div className={styles.modal_content}>
                <button className={styles.close_modal} onClick={toggleModal}>
                  x
                </button>

                <div>
                  <form>
                    <input type="text" placeholder="Nombre:" />
                    <input type="text" placeholder="Apellido:" />
                    <input type="text" placeholder="Nombre de usuario:" />
                    <input type="text" placeholder="Email:" />
                    <input type="password" placeholder="Contraseña:" />
                    <input
                      type="password"
                      placeholder="Confirmar contraseña:"
                    />
                    <StyleButtonCrearCuenta
                      type="submit"
                      className={styles.btnCrearCuenta}
                      variant="contained"
                      color="primary"
                    >
                      Crear cuenta
                    </StyleButtonCrearCuenta>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
