import React from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

export default function Login () {

    return (
        <>
        <Header />
        <main className={styles.containerMainLogin}>
            <div className={styles.containerSections}>
                <section className={styles.containerLeft}>
                    <p className={styles.logo}>Logo</p>
                    <form className={styles.containerForm}>
                        <h1 className={styles.titleForm}> ¡Ingresa a tu cuenta!..<span className="pruebaspan"> &#160; </span>  </h1>
                        <div className={styles.containerButtonsSocial}>
                            <button type='submit' className={styles.buttonGoogle}>
                            <i className="fa-brands fa-google"></i> Iniciar con Google
                            </button>
                            <button type='submit' className={styles.buttonMeta}>
                            <i id='icon' className="fa-brands fa-facebook-f"></i> Iniciar con Facebook
                            </button>
                        </div>
                        <label htmlFor="email" className={styles.labels}>
                            <span className={styles.text}>Correo Electrónico</span>
                            <input placeholder='correo@gmail.com' id='email' type="text" name='email' className={styles.inputForm} />
                        </label>
                        <label htmlFor="password" className={styles.labels}>
                            <span className={styles.text}>Contraseña</span>
                            <input placeholder='Tu contraseña' id='password' type="password" name='password' className={styles.inputForm} />
                        </label>
                        <div className={styles.containerButtons}>
                            <button type='submit' className={styles.iniciarSesion}>
                                Iniciar sesión 
                            </button>
                            <button type='submit' className={styles.crearUsuario}>
                                Crear cuenta
                            </button>
                        </div>
                        <span className={styles.spanRecuperar}>
                            ¿No recuerdas tu contraseña? 
                            <Link to='#' className={styles.link}>
                                <p>Olvide contraseña</p>
                            </Link>
                        </span>
                    </form>
                </section>
                <section className={styles.containerRigth}>
                    <p className={styles.image}></p>
                </section>
            </div>
            <Link to='/' className={styles.link}>
                <button>Volver</button>
            </Link>
            
        </main>
        </>
    )
}
