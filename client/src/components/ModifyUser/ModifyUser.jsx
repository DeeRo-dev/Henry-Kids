import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "../../actions";
import styles from "./ModifyUser.module.css";
import SaveIcon from "@material-ui/icons/Save";
import { Button, withStyles } from "@material-ui/core";

export default function ModifyUser() {
  const [modalIngresar, setModalIngresar] = useState(false);
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    id: "",
    userName: "",
    photo: "",
  });

  function handleOnChange(e) {
    e.preventDefault();
    setUser({
      id: window.localStorage.sessionUser,
      userName: "",
      photo: e.target.src,
    });
  }
  function handleOnSubmit(e) {
    e.preventDefault();
    dispatch(editUser(user.id, { photo: user.photo }));
    toggleModalIngresar(e);
  }

  const toggleModalIngresar = (e) => {
    e.preventDefault();
    setModalIngresar(!modalIngresar);
  };

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

  const ButtonSave = withStyles({
    root: {
      marginTop: "40px",
    },

    label: {
      color: "white",
    },
  })(Button);

  return (
      <div  className={styles.containerBackground}>
    <div className={styles.background}>
      <div className={styles.containerBtns}>
        <div className={styles.btns}>
          <StyleButtonIngresar className={styles.btnIngresar}>
            {" "}
            Cambiar nombre de usuario
          </StyleButtonIngresar>
          <StyleButtonIngresar className={styles.btnIngresar}>
            {" "}
            Cambiar contraseña
          </StyleButtonIngresar>
          <StyleButtonIngresar
            className={styles.btnIngresar}
            onClick={(e) => toggleModalIngresar(e)}
          >
            {" "}
            Cambiar foto
          </StyleButtonIngresar>
        </div>
      </div>
      {modalIngresar && (
        <div className={styles.modal}>
          <div onClick={toggleModalIngresar} className={styles.overlay}></div>
          <div className={styles.modal_content_Ingresar}>
            <button
              className={styles.close_modal}
              onClick={toggleModalIngresar}
            >
              x
            </button>
            <div className={styles.containerImgPerfil}>
              <button
                className={styles.boton}
                onClick={(e) => handleOnChange(e)}
              >
                <div className={styles.imagen}>
                  <img
                    src="https://i.imgur.com/S7meZ49.png"
                    alt="404"
                    className={styles.img}
                  />{" "}
                </div>
              </button>
              <button
                className={styles.boton}
                onClick={(e) => handleOnChange(e)}
              >
                <div className={styles.imagen}>
                  <img
                    src="https://i.imgur.com/iWMCoOA.png"
                    alt="404"
                    className={styles.img}
                  />{" "}
                </div>
              </button>
              <ButtonSave
                variant="contained"
                color="primary"
                size="large"
                startIcon={<SaveIcon />}
                onClick={(e) => handleOnSubmit(e)}
              >
                Guardar
              </ButtonSave>
            </div>
          </div>
        </div>
      )}
      {/* <input name="firstName" type="text" placeholder="Nombre de usuario:" />
 <input name="firstName" type="text" placeholder="Contraseña nueva:" />
 <input name="firstName" type="text" placeholder="Contraseña actual:" /> */}
    </div>
    </div>
  );
}
