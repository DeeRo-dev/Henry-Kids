import React /* useState, */ /* useEffect  */ from "react";
import /*  useDispatch, useSelector */ "react-redux";
import NavTeacher from "../NavTeacher/NavTeacher.jsx";
// import { styled } from "@material-ui/core";
import styles from "./HomeTeacher.module.css";
import { auth } from "../../firebase/firebaseConfig";
import { useNavigate } from "react-router";
// import Card from "../Card/Card.jsx";
// import { getAllclasses } from "../../actions/index.js";

export default function Home() {
  const navigate = useNavigate();
  function signOutUser(e) {
    auth
      .signOut(auth)
      .then(() => {
        console.log("done");
        navigate("/");
        localStorage.clear()
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // const dispatch = useDispatch();
  // useEffect(() => dispatch(getAllclasses()), [dispatch]);
  return (
    <div className={styles.home}>
      <div className={styles.nav}>
      <NavTeacher />
      <button onClick={signOutUser}> Salir </button>
      </div>
    </div>
  );
}
