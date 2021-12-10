import React from "react"
import style from "./CardAlumno.module.css"

export default function CardAlumnos({firstName, lastName, userName, id, email}){
  return (
    <div className={style.content}>
      <h3>Nombre: {firstName} {lastName}</h3>
      <h4>Nombre de usuario: {userName}</h4>
      <p>Email: {email}</p>
      <input type="button" value="X"/>
    </div>
  )
}