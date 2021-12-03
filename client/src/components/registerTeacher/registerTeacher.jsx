import React/* , { useState } */ from "react";
// import { useDispatch } from "react-redux";
import styles from "./registerTeacher.module.css";
// import {
//   Button,
//   FormControl,
//   FormControlLabel,
//   Radio,
//   RadioGroup,
// } from "@material-ui/core";

function onInputChange(e){
  e.preventDefault();
}


export default function registerTeacher(){
  // const [modal, setModal] = useState(false);


  // const toggleModal = (e) => {
  //   setModal(!modal);
  // };


return(
//   <div className={styles.modal}>
//   <div onClick={toggleModal} className={styles.overlay}></div>
//   <div className={styles.modal_content}>
//     <button className={styles.close_modal} onClick={toggleModal}>
//       x
//     </button>

//     <div>
//       <form>
//         <input
//           name="firstName"
//           type="text"
//           placeholder="Nombre:"
//           onChange={(e) => onInputChange(e)}
//         />
//         <input
//           name="lastName"
//           type="text"
//           placeholder="Apellido:"
//           onChange={(e) => onInputChange(e)}
//         />
//         <input
//           name="userName"
//           type="text"
//           placeholder="Nombre de usuario:"
//           onChange={(e) => onInputChange(e)}
//         />
//         <input
//           name="email"
//           type="text"
//           placeholder="Email:"
//           onChange={(e) => onInputChange(e)}
//         />
//         <input
//           name="password"
//           type="password"
//           placeholder="Contraseña:"
//           onChange={(e) => onInputChange(e)}
//         />
//         <input
//           type="password"
//           placeholder="Confirmar contraseña:"
//         />
   
//         {/* <Link className={styles.btnCrear} to="/home"> */}

//         <StyleButtonCrearCuenta
//           type="button"
//           className={styles.btnCrearCuenta}
//           variant="contained"
//           color="primary"
//         >
//           Enviar
//         </StyleButtonCrearCuenta>
//         {/* </Link> */}
//       </form>
//     </div>
//   </div>
// </div>
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