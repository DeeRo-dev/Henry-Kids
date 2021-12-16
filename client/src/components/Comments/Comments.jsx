import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import styles from "./Comments.module.css";
import { makeStyles } from "@material-ui/styles";
import { useDispatch } from "react-redux";
import { editComment, deleteComment, responseComment } from "../../actions";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

export default function Comments({ detail }) {
  const dispatch = useDispatch();
  const [modalEditarComentario, setModalEditarComentario] = useState(false);
  const [modalBorrarComentario, setModalBorrarComentario] = useState(false);
  const [modalResponderComentario, setModalResponderComentario] = useState(false);
  const [oldComment, setOldComment] = useState();
  const [newComment, setNewComment] = useState({ id: "", name: "" });
  const [newResponse, setNewResponse] = useState({ id: "", name: "" });
  const [currentId, setCurrentId] = useState();

  const StyleAlert = withStyles({
    root: {
      marginBottom: "5px",
      display: "flex",
      justifyContent: "center",
    },
  })(Alert);

  const useStyles = makeStyles((theme) => ({
    img: {
      width: "55px",
      height: "55px",
    },
    root: {
      width: "100%",
      "& > * + *": {
        /*  marginTop: theme.spacing(2), */
      },
    },
  }));

  const classes = useStyles();

  const toggleModalBorrarComentario = (event, id) => {
    event.preventDefault();
     if (!modalBorrarComentario) {
      const comment = detail.comments.find(
        (element) => element.id === parseInt(event.target.name)
      );
      setOldComment(comment.name);
      setNewComment({
        id: comment.id,
        name: comment.name,
      });
    } 
    setCurrentId(id);
    setModalBorrarComentario(!modalBorrarComentario);
  };

  const toggleModalEditarComentario = (event) => {
    event.preventDefault();
    if (!modalEditarComentario) {
      const comment = detail.comments.find(
        (element) => element.id === parseInt(event.target.name)
      );
      setOldComment(comment.name);
      setNewComment({
        id: comment.id,
        name: comment.name,
      });
    }
    setModalEditarComentario(!modalEditarComentario);
  };

  const toggleModalResponderComentario = (event) => {
    event.preventDefault();
    if (!modalResponderComentario) {
      const comment = detail.comments.find(
        (element) => element.id === parseInt(event.target.name)
      );
      setNewResponse({
        ...newResponse,
        id: comment.id,
      });
    }
    setModalResponderComentario(!modalResponderComentario);
  };

  function handleChangeResponseComment(e) {
    e.preventDefault();
    setNewResponse({
      ...newResponse,
      name: e.target.value,
    });
  }

  function handleChangeComment(e) {
    e.preventDefault();
    setNewComment({
      ...newComment,
      name: e.target.value,
    });
  }
  function handleEditComment(e) {
    e.preventDefault();
    dispatch(editComment(newComment.id, { name: newComment.name })).then(() => {
      alert("comentario Editado");
      window.location.reload();
    });
  }

  function handleResponderComment(e) {
    e.preventDefault();
    dispatch(responseComment(newResponse.id, { response: newResponse.name })).then(() => {
      alert("Respuesta Enviada");
      window.location.reload();
    });
  }
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  function onSubmitDelete(e) {
    const comment = detail.comments.find(
      (element) => element.id === parseInt(e.target.name)
    );
    dispatch(deleteComment(comment.id)).then(() => {
      window.location.reload()
    });

  }

  // function DescriptionAlerts() {}

  return (
    <div className={styles.comments}>
      <h3 className={styles.titleComment}>Comentarios</h3>
      {detail.comments &&
        detail.comments.map((e) => {
          return (
            <div className={styles.media}>
              <div className={styles.user}>
                <Avatar src={e.users.length ? e.users[0].photo  : ""} className={classes.img} />
                <h3 className={styles.nombre}>{e.users[0].userName}</h3>
              </div>
              <p className={styles.comentario}>{e.name}</p>
              <div className={styles.botones}>
                {/* <button name={e.id} onClick={(event) => toggleModalResponderComentario(event)}>Responder</button> */}

                {/*EDITAR COMENTARIO*/}
                <button
                  name={e.id}
                  onClick={(event) => toggleModalEditarComentario(event)}
                >
                  Editar
                </button>
                <button
                  name={e.id}
                  onClick={(event) =>
                    /* onSubmitDelete(e) */ toggleModalBorrarComentario(
                      event,
                      e.id
                    )
                  }
                >
                  Borrar
                </button>
              </div>
            </div>
          );
        })}

{modalResponderComentario && (
        <div className={styles.modal}>
          <div
            onClick={toggleModalEditarComentario}
            className={styles.overlay}
          ></div>
          <div className={styles.modal_content_Cambiar_Contraseña}>
            <button
              className={styles.close_modal}
              onClick={toggleModalResponderComentario}
            >
              x
            </button>
            <TextField
              multiline
              onChange={(e) => handleChangeResponseComment(e)}
            ></TextField>
            <Button onClick={(e) => handleResponderComment(e)}>Enviar</Button>
          </div>
        </div>
      )}


      {modalEditarComentario && (
        <div className={styles.modal}>
          <div
            onClick={toggleModalEditarComentario}
            className={styles.overlay}
          ></div>
          <div className={styles.modal_content_Cambiar_Contraseña}>
            <button
              className={styles.close_modal}
              onClick={toggleModalEditarComentario}
            >
              x
            </button>
            <TextField
              multiline
              defaultValue={oldComment}
              onChange={(e) => handleChangeComment(e)}
            ></TextField>
            <Button onClick={(e) => handleEditComment(e)}>Enviar</Button>
          </div>
        </div>
      )}
      {modalBorrarComentario && (
        <div className={styles.modal}>
          <div
            onClick={toggleModalBorrarComentario}
            className={styles.overlay}
          ></div>
          <div className={styles.modal_content_Cambiar_Contraseña}>
            <StyleAlert
              open={open}
              /* onClose={handleClose} */ severity="warning"
            >
              {/* <button
              className={styles.close_modal}
              onClick={toggleModalBorrarComentario}
            >
              x
            </button> */}
              <AlertTitle>¿Desea eliminar el comentario?</AlertTitle>
            </StyleAlert>
            <button   name={currentId} /* className={styles.btn2} */onClick={(e) => onSubmitDelete(e)}  className={styles.buttons}>Confirmar</button>
            <button
              /* className={styles.btn1} */onClick={toggleModalBorrarComentario} className={styles.buttons}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
