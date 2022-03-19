import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
// import { getBooks } from './Redux/Actions/index.actions';
import { getBooks } from "../../Redux/Actions/index.actions.js";
import Header from '../Header/Header.jsx';
import Cards from "../../Components/Cards/Cards.jsx";
import './Home.class.css';

export default function Home(){

    
    const dispatch = useDispatch();
    const books = useSelector( state => state.books);

    useEffect(() => {
        dispatch(getBooks());
    }, [dispatch]);

    return(
        <>
        <Header />
        <main className='containerMain'>
            <section className="containerSection">
                <h1 className="title">
                    Bienvenidos aquí puede encontrar <br /> el libro que desee y alquilarlo.
                </h1>
                <Cards books={books} />
            </section>
        </main>
        </>
    )
}
