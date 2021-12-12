import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./LandingPage.module.css";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getUser, postUser } from "../../actions/index.js";
import NearMeIcon from '@material-ui/icons/NearMe';
import {
  auth,
  createUserWithEmailAndPassword,
  provider,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "../../firebase/firebaseConfig";
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
// import { confirmPasswordReset } from "@firebase/auth";

// function validate(pokemon){
//   let errors = {};
//   if (!pokemon.name){
//     errors.name = "Se requiere un nombre"
//   } return errors
// }

export default function LandingPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.user);
  const [modal, setModal] = useState(false);
  const [modalIngresar, setModalIngresar] = useState(false);
  // const [errors,setErrors] = useState({});
  const [user, setUser] = useState({
    id: "provi",
    firstName: "",
    lastName: "",
    userName: "",
    type: "student",
    email: ""
  });
  const [dataFirebase, setDataFirebase] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const toggleModal = (e) => {
    setModal(!modal);
  };

  useEffect(() => {
    dispatch(getUser("All"));
  }, [dispatch]);

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

  const StyleButtonRegistrarseConGoogle = withStyles({
    root: {
      marginTop: "15px",
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

  const StyleButtonIngresarConGoogle = withStyles({
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
  })(Button);

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
  const [errorFirst, setErrorFirst] = useState(false)
  const [msjFirst, setMsjFirst] = useState("")
  const [errorLast, setErrorLast] = useState(false)
  const [msjLast, setMsjLast] = useState("")
  const [errorUser, setErrorUser] = useState(false)
  const [msjUser, setMsjUser] = useState("")
  const [errorEmail, setErrorEmail] = useState(false)
  const [msjEmail, setMsjEmail] = useState("")
  const [errorpass, setErrorPass] = useState(false)
  const [msjPas, setMsjPass] = useState("")
  const [errorPassConf, setErrorPassConf] = useState(false)
  const [msjPassConf, setPassConf] = useState("")


  function onInputChangeDB(e) {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

    if (user.firstName.length < 2) {
      setErrorFirst(true)
      setMsjFirst("El nombre es requerido")
    } else {
      setErrorFirst(false)
      setMsjFirst("")
    }

    if (user.lastName.length < 2) {
      setErrorLast(true)
      setMsjLast("El apellido es requerido")
    } else {
      setErrorLast(false)
      setMsjLast("")
    }

    if (user.userName.length < 2) {
      setErrorUser(true)
      setMsjUser("El usuario es requerido")
    } else {
      setErrorUser(false)
      setMsjUser("")
    }

  }


  function onInputChangeFirebase(e) {
    e.preventDefault();
    setDataFirebase({
      ...dataFirebase,
      [e.target.name]: e.target.value,
    });

    if (!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/.test(dataFirebase.email))) {
      setErrorEmail(true)
      setMsjEmail("Debe ingresar un email valido")
    } else {
      setErrorEmail(false)
      setMsjEmail("")
    }


    if (!(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/.test(dataFirebase.password))) {
      setErrorPass(true)
      setMsjPass("La contraseña debe contener un minimo de un numero y 8 digitos")
    }
    else {
      setErrorPass(false)
      setMsjPass("") 
    }

    if (dataFirebase.password.slice(0, dataFirebase.password.length - 1) !== dataFirebase.passwordConfirm) {
      setErrorPassConf(true)
      setPassConf("Las contraseñas deben coincidir")
    } else {
      setErrorPassConf(false)
      setPassConf("")
    }
  }

  // setErrors(
  //   validate({
  //     ...user,
  //     [e.target.name]: e.target.value,
  //   })
  // );

  //------------------------------------------------------------------------------------------

  const registrarUsuario = (e) => {
    e.preventDefault();
   /*  if (dataFirebase.password !== dataFirebase.passwordConfirm) {
      alert("contraseñas diferentes");
    } else { */
      createUserWithEmailAndPassword(
        auth,
        dataFirebase.email,
        dataFirebase.password
      ).then((userCredential) => {
        localStorage.setItem("type", user.type);
        auth.onAuthStateChanged((userCredential) => {
          localStorage.setItem("sessionUser", userCredential.uid);
          //  console.log(userCredential.user);
          dispatch(postUser(user))
            .then(() => {
              navigate("/home/student");
              window.location.reload();
            })
            .catch((e) => {
              console.log(e + "este");
            });
        });
      }).catch((e)=>{
        alert(e)
      });
    
  };

  const ingresarUsuario = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, dataFirebase.email, dataFirebase.password)
      .then((userCredential) => {
        auth.onAuthStateChanged((userFirebase) => {
          localStorage.setItem("sessionUser", userFirebase.uid);
          const typeUser = allUsers.find((e) => {
            return e.id === userFirebase.uid
          })
          console.log(typeUser)
          if (typeUser.type === "student") {
            localStorage.setItem("type", "student");
            navigate("/home/student");
            window.location.reload();
          } else if (typeUser.type === "teacher") {
            localStorage.setItem("type", "teacher");
            navigate("/home/teacher");
            window.location.reload();
          }
        });
      })
      .catch((error) => {
        alert("Error de ingreso");
      });
  };

  const ingresarUsuarioConGoogle = (e) => {
    e.preventDefault();
    if (user.type === "") {
      alert("Please, select a type of user");
    } else {
      signInWithPopup(auth, provider)
        .then((result) => {
          localStorage.setItem("type", user.type);
          auth.onAuthStateChanged((userFirebase) => {
            dispatch(getUser("All")).then(() => {
              const userGoogle = allUsers?.filter(
                (e) => e.id === userFirebase.uid
              );
              if (!userGoogle.length) {
                localStorage.setItem("sessionUser", userFirebase.uid);
                if (user.type === "student") {
                  setUser({
                    ...user,
                    userName: result.user.displayName,
                  });
                  dispatch(postUser(user)).then(() => {
                    navigate("/home/student");
                    window.location.reload();
                  });
                }
                if (user.type === "teacher") {
                  console.log(user);
                  dispatch(postUser(user)).then(() => {
                    navigate("/home/teacher");
                    window.location.reload();
                  });
                }
              } else {
                if (user.type === "student") {
                  navigate("/home/student");
                  window.location.reload();
                }
                if (user.type === "teacher") {
                  navigate("/home/teacher");
                  window.location.reload();
                }
              }
            });
          });
          // This gives you a Google Access Token. You can use it to access the Google API.
          // The signed-in user info.
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          alert(error.message);
          // ...
        });
    }
  };

  return (
    <div className={styles.containerBackground}>
      <div className={styles.background}>
        <img
          className={styles.logo}
          src="https://i.imgur.com/AWEe2XR.png"
          alt="img"
        />
         {/* <div className={styles.about}> */}
            <Link to ="/about" className={styles.about}>
            ¿Qué es Henry Kids?<NearMeIcon className={styles.navigation}/> </Link>

          {/* </div> */}
        <div> 
          <div className={styles.containerBtns}>
            <StyleButtonIngresar
              onClick={(e) => toggleModalIngresar(e)}
              className={styles.btnIngresar}
              variant="contained"
              color="primary"
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
                  <form action="" name="f1">
                    <input
                      onChange={(e) => onInputChangeFirebase(e)}
                      
                      name="email"
                      type="text"
                      placeholder="Email:"
                    />
                    <input
                      onChange={(e) => onInputChangeFirebase(e)}
                      name="password"
                      type="password"
                      placeholder="Contraseña:"
                    />
                    {/* <FormControl component="fieldset">
                      <RadioGroup
                        aria-label="gender"
                        defaultValue="female"
                        //  name="radio-buttons-group"
                        name="type"
                        onChange={(e) => onInputChangeDB(e)}
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
                    </FormControl> */}
                    <StyleButtonIngresarConCorreo
                      onClick={(e) => ingresarUsuario(e)}
                      type="submit"
                      className={styles.btnCrearCuenta}
                      variant="contained"
                      color="primary"
                    >
                      Ingresar
                    </StyleButtonIngresarConCorreo>
                    {/* <StyleButtonIngresarConGoogle
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
                  <h4> INGRESE SUS DATOS</h4>
                  <form autoComplete="off">
                    <TextField
                      fullWidth
                      placeholder="Nombre:"
                      margin="normal"
                      color="primary"
                      /* id="standard-error" */
                      name="firstName"
                      type="text"
                      error={errorFirst}
                      helperText={msjFirst}
                      onChange={(e) => onInputChangeDB(e)}
                    />
                    <TextField
                      fullWidth
                      placeholder="Apellido:"
                      margin="normal"
                      color="primary"
                      /* id="standard-error" */
                      name="lastName"
                      type="text"
                      error={errorLast}
                      helperText={msjLast}
                      onChange={(e) => onInputChangeDB(e)}
                    />
                    <TextField
                      fullWidth
                      placeholder="Nombre de usuario:"
                      margin="normal"
                      name="userName"
                      color="primary"
                      error={errorUser}
                      helperText={msjUser}
                      id="standard-error"
                      type="text"
                      /* helperText={true} */
                      onChange={(e) => onInputChangeDB(e)}
                    />
                    <TextField
                      fullWidth
                      margin="normal"
                      color="primary"
                      error={errorEmail}
                      helperText={msjEmail}
                      type="text"
                      id="standard-error"
                      placeholder="Email:"
                      name="email"
                      label=""
                      onChange={e=>{
                        onInputChangeFirebase(e) 
                        onInputChangeDB(e)}}
                    />

                    <TextField
                      fullWidth
                      margin="normal"
                      color="primary"
                      error={errorpass}
                      helperText={msjPas}
                      /* name="password" */
                      name="password"
                      type="password"
                      placeholder="Contraseña:"
                      onChange={(e) => onInputChangeFirebase(e)}
                    />

                    <TextField
                      fullWidth
                      margin="normal"
                      color="primary"
                      error={errorPassConf}
                      name="passwordConfirm"
                      type="password"
                      helperText={msjPassConf}
                      placeholder="Confirmar contraseña:"
                      onChange={(e) => onInputChangeFirebase(e)}
                    />
                    {/* <div>
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
                    </div> */}
                    {/* <Link className={styles.btnCrear} to="/home"> */}
                    {!errorFirst && !errorLast && !errorUser
                      && !errorEmail && !errorpass && !errorPassConf &&
                       dataFirebase.passwordConfirm.length > 7?
                      <StyleButtonCrearCuenta
                        onClick={(e) => registrarUsuario(e)}
                        type="button"
                        className={styles.btnCrearCuenta}
                        variant="contained"
                        color="primary"
                      >
                        Crear cuenta
                      </StyleButtonCrearCuenta>
                      : null}
                    {/*  <StyleButtonRegistrarseConGoogle
                      onClick={(e) => ingresarUsuarioConGoogle(e)}
                      type="button"
                      className={styles.btnCrearCuenta}
                      variant="contained"
                      color="primary"
                    >
                      Crear cuenta con google
                    </StyleButtonRegistrarseConGoogle> */}
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
