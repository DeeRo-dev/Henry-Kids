import React from "react";
import { useEffect } from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ClassDetail.module.css";
import { Link, useParams } from "react-router-dom";
import { getClassById } from "../../actions";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export default function ClassDetail() {

  const detail = useSelector((state) => state.classById[0]);
  
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClassById(id));
  }, [id, dispatch]);

  return (
    <div className={styles.contentDetail}>
      {detail && (
        <div>

          <div className={styles.header}>
            <div className={styles.back}>
              <Link to="/home/student">
                <ArrowBackIosIcon />
              </Link> VOLVER
            </div>

            <div className={styles.contentTitle}>
              <h1>{detail.title}</h1>
            </div>

          </div>
          <div className={styles.contentVideo}>
            <div className= {styles.boxLeft}>
            <ReactPlayer
              url={detail.video_link}
              className={styles.react_player}
              playing={false}
              width="640px"
              height="360px"
              controls={true}
              pip={true}
            />
         
            <div className={styles.contentDifficult}>
              Dificultad: {detail.difficulty}
            </div>
            <div className={styles.contentValoration}>
              {/* {detail.valoration} */}
              <img className={styles.imgValoration} src="https://dondeestanlasluces.files.wordpress.com/2017/08/stars.png" alt='Sin datos' />
            </div>
            </div>
            <div className={styles.boxRight}>

            <div className={styles.contentDescription}>{detail.description}</div>
            
            

          </div>
          </div>

          {/* <iframe width="727" height="409" src="https://www.youtube.com/embed/LO2RPDZkY88" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe> */}


          

          {/*  "https://scratch.mit.edu/projects/216620796/embed"   */}

          {detail.game_link ? <div className={styles.contentGame}>
            <p>Aprendamos jugando!</p>
            <iframe src='https://scratch.mit.edu/projects/216620796/embed' // <iframe src={detail.game_link}
              title='game'
              allowtransparency="true"
              width="485" height="402" frameBorder="0"
              scrolling="no" allowfullscreen></iframe>
          </div>
            : null}



        </div>
      )}
    </div>
  );
}
