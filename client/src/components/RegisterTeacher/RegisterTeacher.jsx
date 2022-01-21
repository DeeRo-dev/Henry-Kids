import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import styles from "./RegisterTeacher.module.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Button, withStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { enviarSoliProfe } from "../../actions";
import { useNavigate, Link } from "react-router-dom";
import MuiAlert from "@material-ui/lab/Alert";
import { Snackbar } from "@material-ui/core";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const StyleAlert = withStyles({
  root: {

    marginBottom: "450px",
    width: "300px",
  },
})(Snackbar);


export default function RegisterTeacher() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
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
  dniImag:[],
  pais:"",
  region:"",
  fecha:""
});
function onInputChange(e) {
  // if (e.target.name === 'dniImag') {
    
  // }
  e.preventDefault();

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
      // console.log(aux[1])
      data.dniImag.push(aux[1])
    
    }
  })

}


// console.log(data.dniImag[0].length)

  //  console.log(e.target.value)
  // setData({
  //   ...data,
  //   [e.target.name]: e.target.value,
  // });
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

function onSubmit(e){
  e.preventDefault();

  if ( data.dni&&
    data.linkedin &&
    data.cuentaBancaria &&
    data.pais&&
    data.region&&
    data.fecha) {
      const id = window.localStorage.sessionUser;
    dispatch(enviarSoliProfe(data,id))
    setOpen(true)
    setData({
    dni:"",
    linkedin:"",
    cuentaBancaria:"",
    dniImag:[],
    pais:"",
    region:"",
    fecha:""
  })
  
  setTimeout(() => {
    navigate("/home/teacher");
  }, 2000);
   }
   else(alert('error'))
}


  return (
    <div className={styles.modal}>
      <div onClick={toggleModal} className={styles.overlay}></div>
      <div className={styles.about}>
            <Link to="/">
            <div className={styles.volver}>
             <ArrowBackIosIcon width="500px"/>
             </div>
             </Link>
        </div>
      <div className={styles.modal_content}>
      <Link className={styles.btnCrear} to="/home/student">
              <button className={styles.close_modal} onClick={toggleModal}>
                x
              </button>
            </Link>
        <div className={styles.container}>
          
          <form className={styles.inputs}>
            <input name="pais" type="text" placeholder="País:" onChange={(e)=> onInputChange(e)}/>
            <input name="region" type="text" placeholder="Región:" onChange={(e)=> onInputChange(e)}/>
            <input name="dni" type="text" placeholder="Número de DNI:" onChange={(e)=> onInputChange(e)}/>
          

            <input name="cuentaBancaria" type="text" placeholder="CBU-Alias:"onChange={(e)=> onInputChange(e)}/>
            <input name="linkedin" type="text" placeholder="URL-Linkedin:" onChange={(e)=> onInputChange(e)}/>
            <p id={styles.p}>Fecha de nacimiento:</p>
            <input
              name="fecha"
              type="date"
              placeholder="Fecha de naciemiento:"
            onChange={(e)=> onInputChange(e)}/>
           {/*  <p id={styles.pDNI}>Foto DNI:</p>
            <input name="dniImag" type="file" placeholder="Foto DNI:" onChange={(e)=>convertiraBase64(e.target.files)}/> */}
          
          
            <div className={styles.containerBtn} >
              <StyleButtonCrearCuenta
                type="button"
                className={styles.btnCrearCuenta}
                variant="contained"
                color="primary"
                onClick={(e) => onSubmit(e)}
              >
                Enviar
              </StyleButtonCrearCuenta>
            </div>


            <StyleAlert className={styles.alert} open={open} onClose={handleClose}>
                  <Alert severity="success">¡La solicitud se ha enviado satisfactoriamente!</Alert>
                </StyleAlert>


    
          </form>
        </div>
      </div>
    </div>
  );
}
