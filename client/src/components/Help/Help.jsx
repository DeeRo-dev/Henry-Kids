import React from "react";
// import { useDispatch } from "react-redux";
import styles from "./Help.module.css";

export default function Help() {
  return ( 
    <div className={styles.containerBackground}> 
    <div className={styles.background}>  
    <div  className={styles.content}> 
    <h1 className={styles.title}>¡Estamos para ayudarte!</h1>
    <h2 className={styles.subtitle}> Envianos tu consulta y te responderemos muy pronto ❤ </h2>
      <button className={styles.blue}>
        <a href="mailto:henrykids.pg08@gmail.com"> Contactar </a>
      </button>
      </div> 
    </div>
    </div>
  );
}
