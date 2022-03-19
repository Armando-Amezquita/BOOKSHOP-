import React from "react";
import Card from "../Card/Card";
import styles from './Cards.module.css';

export default function Cards ({books}){
    return(
        <section className={styles.containerCards}>
            {
                books? books.map(book => (
                    <Card key={book.id} id={book._id} name={book.name} image={book.image} released={book.released} />
                ))
                : <h1>Loading...</h1>
            }
        </section>
    )
} 
