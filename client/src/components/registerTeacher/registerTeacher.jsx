import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./registerTeacher.module.css";

function onInputChange(e){
  e.preventDefault();
}


export default function registerTeacher(){
return(
  <div className={styles.contentForm}>
    <form action="">
      <div  className={styles.contentInputs}>
        
      <div className={styles.contentPais}> 
        <div >
          <label htmlFor="">Pais: </label>
            </div>
           <input type="text" 
            id='name' 
            placeholder='Pais' 
            onChange={(e) =>onInputChange(e)}
            name='pais'/>
         </div>
         
      <div className={styles.contentRegion}> 
        <div >
          <label htmlFor="">Region: </label>
       </div>
           <input type="text" 
            id='region' 
            placeholder='Region' 
            onChange={(e) =>onInputChange(e)}
            name='region'/>
      </div>

        <div className={styles.contentFecha}>
         <div>
          <label htmlFor="">Fecha de naciemiento: </label>
            </div>
           <input type="date" 
            id='fechaNacimiento'  
            onChange={(e) =>onInputChange(e)}
            name='fechaNacimiento'/>
         </div>

         <div className={styles.contentFoto}>
         <div>
          <label htmlFor="">Foto de DNI: </label>
            </div>
           <input type="file" 
            id='fotoDni'  
            onChange={(e) =>onInputChange(e)}
            name='imagen'/>
         </div>
        <div className={styles.contentButon}>
          <input type="submit" value="Registrarse" className={styles.buton}/>
       </div>
       <div className={styles.contentCancelar}>
          <input type="submit" value="Cancelar" className={styles.buton}/>
       </div>
      </div>
    
      
    </form>
  </div>
)
}