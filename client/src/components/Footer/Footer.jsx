import React from "react"
import style from "./Footer.module.css"
export default function Footer(){
  return (
    <div className={style.contentFooter}>
    <div className={style.contentDer}>
      <h3>Henry Kids</h3>
      <p className={style.derechos}>© Todos los derechos reservados Henry Kids 2021</p>
     {/* <a href='http://localhost:3000/home' >Politicas de Privacidad</a>  */}
 </div>
 <div className={style.nombDes}>
   <h3 className={style.des}>Desarrolladores de Henry Kids</h3>
   <div className={style.contenNomb}>
    <a className={style.nombres} target='_blank' href='https://www.linkedin.com/in/felipesanchezfullstack/'>Felipe Sanchez - </a> 
    <a className={style.nombres} target='_blank' href='https://www.linkedin.com/in/derek-cabrera-fullstack/'>Derek Cabrera - </a> 
    <a className={style.nombres} target='_blank'  href='https://www.linkedin.com/in/gaston-ripamonti'>Gaston Ripamonti - </a> 
    <a className={style.nombres} target='_blank'  href='https://www.linkedin.com/in/ignaciopaezz/'>Ignacio Páez - </a> 
    <a className={style.nombres} target='_blank'  href='https://www.linkedin.com/in/isabel-aguiar-dev/'>Isabel Aguiar - </a> 
    <a className={style.nombres} target='_blank'  href='https://www.linkedin.com/in/yanina-paola-brancolino-fullstack-developer/'>Yanina Brancolino - </a> 
    <a className={style.nombres} target='_blank'  href='https://www.linkedin.com/in/giovanna-cilfone/'>Giovanna Cilfone - </a> 
    <a className={style.nombres} target='_blank'  href='https://www.linkedin.com/in/marlondelaroch3/'>Marlon De La Roche </a> 
    </div>
 </div>
  </div>
  )
}