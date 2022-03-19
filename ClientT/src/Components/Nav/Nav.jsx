import React from "react";
import { Link } from "react-router-dom";
import styles from './Nav.module.css'

export default function Nav () {
    return (
        <nav className={styles.menu}>
            <label htmlFor="" className={styles.logo}>@ARMANDO-AMEZQUITA</label>
            <ul className={styles.menuItems}>
                <Link to='/' className={styles.underline}>
                    <p className={styles.font}>inicio</p>
                </Link>
                <Link to='/login' className={styles.underline}>
                    <p className={styles.font}>Ingresar</p>
                </Link>
                {/* <Link to='/about' className={styles.underline}>
                    <p className={styles.font}>About</p>
                </Link>
                <Link to='/' className={styles.underline}>
                    <p className={styles.font}>Foto</p>
                </Link> */}
            </ul> 
        </nav>
    )
}