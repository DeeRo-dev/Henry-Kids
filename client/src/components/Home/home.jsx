import React from "react";
import style from  './Home.module.css'
import Nav from "../Nav";
import { Link } from "react-router-dom";



export default function Home(){
  
  return (
  <div >
    <div>
         <Nav/>
    </div>
 <div>
    <Link to="/create-clase">
        <button>
      Crear una clase
   </button>
      </Link>
  
 </div>
<div className="contentCards">

{/* //base de datos 
//que tenga info harcord
//que sea un arrray de 10 elementos con la info que necesitamos */}


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