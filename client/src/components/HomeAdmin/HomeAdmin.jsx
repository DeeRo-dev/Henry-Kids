import React, { useEffect }  from "react"
import style from "./HomeAdmin.module.css"
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { Link } from "react-router-dom";
import  WithStyles  from "../SelectFiltros/SelectFiltros.jsx";

export default function HomeAdmin(){
  


  return(
    <div className={style.content}>
        <nav className={style.nav}>
          <h1 className={style.tituloNav}>Panel de Administrador: </h1> <h3>  NombreDeUsuario</h3>
          <Link to="user/solicitud/lista">
          <div className={style.contentNotificaciones}>
          <NotificationsActiveIcon/><input type="button"  value="Solicitudes" className={style.botonSoli}/>
            </div>
          </Link>
        </nav>
        
        <div className={style.contentFiltros}>
           <div className={style.selectores}><WithStyles/></div>
        </div>

      
        </div>
     

      
    
 
 
 )
}