import React from "react"
import style from "./Footer.module.css"
export default function Footer(){
  return (
    <div className={style.contentFooter}>
    <div>
      <h4>Henry kids</h4>
      <p>Todos los derechos reservados Henry Kids 2021</p>
     <a href='http://localhost:3000/home' >Politicas de Privacidad</a> 
 </div>

 <div className={style.nombDes}>
   <h3>Desarrolladores de Henry Kids</h3>

 </div>
  </div>
  )
}