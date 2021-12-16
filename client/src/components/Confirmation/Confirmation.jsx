import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "../../actions";
import style from "./Confirmation.module.css";

export default function Confirmation() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      editUser("provi", {
        id: window.localStorage.sessionUser,
      })
    );
  });

  return (
    <div className={style.allComponent}>
      <div className={style.confirmation}>
        <h3 className={style.Title}>
          Hemos enviado un <b>email</b> a tu casilla de correo para que{" "}
          <b>verifiques la cuenta...</b>
        </h3>
        <img
          className={style.imagen}
          src="https://i.ibb.co/YcKHWBm/Recurso-9-100.jpg"
          alt="img"
        />
      </div>
      <a className={style.ir} href="http://gmail.com">
        Ir a casilla de correos
      </a>
    </div>
  );
}
