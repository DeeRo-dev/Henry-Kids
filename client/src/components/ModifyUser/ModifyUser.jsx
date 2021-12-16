import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "../../actions";
import styles from "./ModifyUser.module.css";
import SaveIcon from "@material-ui/icons/Save";
import { Button, withStyles, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { updatePassword, auth } from "../../firebase/firebaseConfig";
import { EmailAuthProvider, getAuth, reauthenticateWithCredential } from "firebase/auth";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

export default function ModifyUser() {

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const [modalCambiarFoto, setModalCambiarFoto] = useState(false);
  const [modalCambiarNombreDeUsuario, setModalCambiarNombreDeUsuario] = useState(false);
  const [modalCambiarContraseña, setModalCambiarContraseña] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const [userState, setUser] = useState({
    id: window.localStorage.sessionUser,
    userName: "",
    password: "",
    newPassword:"",
    photo: "",
    mail:""
  });
  const StyleAlert = withStyles({
    root: {
       
      marginBottom: "-50px",
      width: "300px",
    },
  })(Snackbar);

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  // CAMBIO DE FOTO--------------------------------------------------------------------------------------------

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
    dispatch(editUser(userState.id, { photo: userState.photo }));
    toggleModalCambiarFoto(e);
  }

  const toggleModalCambiarFoto = (e) => {
    e.preventDefault();
    setModalCambiarFoto(!modalCambiarFoto);
  };
  // CAMBIO DE USUARIO----------------------------------------------------------------------------------------------------------------
  function handleOnChangeCambiarNombreDeUsuario(e) {
    e.preventDefault();
    window.localStorage.setItem("userName", e.target.value)
    setUser({
      id: window.localStorage.sessionUser,
      userName: e.target.value,
    });
  }
  function handleOnSubmitCambiarNombreDeUsuario(e) {
    e.preventDefault();
    dispatch(editUser(userState.id, { userName: userState.userName })).then(()=>{
      alert("Nombre de usuario actualizado")
    });
    toggleModalCambiarNombreDeUsuario(e);
  }

  const toggleModalCambiarNombreDeUsuario = (e) => {
    e.preventDefault();
    setModalCambiarNombreDeUsuario(!modalCambiarNombreDeUsuario);
  };

  const [errorPass, setErrorPass] = useState(false)
  const [msjPas, setMsjPass] = useState("")


  // CAMBIO DE PASSWORD----------------------------------------------------------------------------------
  function handleOnChangeCambiarContraseña(e) {
    e.preventDefault();
    if ((!(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/.test(e.target.value)))) {
      setErrorPass(true)
      setMsjPass("La nueva contraseña debe contener 8 digitos y 1 numero")
    } else {
      setErrorPass(false);
      setMsjPass("")
    }

    setUser({
      ...userState,
      [e.target.name]: e.target.value,
    });

  }
 

  function handleOnSubmitCambiarContraseña(e) {
    e.preventDefault();

    const auth = getAuth();
    const user = auth.currentUser;
    console.log(userState.password)
    // TODO(you): prompt the user to re-provide their sign-in credentials
     const credential = EmailAuthProvider.credential(userState.mail.toString(), userState.password.toString())
  
   /* ("prueba@prueba.com","prueba904" "904") */

    reauthenticateWithCredential(user,  credential ).then(() => {

      updatePassword(auth.currentUser, userState.newPassword).then(() => {
      setOpen(true) /*  alert("contraseña se cambió exitosamente") */
      setTimeout(() => {
        toggleModalCambiarContraseña(e);
      }, 3000);  
    }).catch((error) => {
        alert(error);
        console.log(error)
      });
  

    }).catch((error) => {
      alert(error);
      console.log(error)
    });

  }

    const toggleModalCambiarContraseña = (e) => {
      e.preventDefault();
      setModalCambiarContraseña(!modalCambiarContraseña);
    };
    //-------------------------------------------------------------------------------------------------------
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
          backgroundColor: "green",
        },
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
              <StyleButtonIngresar
                onClick={(e) => toggleModalCambiarContraseña(e)}
                className={styles.btnIngresar}
              >
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

          {/*CAMBIAR CONTRASEÑA*/}

          {modalCambiarContraseña && (
            <div className={styles.modal}>
              <div
                onClick={toggleModalCambiarContraseña}
                className={styles.overlay}
              ></div>
              <div className={styles.modal_content_Cambiar_Contraseña}>
                <button
                  className={styles.close_modal}
                  onClick={toggleModalCambiarContraseña}
                >
                  x
                </button>

                <form className={classes.root} noValidate autoComplete="off">
                  <div>
                  <TextField
                      error={false}
                      id="standard-error"
                      name="mail"
                      type="text"
                      placeholder="Reingrese su Mail"
                      helperText={false}
                      onChange={(e) => handleOnChangeCambiarContraseña(e)}
                    />
                  
                    <TextField
                      error={errorPass}
                      id="standard-error"
                      name="newPassword"
                      type="password"
                      placeholder="Nueva contraseña"
                      helperText={msjPas}
                      onChange={(e) => handleOnChangeCambiarContraseña(e)}
                    />

                    <TextField
                      error={false}
                      name="password"
                      type="password"
                      id="standard-error-helper-text"
                      placeholder="Contraseña actual"
                      helperText={false}
                      onChange={(e) => handleOnChangeCambiarContraseña(e)}
                    />

                    <ButtonSave
                      variant="contained"
                      color="primary"
                      size="large"
                      onClick={(e) => handleOnSubmitCambiarContraseña(e)}
                    >
                      Cambiar contraseña
                    </ButtonSave>
                  
                    <StyleAlert className={styles.alert}  open={open} onClose={handleClose} >
                  <Alert severity="success">¡Contraseña modificada exitosamente!</Alert>
                </StyleAlert>
                  </div>
                  
                </form>
              </div>
            </div>
          )}

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

                    <ButtonSave
                      variant="contained"
                      color="primary"
                      size="large"
                      onClick={(e) => handleOnSubmitCambiarNombreDeUsuario(e)}
                    >
                      Cambiar nombre de usuario
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
