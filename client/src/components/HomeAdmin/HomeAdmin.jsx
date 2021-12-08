import React, { useEffect }  from "react"
import style from "./HomeAdmin.module.css"
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { useNavigate} from "react-router-dom";
import  WithStyles  from "../SelectFiltros/SelectFiltros.jsx";

export default function HomeAdmin(){
 
  const navigate = useNavigate();
  function onSubmit(e){

  navigate( '/user/solicitud/lista')
  }
 

  return(
    <div className={style.content}>
        <nav className={style.nav}>
          <h1 className={style.tituloNav}>Panel de Administrador: </h1> <h3>  NombreDeUsuario</h3>
         
          <div className={style.contentNotificaciones}>
          <NotificationsActiveIcon/><input type="button"  value="Solicitudes" className={style.botonSoli} onClick={onSubmit}/>
          </div>
 
        </nav>
        
        <div className={style.contentFiltros}>
           <div className={style.selectores}><WithStyles/></div>
        </div>

      
        </div>
     

      
    
 
 
 )
}