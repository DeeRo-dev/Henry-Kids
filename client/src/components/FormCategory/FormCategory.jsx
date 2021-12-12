import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import styles from "./FormCategory.module.css";
import { Button, withStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { newCategory } from "../../actions";
import { useNavigate } from "react-router-dom";

export default function CreateCategory() {
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

const [data, setData] = useState({
    categoria:"",
    tecnologia:"",
    descripcion:"",
    linkImagen:""
});
function onInputChange(e) {
  setData({
    ...data,
    [e.target.name]: e.target.value,
  });
}


function onSubmit(e){
  e.preventDefault();
     
    dispatch(newCategory(data))
    alert('formulario enviado')
    setData({
    categoria:"",
    tecnologia:"",
    descripcion:"",
    linkImagen:"",
   
  })
  navigate('/home/admin')
   
   
}

/* 
http://localhost:3001/category

{
    "name":"JavaScript",
    "technology":"JavaScript",
    "description":"JavaScript es un lenguaje de programación interpretado.",
  "img_link":"https://upload.wikimedia.org/wikipedia/"
}

 */
  return (
    <div className={styles.modal}>
      <div onClick={toggleModal} className={styles.overlay}></div>
      <div className={styles.modal_content}>
        {/* <button className={styles.close_modal} onClick={toggleModal}>
      x
    </button> */}

        <div className={styles.container}>
          <form className={styles.inputs}>
            <input name="categoria" type="text" placeholder="Nueva categoria:" onChange={(e)=> onInputChange(e)}/>
            <input name="tecnologia" type="text" placeholder="Tecnologia:" onChange={(e)=> onInputChange(e)}/>
            <input name="descripcion" type="text" placeholder="Descripcion:" onChange={(e)=> onInputChange(e)}/>
            <input name="linkImagen" type="text" placeholder="Link de la imagen:"onChange={(e)=> onInputChange(e)}/>
          
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
    
          </form>
        </div>
      </div>
    </div>
  );
}
