import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import styles from "./RegisterTeacher.module.css";
import { Button, withStyles } from "@material-ui/core";


export default function RegisterTeacher(){
  const [modal, setModal] = useState(false);

  function onInputChange(e){
    e.preventDefault();
  }
  
  const StyleButtonCrearCuenta = withStyles({
    root: {
      marginTop: "20px",
      width: "10%",
      border: "0",
      backgroundColor: "#ff8d00",
      borderRadius: "5px",
      height: "35px",
      color: "white",
      fontWeight: "400",
      fontSize: "1em",
      "&:hover": {
        backgroundColor: "var(--verde)",
      },
    },
    label: {
      color: "white",
    },
  })(Button);


  const toggleModal = (e) => {
    setModal(!modal);
  };


return(
  <div className={styles.modal}>
  <div onClick={toggleModal} className={styles.overlay}></div>
  <div className={styles.modal_content}>
    {/* <button className={styles.close_modal} onClick={toggleModal}>
      x
    </button> */}

    <div className={styles.container}>
      <form className={styles.inputs}>
        <input
          name="firstName"
          type="text"
          placeholder="País:"
        />
         <input
          name="firstName"
          type="text"
          placeholder="Región:"
          
        />
        
          <p id={styles.p}>Fecha de nacimiento:</p>
         <input
          name="firstName"
          type="date"
          placeholder="Fecha de naciemiento:"
         
        />
        <p id={styles.p}>Foto DNI:</p>
         <input
          name="firstName"
          type="file"
          placeholder="Foto DNI:"
        />
        {/* <Link className={styles.btnCrear} to="/home"> */}
        <div className={styles.containerBtn}>
        <StyleButtonCrearCuenta
          type="button"
          className={styles.btnCrearCuenta}
          variant="contained"
          color="primary"
        >

          Enviar
        </StyleButtonCrearCuenta>
        </div>
        {/* </Link> */}
      </form>
    </div>
  </div>
</div>
  // <div className={styles.contentForm}>
  //   <form action="">
  //     <div  className={styles.contentInputs}>
        
  //     <div className={styles.contentPais}> 
  //       <div >
  //         <label htmlFor="">Pais: </label>
  //           </div>
  //          <input type="text" 
  //           id='name' 
  //           placeholder='Pais' 
  //           onChange={(e) =>onInputChange(e)}
  //           name='pais'/>
  //        </div>
         
  //     <div className={styles.contentRegion}> 
  //       <div >
  //         <label htmlFor="">Region: </label>
  //      </div>
  //          <input type="text" 
  //           id='region' 
  //           placeholder='Region' 
  //           onChange={(e) =>onInputChange(e)}
  //           name='region'/>
  //     </div>

  //       <div className={styles.contentFecha}>
  //        <div>
  //         <label htmlFor="">Fecha de naciemiento: </label>
  //           </div>
  //          <input type="date" 
  //           id='fechaNacimiento'  
  //           onChange={(e) =>onInputChange(e)}
  //           name='fechaNacimiento'/>
  //        </div>

  //        <div className={styles.contentFoto}>
  //        <div>
  //         <label htmlFor="">Foto de DNI: </label>
  //           </div>
  //          <input type="file" 
  //           id='fotoDni'  
  //           onChange={(e) =>onInputChange(e)}
  //           name='imagen'/>
  //        </div>
  //       <div className={styles.contentButon}>
  //         <input type="submit" value="Registrarse" className={styles.buton}/>
  //      </div>
  //      <div className={styles.contentCancelar}>
  //         <input type="submit" value="Cancelar" className={styles.buton}/>
  //      </div>
  //     </div>
    
      
  //   </form>
  // </div>
)
}