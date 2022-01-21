import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './FavsContainer.module.css';
import { getFavorites } from '../../actions/index.js';
import Paged from '../Paged/Paged.jsx';
import Card from '../Card/Card'
import Nav from '../Nav/Nav';


export default function FavsContainer() {
    const dispatch = useDispatch();
    const idUser = window.localStorage.sessionUser
    const favorites = useSelector(state => state.favorites)
   
   
    useEffect(() => dispatch(getFavorites(idUser)), [dispatch,idUser]);

    let cardsInPage = 8;
    let [page, setPage] = useState(1);

    useEffect(() => {
        setPage(1);
    }, []);

    let currentPage;
    let indexLastPage = page * cardsInPage;
    let indexFirstPage = indexLastPage - cardsInPage;

    favorites?.length > 8
        ? (currentPage = favorites.slice(indexFirstPage, indexLastPage))
        : (currentPage = favorites);

    function Paginate(e, num) {
        e.preventDefault();
        setPage(num);
    }

    

    return (
        <div className={styles.home}>
           
            <div className={styles.cards}>
                {currentPage?.map(e => {
                    return (
                        <div key={e.id}>
                            {' '}
                            {/* <Link to={"/home/student/" + e.id}> */}
                                {' '}
                                <Card
                                    id={e.id}
                                    title={e.title}
                                    categories={e.categories[0].name}
                                    description={e.description}
                                    video_link={e.video_link}
                                    difficulty={e.difficulty}
                                    game_link={e.game_link}
                                    valoration={e.Evaluations[0].Promedio}
                                />
                                {' '}
                           {/*  </Link> */}
                        </div>
                    );
                })}
            </div>

            <div>
                <Paged
                    cardsInPage={cardsInPage}
                    totalElements={favorites?.length}
                    paginate={Paginate}
                />
            </div>

        </div>
    );
}
