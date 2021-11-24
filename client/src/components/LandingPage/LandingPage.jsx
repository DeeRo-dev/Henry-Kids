import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";
import { Button } from '@material-ui/core';

export default function LandingPage(){
    return(
        <div className={styles.containerBackground}>
            <div className={styles.background}>
            <Button className={styles.btn} variant="contained" color="primary">Hello World</Button>
            {/* <Link to="/home">Home</Link>  */}  
            </div>
        
        </div>
    )
}