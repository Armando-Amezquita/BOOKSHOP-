import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

function Landing() {

  return (
    <>
    <main className={styles.mainContainer}>
        <section className={styles.cardContainer}>
            <p className={styles.title}> Welcome</p>
            <Link to='/home'>
                <button className={styles.button}>Start</button>
            </Link>
            <div className={styles.iconsContainer}>
                <span className={styles.fliker1}>♥</span>
                <span className={styles.fliker2}>♦</span>
                <span className={styles.fliker3}>♣</span>
                <span className={styles.fliker3}>☻</span>
                </div>
        </section>
    </main>
    </>
  );
}

export default Landing;
