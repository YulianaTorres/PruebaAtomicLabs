import React from 'react';
import styles from './Team.module.css';
import equipo from "../../../assets/Group4040.png";
import Steps from '../../Steps/Steps';
import Button from '../../Button/Button';


export default function Team() {
    return (

        <div className={styles.container3}>
            <div className={styles.header}>
                <h1>
                    TE ENCANTARÁ <br /> <span>TRABAJAR CON NOSOTROS</span>{" "}
                </h1>
            </div>
            <div className={styles.picture}>
                <img src={equipo} alt="Team AtomicLabs" />
            </div>
            <div className={styles.steps}> <Steps /></div>
           
            <div className={styles.button_centrar}>
                <Button />

            </div>
        </div>



    );

}