import React from 'react'
import './Card.module.css'

export default function Card({id, title, category, description, video_link, difficulty, game_link, valoration}) {


    return (
        
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <img src="https://www.grupoeducar.cl/wp-content//uploads/2017/10/actualidad.png" alt="rover" />
                </div>
                <div className="card-body">
                    <span className="category">Javascript{category}</span>

                    <div className='title'>
                        Fundamentos de la Programacion{title}
                    </div>

                    <div className='description'>
                       {description} Aprenderas los principios de la logica, para poder adentrarte en este fascinante mundo.
                    </div>

                    <div className='instructor'>Dificultad: media{difficulty} </div>

                    <div className='instructor'>valoracion</div>
                    <div className="valoration">{valoration}
                        <img src="https://dondeestanlasluces.files.wordpress.com/2017/08/stars.png" alt="user" />

                    </div>
                </div>
            </div>
        </div>


    )

}