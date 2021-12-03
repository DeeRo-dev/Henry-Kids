import React from "react";
import { Icon } from "@material-ui/core";
import styles from "./SearchBar.module.css";
import { searchClass } from "../../actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(true);
  const [flag2, setFlag2] = useState(true);
  const [classFound, setClassFound] = useState("");
  const [name, setName] = useState("");
  const actualClass = useSelector((state) => state.allClasses);

  function handleInput(e) {
    e.preventDefault();
    const { value } = e.target;
    setName(value);

    if (actualClass.length === 1 && flag && flag2) {
      setClassFound(value.slice(0, value.length - 1));
      setFlag(false);
    }
    if (!value.length) {
      setFlag(true);
      setFlag2(true);
      dispatch(searchClass("x"));
    }
    if (!flag && value === classFound) {
      setClassFound("");
      setFlag(true);
      setFlag2(false);
    }

    if (flag && value.length > 0) {
      dispatch(searchClass(value));
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchClass(name));
  };
  
  return (
    <div className={styles.contentSearch}>
      {/* <div className={styles.buscador}> */}
      {/* <button className={styles.iconoBuscar}> */}
      {/* </button> */}
      <input
        type="text"
        placeholder="Buscar curso..."
        className={styles.inputSearch}
        onChange={(e) => handleInput(e)}
      />
      <button className={styles.buscador} onClick={(e) => handleSubmit(e)}>
        <Icon>search</Icon>
      </button>
      {/* <button type='submit' > Buscar</button> */}
    </div>
  );
}
