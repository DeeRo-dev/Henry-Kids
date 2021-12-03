import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { difficultyFilter } from '../../actions'
import styles from './DifficultyFilter.module.css'


export default function DifficultyFilter(){

  let dispatch = useDispatch()
 
  function handleChange(e){
    dispatch(difficultyFilter(e.target.value))
  }


    
    return(
        <div className={styles.container}>
        <select name="select" className={styles.select}
        onChange={e => handleChange(e)} >
          <option
            value="default"
            selected
            disabled
            hidden 
            className={styles.select}
          >
            Dificultad
          </option>
          <option value="Basica"  
          className={styles.select}>
            Basica
          </option>
          <option value="Intermedia"   
          className={styles.select}>
            Intermedia
          </option>
          <option value="Alta"  
          className={styles.select}>
            Alta
          </option>

        </select>
        </div>
    )
}