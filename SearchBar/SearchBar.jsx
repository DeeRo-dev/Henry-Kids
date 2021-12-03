import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@material-ui/core";
import styles from "./Search.module.css";

export default function Nav() {
<div className={styles.contentSearch}>
{/* <div className={styles.buscador}> */}
{/* <button className={styles.iconoBuscar}> */}
{/* </button> */}
<input
  type="text"
  placeholder="Buscar por profesor/curso..."
  className={styles.inputSearch}
  onChange={(e) => handleInputChange(e)}
/>
<button className={styles.buscador} onClick={(e) => handleSubmit(e)}>
  <Icon>search</Icon>
</button>
</div>
}