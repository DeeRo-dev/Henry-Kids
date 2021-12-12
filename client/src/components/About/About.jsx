import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import styles from "./About.module.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";

export default function About() {
    return (
      
        <div className={styles.about}>
            <Link to="/">
            <div className={styles.volver}>
             <ArrowBackIosIcon color="primary" width="200%"/>
             </div>
             </Link>
        </div>
     
    )
}
