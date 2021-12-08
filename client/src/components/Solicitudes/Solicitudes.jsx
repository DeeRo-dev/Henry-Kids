import React , { useState, useEffect }from "react"
import style from "./Solicitudes.module.css"
import { useNavigate } from "react-router-dom";
import { getSolicitudes } from "../../actions";
import { useDispatch, useSelector } from "react-redux";


export default function Solicittudes(){
const dispatch = useDispatch();

useEffect(()=> {
  dispatch(getSolicitudes())
});

const allSolicitudes = useSelector((state) => state.solicitudes)

const navigate = useNavigate();

  function onSubmit(){
    navigate('/home/admin')
  }
  return(
    <div> 
      <div>
        <nav className={style.naav}>
          <h1 className={style.tituloNav}>Panel de Administrador: </h1>
          <h3>  NombreDeUsuario</h3> 
          <input type="button" value="<-" onClick={onSubmit}/>
        </nav>
         
      </div>
  
       
      <h1> Aca van a estar las solicitudaes</h1>
     </div>

)
}