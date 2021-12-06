import React from "react";
import { useEffect } from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ClassDetail.module.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getClassById } from "../../actions";
// import Nav from "../Nav/Nav";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export default function ClassDetail() {
  const navigate = useNavigate();
  const detail = useSelector((state) => state.classById[0]);
  //   // id, title, category, description, video_link, difficulty, game_link, valoration,

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClassById(id));
  }, [id, dispatch]);


  
  return (
    <div className={styles.contentDetail}>
      {detail && (
        <div>
          {/* <div className={styles.contentCategory}>
                        <p>JAVASCRIPT</p>
                    </div> */}
          <Link to="/home/student">
            <ArrowBackIosIcon />
          </Link>
          <div className={styles.contentTitle}>
            <h1>{detail.title}</h1>
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
            {/* <iframe width="727" height="409" src="https://www.youtube.com/embed/LO2RPDZkY88" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe> */}
          </div>

          <div className={styles.contentDescription}>{detail.description}</div>

          {/*  <div className={styles.contentGame}>
                        {detail[0].game_link}  <p>game_link</p>
                       <iframe src="https://scratch.mit.edu/projects/216620796/embed"
                            title='game'
                            allowtransparency="true"
                            width="485" height="402" frameBorder="0"
                            scrolling="no" allowfullscreen></iframe> 
                    </div>  */}

          {/* <div className={styles.contentDifficult}>
            Dificultad: {detail[0].difficulty}
          </div> */}

          <div className={styles.contentValoration}>{detail.valoration}</div>
        </div>
      )}
    </div>
  );
}
