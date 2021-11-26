import React ,{useState, useEffect} from "react";
// import style from  './Home.module.css'
import Nav from "../Nav/Nav.jsx";
// import { Link } from "react-router-dom";
import Card from "../Card/Card.jsx"
import { response } from "../../../../api/src/app.js";
import { styled } from "@material-ui/core";
import style from './Home.module.css'

export default function Home(){
//   const api = 'http://localhost:3001/allClasses';
//  const db =[];

// const [cursos, setCursos] = useState([])

// useEffect(()=>{
// getCursos()
// },[])

  

  // function getCursos(){
  //    fetch(api)
  //     .then(res => {return res.json()})
  //     .then(data => db.push(data))
  //       setCursos(db)
  //     }
        
  // }
 
  return (
  <div className={style.home}>
    <div>
         <Nav/>
    </div>
    
    <div className="cards">

      {/* {
    
      //  db?.map(e => {
        
      //      return ( 
      //        <div>
      //       <div className='cartas'  key={e.id}>
           
      //         <Card id={e.id}              
      //         title={e.title} 
      //         category={e.category}
      //         description={e.description} 
      //         video_link={e.video_link} 
      //         difficulty={e.difficulty}
      //         game_link={e.game_link} 
      //         valoration={e.valoration}
      //         />
              
      //       </div>
           
      //    </div>
      //       )})
     
      }
   */}
</div>

  </div>

  )
}