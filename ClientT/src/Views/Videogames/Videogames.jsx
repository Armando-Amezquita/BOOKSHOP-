import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Cards from "../../Components/Cards/Cards";

import styles from './Videogames.module.css'

export default function Videogames () {

    const dispatch = useDispatch();
    const videogames = useSelector( state => state.videogames );

    return(
        <main className={styles.mainContainerVideogames}>
                {
                    videogames? 
                    <Cards videogames={videogames} />
                    :<p>Cargando</p>
                }
        </main>
    )
} 