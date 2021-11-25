import React, { useState } from "react";
import styles from "./LandingPage.module.css";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

export default function LandingPage() {
  const [modal, setModal] = useState(false);

  const StyledButton = withStyles({
    root: {
      paddingRight: "40px",
      paddingLeft: "40px",
      marginBottom: "30px",
      backgroundColor: "var(--amarillo)",
      fontFamily: "montserrat",
      fontWeight: "bold",
      fontSize: "24px"
    },
    
    label: {
      color: "white",
    }
    
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
            <StyledButton
              onClick={(e) => toggleModal(e)}
               className={styles.btnIngresar}
              /* variant="contained"
              color="primary" */
            >
              Ingresar
            </StyledButton>
            <Button
              onClick={toggleModal}
              className={styles.btnRegistrarse}
              variant="contained"
              color="primary"
            >
              Registrar
            </Button>
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
                    <input type="text" placeholder="Contraseña:" />
                    <input type="text" placeholder="Confirmar contraseña:" />
                    <Button
                      type="submit"
                      className={styles.btnCrearCuenta}
                      variant="contained"
                      color="primary"
                    >
                      Crear cuenta
                    </Button>
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
