import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";
import { Button } from "@material-ui/core";

export default function LandingPage() {
  return (
    <div className={styles.containerBackground}>

      <div className={styles.background}>
      <img
          className={styles.logo}
          src="https://i.imgur.com/AWEe2XR.png"
          alt="img"
        ></img>
        <Button
          className={styles.buttonIngresar}
          variant="contained"
          color="primary"
        >
          Ingresar
        </Button>
        <Button
          className={styles.buttonRegistrarse}
          variant="contained"
          color="primary"
        >
          Registrarse
        </Button>

        {/* <Link to="/home">Home</Link>  */}
      </div>
    </div>
  );
}
