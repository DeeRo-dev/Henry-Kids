import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "../../actions";
import styles from "./ModifyUser.module.css";
import SaveIcon from "@material-ui/icons/Save";
import { Button, withStyles, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function ModifyUser() {
  const [modalCambiarFoto, setModalCambiarFoto] = useState(false);
  const [modalCambiarNombreDeUsuario, setModalCambiarNombreDeUsuario] = useState(false);
  const [error, setError] = useState(false)
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    id: "",
    userName: "",
    password: "",
    photo: "",
  });

  function handleOnChangeCambiarFoto(e) {
    e.preventDefault();
    setUser({
      id: window.localStorage.sessionUser,
      userName: "",
      photo: e.target.src,
    });
  }
  function handleOnSubmitCambiarFoto(e) {
    e.preventDefault();
    dispatch(editUser(user.id, { photo: user.photo }));
    toggleModalCambiarFoto(e);
  }

  const toggleModalCambiarFoto = (e) => {
    e.preventDefault();
    setModalCambiarFoto(!modalCambiarFoto);
  };

  function handleOnChangeCambiarNombreDeUsuario(e) {
    e.preventDefault();
    setUser({
      id: window.localStorage.sessionUser,
      userName: e.target.value,
    });
  }
  function handleOnSubmitCambiarNombreDeUsuario(e) {
    e.preventDefault();
    dispatch(editUser(user.id, { nameUser: user.userName }));
    toggleModalCambiarNombreDeUsuario(e);
  }

  const toggleModalCambiarNombreDeUsuario = (e) => {
    e.preventDefault();
    setModalCambiarNombreDeUsuario(!modalCambiarNombreDeUsuario);
  };

  /*MATERIAL UI STYLES*/
  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));
  const classes = useStyles();

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
      backgroundColor: "green",
      marginTop: "40px",
      "&:hover": {
        backgroundColor: "green"
      }
    },
    label: {
      color: "white",
    },
  })(Button);
  /*MATERIAL UI STYLES*/

  return (
    <div className={styles.containerBackground}>
      <div className={styles.background}>
        <div className={styles.containerBtns}>
          <div className={styles.btns}>
            <StyleButtonIngresar
              onClick={(e) => toggleModalCambiarNombreDeUsuario(e)}
              className={styles.btnIngresar}
            >
              {" "}
              Cambiar nombre de usuario
            </StyleButtonIngresar>
            <StyleButtonIngresar className={styles.btnIngresar}>
              {" "}
              Cambiar contraseña
            </StyleButtonIngresar>
            <StyleButtonIngresar
              className={styles.btnIngresar}
              onClick={(e) => toggleModalCambiarFoto(e)}
            >
              {" "}
              Cambiar foto
            </StyleButtonIngresar>
          </div>
        </div>

        {/*CAMBIAR NOMBRE DE USUARIO*/}

        {modalCambiarNombreDeUsuario && (
          <div className={styles.modal}>
            <div
              onClick={toggleModalCambiarNombreDeUsuario}
              className={styles.overlay}
            ></div>
            <div className={styles.modal_content_Cambiar_Nombre_De_Usuario}>
              <button
                className={styles.close_modal}
                onClick={toggleModalCambiarNombreDeUsuario}
              >
                x
              </button>

              <form className={classes.root} noValidate autoComplete="off">
                <div>
                
                  <TextField
                    error={false}
                    id="standard-error"
                    placeholder="Nuevo nombre de usuario"
                    helperText={false}
                    onChange={(e) => handleOnChangeCambiarNombreDeUsuario(e)}
                  />
                  <TextField
                    error={false}
                    id="standard-error-helper-text"
                    placeholder="Escribe tu contraseña"
                    helperText={false}
                  />

                  <ButtonSave
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={(e) => handleOnSubmitCambiarNombreDeUsuario(e)}
                  >Cambiar nombre de usuario
                  </ButtonSave>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* CAMBIAR FOTO */}
        {modalCambiarFoto && (
          <div className={styles.modal}>
            <div
              onClick={toggleModalCambiarFoto}
              className={styles.overlay}
            ></div>
            <div className={styles.modal_content_Cambiar_Foto}>
              <button
                className={styles.close_modal}
                onClick={toggleModalCambiarFoto}
              >
                x
              </button>
              <div className={styles.containerImgPerfil}>
                <button
                  className={styles.boton}
                  onClick={(e) => handleOnChangeCambiarFoto(e)}
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
                  onClick={(e) => handleOnChangeCambiarFoto(e)}
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
                  onClick={(e) => handleOnSubmitCambiarFoto(e)}
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
