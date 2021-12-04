import React  from "react"
import style from "./HomeAdmin.module.css"
import { useDispatch, useSelector } from "react-redux";







export default function HomeAdmin(){

  return(
    <div className={style.content}>
        <nav className={style.nav}>Panel de Admin</nav>
      <div className={style.contentFiltros}>
        <input type="button" value="Clases" className={style.boton}/>
        <input type="button" value="Profesores" className={style.boton}/>
        <input type="button" value="Usuarios" className={style.boton}/>
        
        </div>

      <div className={style.contentcards}>
        
      </div>
    </div>
  )
}