import axios from "axios";
import { Link, useParams } from "react-router-dom";
import style from "./Verificacion.module.css";


 async function ver(id) {

    await axios.put(`https://henry-kids.herokuapp.com/user/email/verificado/${id}`);
  };

export default function Verificacion(){
    const { id } = useParams();
    ver(id)
    return (
      <div ><h3 className={style.text}>
          Su usario fue validado presione
          <Link className={style.ir} to={`/`}>  aca </Link>
          para iniciar sesion</h3>
          <img
            className={style.imagen}
            src="https://i.ibb.co/F55q7HC/Recurso-6-100.jpg"
            alt="img"
          />
      </div>
    );
  }
