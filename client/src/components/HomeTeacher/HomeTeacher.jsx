import { useState, useEffect }from "react";
import /*  useDispatch, useSelector */ "react-redux";
import NavTeacher from "../NavTeacher/NavTeacher.jsx";
import Pagination from "../Pagination/Pagination.jsx";
// import { styled } from "@material-ui/core";
import styles from "./HomeTeacher.module.css";
// import Card from "../Card/Card.jsx";
// import { getAllclasses } from "../../actions/index.js";


export default function Home() {
 
  // const dispatch = useDispatch();
  // useEffect(() => dispatch(getAllclasses()), [dispatch]);
  
  // let cardsInPage = 8;
  // let [page, setPage] = useState (1);

  // useEffect (() => {
  //   setPage (1);
  // }, []);

  // let currentPage;
  // let indexLastPage = page * cardsInPage;
  // let indexFirstPage = indexLastPage - cardsInPage;

  // allClasses.length > 9
  //   ? (currentPage = allClasses.slice (indexFirstPage, indexLastPage))
  //   : (currentPage = allClasses);

  // function Paginate (e, num) {
  //   e.preventDefault ();
  //   setPage (num);
  // }
  
  
  return (
    <div className={styles.home}>
      <div className={styles.nav}>
      <NavTeacher />
      </div>
    
    
 
   
      <div>
          {/* <Pagination cardsInPage={cardsInPage} totalElements={allClasses.length}
          paginate={Paginate} /> */}
      </div>
      
    </div>
  );
}
