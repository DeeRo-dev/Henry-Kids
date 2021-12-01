import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./LandingPage.module.css";
import { withStyles } from "@material-ui/styles";
import { useNavigate } from "react-router-dom";
import { postUser } from "../../actions/index.js";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../../firebase/firebaseConfig";
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";

// function validate(pokemon){
//   let errors = {};
//   if (!pokemon.name){
//     errors.name = "Se requiere un nombre"
//   } return errors
// }

export default function LandingPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [modalIngresar, setModalIngresar] = useState(false);
  // const [errors,setErrors] = useState({});
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    type: "",
    email: "",
    password: "",
  });

  const toggleModal = (e) => {
    setModal(!modal);
  };

  const toggleModalIngresar = (e) => {
    setModalIngresar(!modalIngresar);
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

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const StyleButtonIngresarConCorreo = withStyles({
    root: {
      marginTop: "20px",
      width: "70%",
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

/*   const StyleButtonIngresarConGoogle = withStyles({
    root: {
      marginTop: "15px",
      width: "70%",
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
  })(Button); */

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

  function onInputChange(e) {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }
  // setErrors(
  //   validate({
  //     ...user,
  //     [e.target.name]: e.target.value,
  //   })
  // );

  const registrarUsuario = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        localStorage.setItem("type", user.type);
        auth.onAuthStateChanged((user) => {
          localStorage.setItem("sessionUser", user.uid);
        });
        dispatch(postUser(user))
        if (user.type === "student") {
          //  console.log(userCredential.user);
          navigate("/home/student");
          window.location.reload()
        } else {
          navigate("/home/teacher");
          window.location.reload()
        }
      })
      /*    }) */
      .catch((error) => {
        console.log(error.code);
      });
  };

  const ingresarUsuario = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        localStorage.setItem("type", user.type);
        auth.onAuthStateChanged((user) => {
          localStorage.setItem("sessionUser", user.uid);
        });
        if(user.type === "student"){
        navigate("/home/student");
        window.location.reload()
      }else{
        navigate("/home/teacher");
        window.location.reload()
      }
      })
      .catch((error) => {
        alert(error.code);
      });
  };

  /* const ingresarUsuarioConGoogle = (e) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential.accessToken);
        // The signed-in user info.
        console.log(result.user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }; */

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
              onClick={(e) => toggleModalIngresar(e)}
              className={styles.btnIngresar}
              /* variant="contained"
              color="primary" */
            >
              Ingresar
            </StyleButtonIngresar>
            <StyleButtonRegistrarse
              onClick={toggleModal}
              className={styles.btnRegistrarse}
              variant="contained"
              color="primary"
            >
              Registrarse
            </StyleButtonRegistrarse>
          </div>

          {/* INGRESAR */}
          {modalIngresar && (
            <div className={styles.modal}>
              <div
                onClick={toggleModalIngresar}
                className={styles.overlay}
              ></div>
              <div className={styles.modal_content_Ingresar}>
                <button
                  className={styles.close_modal}
                  onClick={toggleModalIngresar}
                >
                  x
                </button>

                <div>
                  <form>
                    <input
                      onChange={(e) => onInputChange(e)}
                      name="email"
                      type="text"
                      placeholder="Email:"
                    />
                    <input
                      onChange={(e) => onInputChange(e)}
                      name="password"
                      type="password"
                      placeholder="Contraseña:"
                    />
                    <FormControl component="fieldset">
                      <RadioGroup
                        aria-label="gender"
                        defaultValue="female"
                        //  name="radio-buttons-group"
                        name="type"
                        onChange={(e) => onInputChange(e)}
                      >
                        <FormControlLabel
                          value="student"
                          control={<Radio />}
                          label="Alumno"
                        />
                        <FormControlLabel
                          value="teacher"
                          control={<Radio />}
                          label="Profesor"
                        />
                      </RadioGroup>
                    </FormControl>
                    <StyleButtonIngresarConCorreo
                      onClick={(e) => ingresarUsuario(e)}
                      type="submit"
                      className={styles.btnCrearCuenta}
                      variant="contained"
                      color="primary"
                    >
                      Ingresar
                    </StyleButtonIngresarConCorreo>
                    {/*  <StyleButtonIngresarConGoogle
                      onClick={(e) => ingresarUsuarioConGoogle(e)}
                      type="button"
                      className={styles.btnCrearCuenta}
                      variant="contained"
                      color="primary"
                    >
                      Ingresar con google
                    </StyleButtonIngresarConGoogle> */}
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* REGISTRARSE */}

          {modal && (
            <div className={styles.modal}>
              <div onClick={toggleModal} className={styles.overlay}></div>
              <div className={styles.modal_content}>
                <button className={styles.close_modal} onClick={toggleModal}>
                  x
                </button>

                <div>
                  <form>
                    <input
                      name="firstName"
                      type="text"
                      placeholder="Nombre:"
                      onChange={(e) => onInputChange(e)}
                    />
                    <input
                      name="lastName"
                      type="text"
                      placeholder="Apellido:"
                      onChange={(e) => onInputChange(e)}
                    />
                    <input
                      name="userName"
                      type="text"
                      placeholder="Nombre de usuario:"
                      onChange={(e) => onInputChange(e)}
                    />
                    <input
                      name="email"
                      type="text"
                      placeholder="Email:"
                      onChange={(e) => onInputChange(e)}
                    />
                    <input
                      name="password"
                      type="password"
                      placeholder="Contraseña:"
                      onChange={(e) => onInputChange(e)}
                    />
                    <input
                      type="password"
                      placeholder="Confirmar contraseña:"
                    />
                    <div>
                      <FormControl component="fieldset">
                        <RadioGroup
                          aria-label="gender"
                          defaultValue="female"
                          //  name="radio-buttons-group"
                          name="type"
                          onChange={(e) => onInputChange(e)}
                        >
                          <FormControlLabel
                            value="student"
                            control={<Radio />}
                            label="Alumno"
                          />
                          <FormControlLabel
                            value="teacher"
                            control={<Radio />}
                            label="Profesor"
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    {/* <Link className={styles.btnCrear} to="/home"> */}

                    <StyleButtonCrearCuenta
                      onClick={(e) => registrarUsuario(e)}
                      type="button"
                      className={styles.btnCrearCuenta}
                      variant="contained"
                      color="primary"
                    >
                      Crear cuenta
                    </StyleButtonCrearCuenta>
                    {/* </Link> */}
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
