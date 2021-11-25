import React from "react";
import style from  './Home.module.css'
import Nav from "../Nav/Nav.jsx";
import { Link } from "react-router-dom";
import Card from "../Card/Card.jsx"


export default function Home(){
  
  return (
  <div >
    <div>
         <Nav/>
    </div>
    
<div className="contentCards">

{/* //base de datos 
//que tenga info harcord
//que sea un arrray de 10 elementos con la info que necesitamos */}

<div className={style.carta}>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/> 
  <Card/>
</div>

{/*     
      {
        LOQUETENGODEBASEDEDATOS?.map(e => {
         
           return (
            <div className='cartas'  key={e.id}>
             
              <Card id={e.id}              
              title={e.title} 
              category={e.category}
              description={e.description} 
              video_link={e.video_link} 
              difficulty={e.difficulty}
              game_link={e.game_link} 
              valoration={e.valoration}
              />
              
            </div>
          
            )})
      } */}
  
</div>

  </div>
  )
}