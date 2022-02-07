import React from 'react';
import linkedInk from "../../../assets/linkedin.png";
import twitter from "../../../assets/twitter.png";
import styles from './Footer2.module.css'


export default function Footer2() {
    return(
        <div className={styles.footer}>
            <div>
                <p>@ 2020 AtomicLabs. Todos los derechos reservados.</p>
            </div>
            <div className={styles.social}>
                <a href="">Aviso de privacidad</a>
                <div>
                    <img src={linkedInk} />
                    <img src={twitter} />
                </div>
            </div>
        </div>
    );
}