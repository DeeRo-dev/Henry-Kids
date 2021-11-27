import React, { useState } from "react";
import { useDispatch } from "react-redux"
import styles from "./LandingPage.module.css";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { Link, useNavigate } from "react-router-dom";
import { postUser } from "../../actions/index.js";

// function validate(pokemon){
//   let errors = {};
//   if (!pokemon.name){
//     errors.name = "Se requiere un nombre"
//   } return errors
// }

export default function LandingPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [modalIngresar, setModalIngresar] = useState(false);
  // const [errors,setErrors] = useState({});


  const [user, setUser] = useState({
    firstName: "",
    lastName: [],
    userName: "",
    type: 0,
    email: 0,
    password: 0
  });


  function onInputChange(e) {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    // setErrors(
    //   validate({
    //     ...user,
    //     [e.target.name]: e.target.value,
    //   })
    // );
  }
  
  function onSubmit(e) {
    e.preventDefault();
    dispatch(postUser(user));
    setUser({
      firstName: "",
      lastName: "",
      userName: "",
      type: "",
      email: "",
      password: "",
    });
   navigate("/home");
  }
  

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

  

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }




  return (
    <div className={styles.containerBackground}>
      <div className={styles.background}>
      <Link to="home"  >
     <img
          className={styles.logo}
          src="https://i.imgur.com/AWEe2XR.png"
          alt="img"
         
        />
      </Link>
        
      
       
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
              /* className={styles.btnRegistrarse} */
              variant="contained"
              color="primary"
            >
              Registrarse
            </StyleButtonRegistrarse>
          </div>

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
                    <input name="email" type="text" placeholder="Email:" />
                    <input type="password" placeholder="Contraseña:" />

                    <FormControl component="fieldset">
                      <RadioGroup
                        aria-label="Type"
                        defaultValue="female"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          value="Alumno"
                          control={<Radio />}
                          label="Alumno"
                        />
                        <FormControlLabel
                          value="Profesor"
                          control={<Radio />}
                          label="Profesor"
                        />
                      </RadioGroup>
                    </FormControl>

                    <Link className={styles.btnCrear} to="/home">
                      <StyleButtonCrearCuenta
                        type="submit"
                        className={styles.btnCrearCuenta}
                        variant="contained"
                        color="primary"
                      >
                        Ingresar
                      </StyleButtonCrearCuenta>
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          )}

          {modal && (
            <div className={styles.modal}>
              <div onClick={toggleModal} className={styles.overlay}></div>
              <div className={styles.modal_content}>
                <button className={styles.close_modal} onClick={toggleModal}>
                  x
                </button>

                <div>
                  <form onSumbit={onSubmit}>
                    <input name="firstName" type="text" placeholder="Nombre:" onChange={e=>onInputChange(e)}/>
                    <input name="lastName" type="text" placeholder="Apellido:" onChange={e=>onInputChange(e)} />
                    <input name="userName" type="text" placeholder="Nombre de usuario:" onChange={e=>onInputChange(e)} />
                    <input name="email" type="text" placeholder="Email:" onChange={e=>onInputChange(e)} />
                    <input name="password" type="password" placeholder="Contraseña:" onChange={e=>onInputChange(e)} />
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
                           onChange={e=>onInputChange(e)}
                        >
                          <FormControlLabel
                            value="Alumno"
                            control={<Radio />}
                            label="Alumno"
                          />
                          <FormControlLabel
                            value="Profesor"
                            control={<Radio />}
                            label="Profesor"
                         
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    {/* <Link className={styles.btnCrear} to="/home"> */}
                      <StyleButtonCrearCuenta
                        type="submit"
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
