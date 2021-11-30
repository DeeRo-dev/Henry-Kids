import React ,{useEffect}   from "react";
import { useDispatch, useSelector } from "react-redux";
import NavTeacher from "../NavTeacher/NavTeacher.jsx";
// import { styled } from "@material-ui/core";
import styles from "./HomeTeacher.module.css";
 import CardTeacher from "../CardTeacher/CardTeacher.jsx";
import { getAllClassTeacher } from "../../actions/index.js";
import { useParams } from "react-router-dom";
export default function Home() {
var array = [{
  id:12,
  title:'altoCurso',
  category: 'java',
  description:'uncursito de java ',
  video_link: 'https://www.youtube.com/watch?v=3crsQUKgaDc',
  difficulty: 'Basica',
  game_link:'https://www.youtube.com/watch?v=3crsQUKgaDc',
  
}] 
  const allClassTeacher = useSelector((state) => state.allClassTeacher);

  const { id } = useParams();
   const dispatch = useDispatch();

   useEffect(() => {
    dispatch(getAllClassTeacher(id));
  }, [id, dispatch]);

  return (
    <div >
      <div className={styles.nav}>
      <NavTeacher />
      </div>


      <div >
      {array.map((e) => { 
        return (
        <div key= {e.id}> 
         <CardTeacher 
        id={e.id}
        title={e.title}
        category={e.category}
        description={e.description}
        video_link={e.video_link}
        difficulty={e.difficulty}
        game_link={e.game_link}
        valoration={e.valoration}
        /> </div>)}
      )} 
      </div>

    </div>
  );
}
