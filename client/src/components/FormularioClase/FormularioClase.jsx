import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./FormStyles.module.css";
import { useNavigate } from "react-router-dom";
import { Button, Snackbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import MuiAlert from "@material-ui/lab/Alert";
import { createClass, getCategory } from "../../actions/index.js";


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
  const category = useSelector(state => state.category)
  console.log( "category, useselector",category)
  
  let id = window.localStorage.sessionUser;

  useEffect(() => {
    dispatch(getCategory())
  }, [dispatch])

 
  const [modal, setModal] = useState(true);
  const [input, setInput] = useState({
    title: "",
    description: "",
    studio_material: "",
    video_link: "",
    game_link: "",
    difficulty: "",
    idUs: id,
    catId:""
  });

  function searchId(categ) {
    let idCat = category.find((item) => item.name === categ)
    return idCat.id
  }

  function handleChange(e) {
    if (e.target.name === "category") {
      console.log(e.target.value)
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
      idUs: id,
      catId: "",
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
        <div className={styles.modal}>
          <div onClick={toggleModal} className={styles.overlay}></div>
          <div className={styles.modal_content}>
            <Link className={styles.btnCrear} to="/home/teacher">
              <button className={styles.close_modal} onClick={toggleModal}>
                x
              </button>
            </Link>
            <div>
              <form>
                <input
                  type="text"
                  name="title"
                  placeholder="Titulo"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="description"
                  placeholder="Descripcion"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="studio_material"
                  placeholder="Material de estudio"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="video_link"
                  placeholder="Link al video"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="game_link"
                  placeholder="Link de juegos"
                  onChange={handleChange}
                />
                <div className={styles.containerOptions}>
                  {" "}
                  <select
                    name="difficulty"
                    className={styles.select}
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
                <div className={styles.containerOptions}>

                  <select name="category" className={styles.select} onChange={handleChange}>
                    {
                      category.map((e) => (
                        <option value={e.name} key={e.id}>{e.name}</option>
                      ))
                    }
                  </select>
                </div>

                <StyleButtonCrearCuenta
                  onClick={(e) => handleOnSubmit(e)}
                  type="button"
                  className={styles.btnCrearCuenta}
                  variant="contained"
                  color="primary"
                >
                  Crear clase
                </StyleButtonCrearCuenta>

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
