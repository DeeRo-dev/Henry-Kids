
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './ClassDetail.module.css'
import { useParams } from 'react-router-dom'
import { getClassById } from '../../actions'


export default function ClassDetail() {
    //   // id, title, category, description, video_link, difficulty, game_link, valoration, 

    const { id } = useParams()
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getClassById(id))
    }, [id, dispatch])


    const detail = useSelector((state) => state.classById)
    console.log(detail)


    return (

        <div className={style.contentDetail}>

            {detail.length > 0 ? (

                <div>

                    {/* 
                    <div className={style.contentVideo}> 
                    <iframe width="560" height="315" src="https://youtu.be/BC2dRkm8ATU?list=RDBC2dRkm8ATU" frameborder="0" 
                    allowfullscreen></iframe>   <p>Videito</p>
                    </div>  */}

                    <div className={style.contentCategory}>
                        <p>JAVASCRIPT</p>
                    </div>

                    <div className={style.contentTitulo}>
                        <h2>titulo</h2> <h2>{detail[0].title}</h2>
                    </div>

                    <div className={style.contentDescripcion}>
                        <p>descripcion</p> {detail[0].description}
                    </div>

                    <div className={style.contentJuego}>
                        {detail[0].game_link}  <p>game_link</p>
                    </div>

                    <div className={style.contentDificultad}>
                        <p>difficulty</p> {detail[0].difficulty}
                    </div>

                    <div className={style.contentValoration}>
                        {detail[0].valoration} <p>valoracion</p>
                    </div>

                </div>

            ) : (
                <div> <h1>No hay contenido disponible</h1> </div>
            )
            }
        </div>
    )
}

