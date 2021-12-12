import React from "react";
import { useEffect } from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ClassDetail.module.css";
import { Link, useParams } from "react-router-dom";
import { getClassById, sendComment,getClasEvaUs } from "../../actions";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button, withStyles } from "@material-ui/core";
import Comments from "../Comments/Comments"
import axios from "axios";

export default function ClassDetail() {
  const { id } = useParams();
  const [value, setValue] = React.useState("Controlled");
  const [comment, setComment] = React.useState({
    userId: window.localStorage.sessionUser,
    classId: id,
    name: "",
  });
  const dispatch = useDispatch();

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

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    dispatch(sendComment(comment)).then(()=>{
      window.location.reload()
    })
  };

  const handleChangeComment = (e) => {
    e.preventDefault();
    setComment({
      ...comment,
      name: e.target.value,
    });
  };
  const detail = useSelector((state) => state.classById[0]);

  useEffect(() => {
    dispatch(getClassById(id));
  }, [id, dispatch]);


  const idUser = window.localStorage.sessionUser;
   
  useEffect (()=> {dispatch(getClasEvaUs(id))},[dispatch,id])
  const userss = useSelector((state) => state.valoracion2)
  console.log(userss) 

  
 
  
  function  onChangeVal (value){
  
    console.log(idUser)
  console.log(id) 
    let aux={
      nota:value,
      classId:id,    
      userId:idUser
  }
     axios.post("https://henry-kids.herokuapp.com/evaluation/",aux)
  }

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
          <div className={styles.contentDifficult}>
            Dificultad: {detail.difficulty}
          </div>

          <div className={styles.contentVideo}>
            <ReactPlayer
              url={detail.video_link}
              className={styles.react_player}
              playing={false}
              width="640px"
              height="360px"
              controls={true}
              pip={true}
            />
          </div>

          <div className={styles.contentDescription}>{detail.description}</div>
          <div  >
          
            {
              (userss.userId===idUser)?
              <p className={styles.clasificacion}>
              <input  checked={userss.Promedio===5? true: false} id="radio1" type="radio"  name="estrellas" value="5"/>
              <label  for="radio1">★</label>
              <input  checked={userss.Promedio===4? true: false} id="radio2" type="radio" name="estrellas" value="4"/>
              <label for="radio2">★</label>
              <input  checked={userss.Promedio===3? true: false} id="radio3" type="radio" name="estrellas" value="3"/>
              <label for="radio3">★</label>
              <input  checked={userss.Promedio===2? true: false} id="radio4" type="radio" name="estrellas" value="2"/>
              <label for="radio4">★</label>
              <input  checked={userss.Promedio===1? true: false} id="radio5" type="radio" name="estrellas" value="1"/>
              <label for="radio5">★</label>
                      </p>
              :
              <p className={styles.clasificacion2}>
                <p>Valorar Clase</p>
              <input  onClick={ ()=> onChangeVal(5) } id="radio1" type="radio"  name="estrellas" value="5"/>
              <label  for="radio1">★</label>
              <input  onClick={ ()=> onChangeVal(4) } id="radio2" type="radio" name="estrellas" value="4"/>
              <label for="radio2">★</label>
              <input  onClick={ ()=> onChangeVal(3) } id="radio3" type="radio" name="estrellas" value="3"/>
              <label for="radio3">★</label>
              <input  onClick={ ()=> onChangeVal(2) } id="radio4" type="radio" name="estrellas" value="2"/>
              <label for="radio4">★</label>
              <input  onClick={ ()=> onChangeVal(1) } id="radio5" type="radio" name="estrellas" value="1"/>
              <label for="radio5">★</label>
                      </p>
            }
   
          </div>

          {/* <iframe width="727" height="409" src="https://www.youtube.com/embed/LO2RPDZkY88" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe> */}
          {/*  "https://scratch.mit.edu/projects/216620796/embed"   */}

          {/* {detail.game_link ? (
            <div className={styles.contentGame}>
              <p>Aprendamos jugando!</p>
              <iframe
                src="https://scratch.mit.edu/projects/216620796/embed"
                title="game"
                width="485"
                height="402"
                frameBorder="0"
                scrolling="no"
              ></iframe>
            </div>
          ) : null} */}
         
          <div className={styles.comments}>
            <div className={styles.comment}>
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
        </div>
      )}
    </div>
  );
}
