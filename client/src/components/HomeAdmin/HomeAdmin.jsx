import React, { useEffect }  from "react"
import style from "./HomeAdmin.module.css"


import  WithStyles  from "../SelectFiltros/SelectFiltros.jsx";

export default function HomeAdmin(){
  


  return(
    <div className={style.content}>
        <nav className={style.nav}>
          <h1 className={style.tituloNav}>Panel de Administrador: </h1> <h3>  NombreDeUsuario</h3>
        </nav>
        
        <div className={style.contentFiltros}>
           <div className={style.selectores}><WithStyles/></div>
        </div>

      
        </div>
     

      
    
 
 
 )
}