import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "../../actions";
import styles from "./ModifyTeacher.module.css";
import SaveIcon from "@material-ui/icons/Save";
import { Button, withStyles, TextField } from "@material-ui/core";
import { makeStyles} from "@material-ui/core/styles";
import { updatePassword, auth } from "../../firebase/firebaseConfig";
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CropImage from "../CropImage/CropImage";


export default function ModifyUser() {
  const [previewImg, setPreviewImg] = useState({
 img:""
})

  const [modalCambiarFoto, setModalCambiarFoto] = useState(false);
  const [modalCambiarNombreDeUsuario, setModalCambiarNombreDeUsuario] =
  useState(false);
  const [modalCambiarContraseña, setModalCambiarContraseña] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    id: window.localStorage.sessionUser,
    userName: "",
    password: "",
    photo: "",
  });

  // function handleOnChangeCambiarFoto(e) {
  //   e.preventDefault();
  //   setUser({
  //     id: window.localStorage.sessionUser,
  //     userName: "",
  //     photo: e.target.src,
  //   });
  // }

function handlePreviewImg(e){
e.preventDefault();
/* const imgConverted =  URL.createObjectURL(e.target.files[0]) */
console.log(e)
/* setPreviewImg({
...previewImg,
img: imgConverted
}) */
}

 
  const toggleModalCambiarFoto = (e) => {
    e.preventDefault();
    setModalCambiarFoto(!modalCambiarFoto);
    console.log("entró")
  };

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
    dispatch(editUser(user.id, { userName: user.userName })).then(()=>{
      alert("Nombre de usuario actualizado")
    });;
    toggleModalCambiarNombreDeUsuario(e);
  }

  const toggleModalCambiarNombreDeUsuario = (e) => {
    e.preventDefault();
    setModalCambiarNombreDeUsuario(!modalCambiarNombreDeUsuario);
  };

  function handleOnChangeCambiarContraseña(e) {
    e.preventDefault();
    setUser({
      id: window.localStorage.sessionUser,
      password: e.target.value,
    });
  }

  function handleOnSubmitCambiarContraseña(e) {
    e.preventDefault();
    updatePassword(auth.currentUser, user.password).then(() => {
      alert("contraseña se cambió exitosamente")
    }).catch((error) => {
      alert(error)
    });
    toggleModalCambiarContraseña(e);
  }

  const toggleModalCambiarContraseña = (e) => {
    e.preventDefault();
    setModalCambiarContraseña(!modalCambiarContraseña);
  };

  /*MATERIAL UI STYLES*/
  /* const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  })); */
  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

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

  const classes = useStyles();
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
                    type="password"
                    placeholder="Nueva contraseña"
                    helperText={false}
                    onChange={(e) => handleOnChangeCambiarContraseña(e)}
                  />
                  <TextField
                    error={false}
                    type="password"
                    id="standard-error-helper-text"
                    placeholder="Contraseña actual"
                    helperText={false}
                  />

                  <ButtonSave
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={(e) => handleOnSubmitCambiarContraseña(e)}
                  >
                    Cambiar contraseña
                  </ButtonSave>
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
              <CropImage 
              toggleModalCambiarFoto={e=> toggleModalCambiarFoto(e)} 
              ></CropImage>
              {/* <div className={styles.containerImgPerfil}> */}
      {/* <img src={previewImg.img} className={styles.preview} alt="Error"/>
      <label className={styles.custom_file_upload}>UPLOAD
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" onChange={(e) => handlePreviewImg(e)} />
      </label> */}
      
                {/* <ButtonSave
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<SaveIcon/>}
                  onSubmit={(e) => handleOnSubmitCambiarFoto(e)}
                >
                  Guardar
                </ButtonSave> */}
              {/* </div> */}
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
