import React from "react";
import { useEffect } from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ClassDetail.module.css";
import { Link, useParams } from "react-router-dom";
import { getClassById, sendComment, getClasEvaUs } from "../../actions";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button, withStyles } from "@material-ui/core";
import Comments from "../Comments/Comments"
import axios from "axios";
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CancelIcon from '@material-ui/icons/Cancel';

export default function ClassDetail() {

  const { id } = useParams();
  const dispatch = useDispatch();

  const [value, setValue] = React.useState("Controlled");
  const [comment, setComment] = React.useState({
    userId: window.localStorage.sessionUser,
    classId: id,
    name: "",
  });

  useEffect(() => {
    dispatch(getClassById(id));
  }, [id, dispatch]);

  

  const detail = useSelector((state) => state.classById[0]);
  console.log(detail)



  const StyleAlert = withStyles({
    root: {
      background: "hsla(0, 0%, 100%, 0.438)",
      marginBottom: "150px",
      width: "330px",
      border: "1px solid #fff",
      boxShadow: "1px -2px 10px black"


    },
  })(Snackbar);

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const StyleButtonSendComment = withStyles({
    root: {
      marginTop: "20px",
      width: "100px",
      border: "0",
      backgroundColor: "#ff8d00",
      borderRadius: "5px",
      height: "40px",
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
  ///DONAR AL PROFE :DATOS
  function onSubmitDonar(e) {
    setOpen(!open);
  }
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    dispatch(sendComment(comment)).then(() => {
      window.location.reload();
    });
  };

  const handleChangeComment = (e) => {
    e.preventDefault();
    setComment({
      ...comment,
      name: e.target.value,
    });
  };




  const idUser = window.localStorage.sessionUser;

  useEffect(() => { dispatch(getClasEvaUs(id)) }, [])
  const userss = useSelector((state) => state.valoracion2)


  const [open, setOpen] = React.useState(false);


  function onChangeVal(value) {

    
    let aux = {
      nota: value,
      classId: id,
      userId: idUser
    }
    axios.post("https://henry-kids.herokuapp.com/evaluation/", aux).then(() => {
      
    dispatch(getClasEvaUs(id))
    
      
    }).then(()=>{
      dispatch(getClassById(id))
    });}


  const teacherClass = detail?.users?.find((user) => user.type === "teacher");
 

  return (
    <div className={styles.contentDetail}>
      {detail && (
        <div>
          <div className={styles.back}>
            <Link to="/home/student">
              <ArrowBackIosIcon />
            </Link>{" "}
          </div>

          <div className={styles.contentTitle}>
            <h1>{detail.title}</h1>
          </div>


          <div className={styles.contentVideo}>
            <ReactPlayer
              url={detail.video_link}
              className={styles.react_player}
              playing={false}
              width="832px"
              height="468px"
              controls={true}
              pip={true}
            /*   width=""640px"
              height="360px
 */         />
          </div>
          <div className={styles.contentDifyValorado}>
            <div className={styles.contentDifficult}>
              Dificultad: {detail.difficulty}
            </div>


            <div>


              {
                (userss.userId === idUser) ?
                  <div className={styles.divValoration}>
                    <h3 className={styles.titlePromedio}>Promedio de la clase:</h3>
                    <p className={styles.clasificacion}>
                      <input checked={userss.Promedio === 5 ? true : false} id="radio1" type="radio" name="estrellas" value="5" />
                      <label for="radio1">★</label>
                      <input checked={userss.Promedio === 4 ? true : false} id="radio2" type="radio" name="estrellas" value="4" />
                      <label for="radio2">★</label>
                      <input checked={userss.Promedio === 3 ? true : false} id="radio3" type="radio" name="estrellas" value="3" />
                      <label for="radio3">★</label>
                      <input checked={userss.Promedio === 2 ? true : false} id="radio4" type="radio" name="estrellas" value="2" />
                      <label for="radio4">★</label>
                      <input checked={userss.Promedio === 1 ? true : false} id="radio5" type="radio" name="estrellas" value="1" />
                      <label for="radio5">★</label>
                    </p>
                  </div>
                  :
                  <div className={styles.divValoration}>
                    <h3 className={styles.titleValoration}>Califica la clase</h3>
                    <p className={styles.clasificacion2}>
                      <input onClick={() => onChangeVal(5)} id="radio1" type="radio" name="estrellas" value="5" />
                      <label for="radio1">★</label>
                      <input onClick={() => onChangeVal(4)} id="radio2" type="radio" name="estrellas" value="4" />
                      <label for="radio2">★</label>
                      <input onClick={() => onChangeVal(3)} id="radio3" type="radio" name="estrellas" value="3" />
                      <label for="radio3">★</label>
                      <input onClick={() => onChangeVal(2)} id="radio4" type="radio" name="estrellas" value="2" />
                      <label for="radio4">★</label>
                      <input onClick={() => onChangeVal(1)} id="radio5" type="radio" name="estrellas" value="1" />
                      <label for="radio5">★</label>
                    </p>
                  </div>
              }

            </div>


          </div>
          <div className={styles.contentDescription}>{detail.description}</div>

          <div>
            <a className={styles.studio} href={detail.studio_material } target='_blank' rel="noreferrer">Haciendo click aqui podras encontrar mas material sobre la clase!</a>  
          </div>

          {detail.game_link ? (
            <div className={styles.contentGame}>
              <p className={styles.titleJuego}>¡Aprendamos jugando!</p>
              <iframe
                src={detail.game_link}
                title="game"
                width="593"
                height="562"
                frameBorder="0"
                scrolling="no"
              ></iframe>
            </div>)
            :null}

          {/* cartel datos cuenta */}
          <StyleAlert className={styles.alert} open={open}>
            <div className={styles.divAlert}>
              <CancelIcon onClick={() => onSubmitDonar()} className={styles.btnIcon} />
              <AccountCircleIcon className={styles.iconCuenta} />
              <h4 className={styles.datosTeacher}>&nbsp;Profesor:&nbsp;{teacherClass.firstName}&nbsp;{teacherClass.lastName}&nbsp;&nbsp;&nbsp;</h4>
              <h4 className={styles.datosCta}>Cuenta: {teacherClass.cuentaBancaria}</h4>
            </div>
          </StyleAlert>
          
          <div className={styles.inputDonar}>
              <div onClick={() => onSubmitDonar()}><AccountBalanceIcon className={styles.icon} /><input type="button"
                className={styles.btnDonar} value="¿Quieres colaborar con el profesor?" />
              </div>
            </div>
          <div className={styles.comments}>
            <Comments detail={detail}></Comments>
            <TextField
              onChange={(e) => handleChangeComment(e)}
              id="outlined-multiline-static"
              label="Comentario"
              multiline
              rows={4}
              variant="outlined"
              type="submit"
            />
            <StyleButtonSendComment onClick={(e) => handleSubmitComment(e)}>
              Enviar
            </StyleButtonSendComment>

            
           


          </div>
        </div>
      )}
    </div>
  );
}
