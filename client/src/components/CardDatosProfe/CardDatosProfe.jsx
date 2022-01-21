import React from "react";
import style from "./CardDatosProfe.module.css"

export default function CardDatosProfe( 
{  firstName,
  lastName,
  userName,
  id,
  email,
  dni,
  cuentaBancaria,
  linkedin,
  pais,
  region,
  fecha}
  ){
   
  return (
    <div className={style.content}>
      <h3>Nombre: {firstName} {lastName}</h3>
      <h4>Nombre de usuario: {userName}</h4>
      <p>Email: {email}</p>
      <p>cuentaBancaria: {cuentaBancaria}</p>
      <p>Dni: { dni}</p>
      <p>pais: {pais}</p>
      <p>Region: { region}</p>
      <p>Fecha: { fecha}</p>
      <p>linkedin: {linkedin}</p>
    </div>
  )
}