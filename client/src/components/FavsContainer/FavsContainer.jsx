import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './FavsContainer.module.css';
import { getFavorites } from '../../actions/index.js';
import Pagination from '../Pagination/Pagination.jsx';
import Card from '../Card/Card'


export default function FavsContainer() {
    const dispatch = useDispatch();

    useEffect(() => dispatch(getFavorites()), [dispatch]);
    const favorites = useSelector(state => state.favorites);

    let cardsInPage = 8;
    let [page, setPage] = useState(1);

    useEffect(() => {
        setPage(1);
    }, []);

    let currentPage;
    let indexLastPage = page * cardsInPage;
    let indexFirstPage = indexLastPage - cardsInPage;

    favorites.length > 9
        ? (currentPage = favorites.slice(indexFirstPage, indexLastPage))
        : (currentPage = favorites);

    function Paginate(e, num) {
        e.preventDefault();
        setPage(num);
    }

    /* function removeFav */

    return (
        <div className={styles.home}>
            <div className={styles.cards}>
                {currentPage.map(e => {
                    return (
                        <div key={e.id}>
                            {' '}
                            <Link to={`/home/${e.id}`}>
                                {' '}
                                <Card
                                    id={e.id}
                                    title={e.title}
                                    category={e.category}
                                    description={e.description}
                                    video_link={e.video_link}
                                    difficulty={e.difficulty}
                                    game_link={e.game_link}
                                    valoration={e.valoration}

                                />
                                {' '}
                            </Link>
                        </div>
                    );
                })}
            </div>

            <div>
                <Pagination
                    cardsInPage={cardsInPage}
                    totalElements={favorites.length}
                    paginate={Paginate}
                />
            </div>

        </div>
    );
}
