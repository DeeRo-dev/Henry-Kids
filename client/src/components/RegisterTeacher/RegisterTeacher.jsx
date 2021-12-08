import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import styles from "./RegisterTeacher.module.css";
import { Button, withStyles } from "@material-ui/core";

export default function RegisterTeacher() {
  const [modal, setModal] = useState(false);
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
// //{
//   "dni":37742279,
//   "linkedin":"https://www.linkedin.com/in/felipesanchezfullstack/",
//   "cuentaBancaria":"31651615",
//   "dniImag":"1611984",
//   "pais":"Argentina",
//   "region":"sanchez",
//   "fecha":"06/09/93"
// }

const [data, setData] = useState({
  dni:"",
  linkedin:"",
  cuentaBancaria:"",
  dniImag:"",
  pais:"",
  region:"",
  fecha:""
});
function onInputChange(e) {
  if (e.target.name === 'dniImag') {
    
  }
  e.preventDefault();
   console.log(e.target.value)
  setData({
    ...data,
    [e.target.name]: e.target.value,
  });
}


const convertiraBase64=(archivos)=>{
  Array.from(archivos).forEach(archivo=>{
    var  reader= new FileReader();
    reader.readAsDataURL(archivo);
    reader.onload=function(){
     var aux=[];
      var base64= reader.result;
      aux=base64.split(',');
      console.log(aux[1])
     
    
    }
  })

}



  //  console.log(e.target.value)
  // setData({
  //   ...data,
  //   [e.target.name]: e.target.value,
  // });

  return (
    <div className={styles.modal}>
      <div onClick={toggleModal} className={styles.overlay}></div>
      <div className={styles.modal_content}>
        {/* <button className={styles.close_modal} onClick={toggleModal}>
      x
    </button> */}

        <div className={styles.container}>
          <form className={styles.inputs}>
            <input name="pais" type="text" placeholder="País:" onChange={(e)=> onInputChange(e)}/>
            <input name=" region" type="text" placeholder="Región:" onChange={(e)=> onInputChange(e)}/>
            <input name="dni" type="text" placeholder="Número de DNI:" onChange={(e)=> onInputChange(e)}/>
            <input name="cuentaBancaria" type="text" placeholder="CBU-Alias:"onChange={(e)=> onInputChange(e)}/>
            <input name="linkedin" type="url" placeholder="URL-Linkedin:" onChange={(e)=> onInputChange(e)}/>
            <p id={styles.p}>Fecha de nacimiento:</p>
            <input
              name="fecha"
              type="date"
              placeholder="Fecha de naciemiento:"
            onChange={(e)=> onInputChange(e)}/>
            <p id={styles.pDNI}>Foto DNI:</p>
            <input name="dniImag" type="file" placeholder="Foto DNI:" onChange={(e)=>convertiraBase64(e.target.files)}/>
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
  );
}
