import React from "react";
import style from  './Home.module.css'
import Nav from "../Nav/Nav.jsx";
import { Link } from "react-router-dom";
import Card from "../Card/Card.jsx"


export default function Home(){
  
  return (
  <div >
    <div>
         <Nav/>
    </div>
    
<div className="contentCards">



<div className={style.carta}>

</div>
  
</div>

  </div>
  )
}