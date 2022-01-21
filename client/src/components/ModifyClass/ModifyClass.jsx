
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ModifyClass.module.css";
import { useNavigate } from "react-router-dom";
import { Button, Snackbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";
import MuiAlert from "@material-ui/lab/Alert";
import { ModifyClasses, getCategoryAll } from "../../actions";
import { useParams } from 'react-router-dom'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const StyleAlert = withStyles({
  root: {

    marginBottom: "-50px",
    width: "300px",
  },
})(Snackbar);

export default function ModifyClass() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const [modal, setModal] = useState(true);
  const [input, setInput] = useState({});

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleOnSubmit(e) {
    console.log(input)
    e.preventDefault();
    dispatch(ModifyClasses(id, input));

    setInput({
      title: "",
      description: "",
      studio_material: "",
      video_link: "",
      game_link: "",
      difficulty: "",
      date: "",
      category: ""
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

  const StyleButton = withStyles({
    root: {
      marginTop: "20px",
      width: "57%",
      border: "0",
      backgroundColor: "white",
      borderRadius: "5px",
      height: "38px",
      color: "white",
      fontWeight: "500",
      fontSize: "0.9em",
      "&:hover": {
        backgroundColor: "var(--verde)",
      },
    },
    label: {
      color: "#ff8d00",
    },
  })(Button);


  const StyleSubmit = withStyles({
    root: {
      marginTop: "20px",
      width: "63%",
      border: "0",
      backgroundColor: "#ff8d00",
      borderRadius: "5px",
      height: "38px",
      color: "#ff8d00",
      fontWeight: "400",
      fontSize: "1.1em",
      "&:hover": {
        backgroundColor: "var(--verde)",
      },
    },

    label: {
      color: "white",
    },
  })(Button);

  //TRAER CATEGORIAS
  useEffect(() => {
    dispatch(getCategoryAll());
  }, [dispatch]);


  const allCategory = useSelector((state) => state.categoryAll);

  useEffect(() => {
    dispatch(getCategoryAll());
  }, [dispatch]);


  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const [titulo, setTitulo] = React.useState(false)
  const [descripcion, setDescripcion] = React.useState(false)
  const [material, setMaterial] = React.useState(false)
  const [linkVideo, setLinkvideo] = React.useState(false)
  const [linkGame, setLinkGame] = React.useState(false)
  const [difficult, setDifficult] = React.useState(false)
  const [category, setCategory] = React.useState(false)
 
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
              <label className={styles.label} >SELECCIONE EL CAMPO A MODIFICAR</label>
              <form>

                <StyleButton

                  onClick={(e) => setTitulo(!titulo)}
                  type="button"
                  className={styles.btnCrearCuenta}
                  variant="contained"
                  color="secondary"
                >
                  Titulo
                </StyleButton>
                {titulo ? <input
                  type="text"
                  name="title"
                  placeholder="Titulo"
                  onChange={handleChange}
                />
                  : null
                }

                <StyleButton
                  onClick={(e) => setDescripcion(!descripcion)}
                  type="button"
                  className={styles.btnCrearCuenta}
                  variant="contained"
                  color="secondary"
                >
                  Descripcion
                </StyleButton>
                {
                  descripcion ?
                    <input
                      type="text"
                      name="description"
                      placeholder="Descripcion"
                      onChange={handleChange}
                    />
                    : null
                }

                <StyleButton
                  onClick={(e) => setMaterial(!material)}
                  type="button"
                  className={styles.btnCrearCuenta}
                  variant="contained"
                  color="secondary"
                >
                  Material de estudio
                </StyleButton>
                {material ?
                  <input
                    type="text"
                    name="studio_material"
                    placeholder="Material de estudio"
                    onChange={handleChange}
                  />
                  : null
                }
                <StyleButton
                  onClick={(e) => setLinkvideo(!linkVideo)}
                  type="button"
                  className={styles.btnCrearCuenta}
                  variant="contained"
                  color="secondary"
                >
                  Link al video
                </StyleButton>
                {linkVideo ?
                  <input
                    type="text"
                    name="video_link"
                    placeholder="Link al video"
                    onChange={handleChange}
                  />
                  : null
                }

                <StyleButton
                  onClick={(e) => setLinkGame(!linkGame)}
                  type="button"
                  className={styles.btnCrearCuenta}
                  variant="contained"
                  color="secondary"
                >
                  Link de juegos
                </StyleButton>
                {linkGame ?
                  <input
                    type="text"
                    name="game_link"
                    placeholder="Link de juegos"
                    onChange={handleChange}
                  />
                  : null}

                <StyleButton
                  onClick={(e) => setDifficult(!difficult)}
                  type="button"
                  className={styles.btnCrearCuenta}
                  variant="contained"
                  color="secondary"
                >
                  Dificultad
                </StyleButton>

                {difficult ?
                  <div className={styles.containerOptions}>
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
                  : null
                }




              {/*   <StyleButton
                  onClick={(e) => setCategory(!category)}
                  type="button"
                  className={styles.btnCrearCuenta}
                  variant="contained"
                  color="secondary"
                >
                  Categoria
                </StyleButton>
          {category ?
                  <div className={styles.containerOptions}>
                    <select
                      name="difficulty"
                      className={styles.select}
                      onChange={handleChange}
                    >
                      <option value="" selected disabled hidden>
                        Categoria
                      </option>

                      {
                        allCategory.map((e) => (
                          <option value={e.id} key={e.name}>{e.name}</option>

                        ))
                      }
                    </select>
                  </div>
                  : null
                } */}

                <StyleSubmit
                  onClick={(e) => handleOnSubmit(e)}
                  type="button"
                  className={styles.btnCrearCuenta}
                  variant="contained"
                  color="primary"
                >
                  Modificar Clase
                </StyleSubmit>

                <StyleAlert className={styles.alert} open={open} onClose={handleClose}>
                  <Alert severity="success">¡Clase modificada exitosamente!</Alert>
                </StyleAlert>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

