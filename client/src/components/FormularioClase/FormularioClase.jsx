import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./FormStyles.module.css";
import { useNavigate } from "react-router-dom";
import { Button, Snackbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import MuiAlert from "@material-ui/lab/Alert";
import { createClass, getCategory, getCategoryAll } from "../../actions/index.js";


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const StyleAlert = withStyles({
  root: {
    marginBottom: "-10px",
    width: "300px",
  },
})(Snackbar);

export default function FormularioClase() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const category = useSelector(state => state.categoryAll)
  let id = window.localStorage.sessionUser;

  useEffect(() => {
    dispatch(getCategoryAll())
  }, [dispatch])


  const [modal, setModal] = useState(true);
  const [errors, setErrors] = useState({})
  const [input, setInput] = useState({
    title: "",
    description: "",
    studio_material: "",
    video_link: "",
    game_link: "",
    difficulty: "",
    usId: id,
    catId: ""
  }

  );


  function validate(input) {

    /* let expression = /[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi;
    let regex = new RegExp(expression); */
    let regex2 = /((http|ftp|https):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
    let errors = {};
    if (!input.title) {
      errors.title = 'El titulo es requerido';
    }
    if (!input.description) {
      errors.description = 'La descripcion es requerida';
    }
    if (!(regex2.test(input.video_link))) {
      errors.video_link = 'Debe ser una URL valida';
    }
    if (!(regex2.test(input.studio_material))) {
      errors.studio_material = 'Debe ser una URL valida';
    }
    if (!(regex2.test(input.game_link))) {
      errors.game_link = '* No obligatorio, Debe ser una URL valida';
    }
    if (!input.difficulty) {
      errors.difficulty = 'La dificultad es requerida';
    }
    if (!input.catId) {
      errors.catId = 'La tecnologia es requerida'; 
    }
    
    /* if (!input.catId) {
      errors.catId = 'La tecnologia es requerida';
    } */
    /* console.log("input: ", input.difficulty, "---", "Error:", errors.difficulty) */
    
    return errors

  }

  function searchId(categ) {
    let idCat = category.find((item) => item.name === categ)
    return idCat.id
  }



  
  function handleChange(e) {
    if (e.target.name === "catId") {
    
      validate({
        ...input,
        catId: searchId(e.target.value),
      })
    
      setInput({
        ...input,
        catId: searchId(e.target.value),
      });

    } else {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    }
  
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      }))
  
  }




  function handleOnSubmit(e) {
    e.preventDefault();
    dispatch(createClass(input));
    setInput({
      title: "",
      description: "",
      studio_material: "",
      video_link: "",
      game_link: "",
      difficulty: "",
      usId: id,
      catId:"",
    });
    setOpen(true);
    setTimeout(() => {
      navigate("/home/teacher");
    }, 2000);
  }

  const toggleModal = (e) => {
    setModal(!modal);
  };

  if (modal) {
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


  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={styles.background}>
  
      <div className={styles.containerBackground}>
      <div className={styles.about}>
            <Link to="/">
            <div className={styles.volver}>
             <ArrowBackIosIcon color="secpndary" width="200%"/>
             </div>
             </Link>
        </div>
        <div className={styles.modal}>
          <div onClick={toggleModal} className={styles.overlay}></div>
          <div className={styles.modal_content}>
            <h4> INGRESE LOS DATOS</h4>
            <Link className={styles.btnCrear} to="/home/teacher">
              <button className={styles.close_modal} onClick={toggleModal}>
                x
              </button>
            </Link>
            <div>
              <form>
                <input
                  className={errors.title && styles.danger}
                  type="text"
                  name="title"
                  placeholder="Titulo"
                  onChange={handleChange}
                />
                {errors.title && (
                  <p className={styles.danger}>{errors.title}</p>)}

                <input
                  className={errors.description && styles.danger}
                  type="text"
                  name="description"
                  placeholder="Descripcion"
                  onChange={handleChange}
                />
                {errors.description && (
                  <p className={styles.danger}>{errors.description}</p>)}

                <input
                  className={errors.studio_material && styles.danger}
                  type="text"
                  name="studio_material"
                  placeholder="Material de estudio"
                  onChange={handleChange}
                />
                {errors.studio_material && (
                  <p className={styles.danger}>{errors.studio_material}</p>)}

                <input
                  className={errors.video_link && styles.danger}
                  type="text"
                  name="video_link"
                  placeholder="Link al video"
                  onChange={handleChange}
                />
                {errors.video_link && (
                  <p className={styles.danger}>{errors.video_link}</p>)}

                <input
                  className={errors.game_link && styles.danger}
                  type="text"
                  name="game_link"
                  placeholder="Link de juegos"
                  onChange={handleChange}
                />
                {errors.game_link && (
                  <p className={styles.danger}>{errors.game_link}</p>)}

                <div className={styles.containerOptions}>
                  <select name="catId"
                    className={errors.catId ? styles.dangerSelect : styles.select}
                    onChange={handleChange}>

                    <option value="" selected disabled hidden>
                      Tecnología
                    </option>
                    {
                      category.map((e) => (
                        <option  value={e.name} key={e.id}>{e.name}</option>
                      ))
                    }
                  </select>
                {errors.catId && (
                    <p className={styles.danger}>{errors.catId}</p>)}
                </div>
                <div className={styles.containerOptions}>
                  {" "}
                  <select
                    name="difficulty"
                    className={errors.difficulty ? styles.dangerSelect : styles.select}
                    onChange={handleChange}
                  >
                    <option value="" selected disabled hidden>
                      Dificultad
                    </option>
                    <option value="Basica">Básica</option>
                    <option value="Intermedia">Intermedia</option>
                    <option value="Alta">Alta</option>
                  </select>
                </div>


                {!errors.catId && !errors.difficulty && !errors.video_link && !errors.studio_material
                  && !errors.description && !errors.title && input.difficulty?.length > 2 && (
                    <StyleButtonCrearCuenta
                      onClick={(e) => handleOnSubmit(e)}
                      type="button"
                      className={styles.btnCrearCuenta}
                      variant="contained"
                      color="primary"
                    >
                      Crear clase
                    </StyleButtonCrearCuenta>
                  )}
                <StyleAlert open={open} onClose={handleClose}>
                  <Alert severity="success">¡Clase creada exitosamente!</Alert>
                </StyleAlert>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
