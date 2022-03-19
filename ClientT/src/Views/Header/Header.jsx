import React from "react";
import Nav from "../../Components/Nav/Nav";
import styles from "./Header.module.css";

export default function Header (){
    return(
        <header className={styles.containerHeader}>
            <Nav />
        </header>
    )
}