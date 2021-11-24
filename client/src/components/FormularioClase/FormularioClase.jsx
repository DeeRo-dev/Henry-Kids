import React, { useState } from "react"
import styles from './FormStyles.module.css' 
import axios from 'axios'



export default function FormularioClase() {


    const [input, setInput] = useState({
        title: '',
        description: '',
        material: '',
        videolink: '',
        gamelink: '',
        state: '',
        dificulty: '',
        date: ''
    })

    function handleChange(e) {
        if (e.target.value === 'Seleccione'){
        setInput({
            ...input,
            [e.target.name]:''
        })
        } else{
            setInput({
            ...input,
             [e.target.name]:e.target.value
            })
        }
     }

     function onSubmit(e){
         e.preventDefault();

        try {
               axios.post ('http://localhost:3001/',input);
            ;
          } catch (error) {
            console.log (error);
          }

     }


      
    return (
        <div className={styles.background} >
            <h1>Crear nueva Clase</h1>


            <form className={styles.containerBackground} onSubmit={onSubmit}>
                
                <label className={styles.label}>Titulo de la clase</label>
                <input className={styles.input} name='title' type='text' onChange={handleChange} />
                
                <label className={styles.label}> Descripcion de la clase</label>
                <textarea className={styles.input} name='description' type='text'
                     onChange={handleChange}/>
               
                <label className={styles.label}> Material de estudio</label>
                <input  className={styles.input} name='material' type='text' placeholder='Ingrese URL' onChange={handleChange} />
               
                <label className={styles.label}>Link video clase</label>
                <input className={styles.input} name='videolink' type='text'placeholder='Ingrese URL' onChange={handleChange} />
               
                <label className={styles.label}>Link juego clase</label>
                <input  className={styles.input} name='gamelink' type='text' placeholder='Ingrese URL' onChange={handleChange} />
               
                <label className={styles.label}>Estado de la clase</label>
                
                <select className={styles.input} name='state' onChange={handleChange}> 
                
                <option >Seleccione</option>
                    <option value={true}>Publicada</option>
                    <option value={false}>Deshabilitada</option>
                </select>
               
                <label className={styles.label}>Dificultad de la clase</label>
        
                <select className={styles.input} name='dificulty' onChange={handleChange}>
                <option >Seleccione</option>
                    <option value='Basica'>Basica</option>
                    <option value='Intermedia'>Intermedia</option>
                    <option value='Alta'>Alta</option>
                </select>
               
                <label className={styles.label}>Fecha de publicacion</label>
                <input  className={styles.input} type="date" name="date" onChange={handleChange}
                    min="2021-01-01" max="2025-12-31" />
               
                    <button type='submit'>CREAR</button>
           
            </form>
        </div>

    )

}
