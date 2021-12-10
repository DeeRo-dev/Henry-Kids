import React from "react";
import Avatar from "@material-ui/core/Avatar";
import styles from "./Comments.module.css";

export default function Comments({ detail }) {
  return (
    <div className={styles.container}>
      {/* <h3 className="titleComment">Comentarios</h3>
      {detail.comments &&
        detail.comments.map((e) => {
          return <p>{e.name}</p>;
        })} */}
      <div className={styles.media}>
        <Avatar src="#" />
        <div className={styles.media_body}>
          <p className={styles.nombre}>
            Marlon<span>7:51, Hoy</span>
          </p>
          <p className={styles.comentario}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
            inventore vitae aut! Amet, inventore eos nisi corrupti deleniti
            mollitia. Placeat provident quod nisi voluptatem magnam unde odio
            qui iusto. Quidem.
          </p>
          <div className={styles.botones}>
            <a href="#">Responder</a>
            <a href="#">Editar</a>
            <a href="#">Borrar</a>
          </div>
        </div>
      </div>
    </div>
  );
}
