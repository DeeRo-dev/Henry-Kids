import React /* useState, */ /* useEffect  */ from "react";
import /*  useDispatch, useSelector */ "react-redux";
import NavTeacher from "../NavTeacher/NavTeacher.jsx";
// import { styled } from "@material-ui/core";
import styles from "./HomeTeacher.module.css";
// import Card from "../Card/Card.jsx";
// import { getAllclasses } from "../../actions/index.js";

export default function Home() {
  // const dispatch = useDispatch();
  // useEffect(() => dispatch(getAllclasses()), [dispatch]);
  return (
    <div className={styles.home}>
      <div className={styles.nav}>
      <NavTeacher />
      </div>
    </div>
  );
}
