import React from "react";
import styles from "./Paged.module.css";

export default function Pagination({ cardsInPage, totalElements, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalElements / cardsInPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.container}>
      {pageNumbers.map((num) => (
        <div className={styles.display} key={num}>
          {" "}
          <button className={styles.button} onClick={(e) => paginate(e, num)}>
            {num}
          </button>
        </div>
      ))}
    </div>
  );
}
