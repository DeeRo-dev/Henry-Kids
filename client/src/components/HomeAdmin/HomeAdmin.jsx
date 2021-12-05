import React  from "react"
import style from "./HomeAdmin.module.css"
import { useState } from "react";
import CardClasseAdmin from "../CardClasseAdmin/CardClasseAdmin.jsx";



export default function HomeAdmin(){

  let rotador = false;
  function onSubmit(e){
    
     if(rotador === false){
       rotador = true;
     }else if(rotador === true){
       rotador = false;
     }
    e.preventDefault();
    console.log('click');
    console.log(rotador)

  }

  let arrayy = 
  [{
    id:12,
    category:'HTML',
    valoration:'',
    title : "Primer Clase",
    description : "Battle tested, Open Sourced reusable modules for Salesforce",
    strudio_material : "https://www.datasert.com/products/libshare/",
    video_link : "https://www.youtube.com/",
    game_link : "https://scratch.mit.edu/projects/56791332",
    state : true,
    difficulty : "Basica",  
  }]


  return(
    <div className={style.content}>
        <nav className={style.nav}><h1 className={style.tituloNav}>Panel de Administrador</h1></nav>
        <div className={style.container}>
           <div className={style.contentFiltros}>
             <div className={style.tituloFiltro}><h3>Filtrar por:</h3></div>
             <input type="button" value="Clases" onClick={(e) => onSubmit(e)} className={style.boton}/>
             <input type="button" value="Profesores" className={style.boton}/>
             <input type="button" value="Usuarios" className={style.boton}/>
             <div className={style.tituloFiltro}><h3>Ordenar por:</h3></div>
             <input type="button" value="Algo" className={style.boton}/>
             <input type="button" value="Algo2" className={style.boton}/>
             <input type="button" value="Algo3" className={style.boton}/>
        
        </div>

        <div className={style.contentcards} id="cards" >
          {
          arrayy.map((e) => { 
            return (
               <div key= {e.id}> 
                 <CardClasseAdmin
                   id={e.id}
                   title={e.title}
                   category={e.category}
                   description={e.description}
                   video_link={e.video_link}
                   difficulty={e.difficulty}
                   game_link={e.game_link}
                   valoration={e.valoration}
                  /> 
                </div>)
          } 
          )} 

         </div>
        </div>
     

      
    </div>
 
 
 )
}