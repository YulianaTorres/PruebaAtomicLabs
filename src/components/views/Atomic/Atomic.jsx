import React from 'react';
import img_left from '../../../assets/img_left.png';
import img_center from '../../../assets/img_center.png';
import img_right from '../../../assets/img_right.png';
import styles from './Atomic.module.css';


export default function Atomic() {
    return (
        <div className={styles.container}>
            <h1>
                ¿POR QUE <span>ATOMIC?</span>
            </h1>
            <div className={styles.container_body}>
          
                <div className={styles.left, styles.card}>
                    <div className={styles.imagen}>
                        <img src={img_left} alt="" />
                    </div>
                    <div className={styles.card_list}>
                        <ul className={styles.list}>
                            <li>
                                Usamos las Tecnologias  mas modernas.
                            </li>
                            <li>
                                Inovamos y creamos 
                                proyectos retadores
                            </li>
                        </ul>
                    </div>
                </div>
              
                <div className={styles.card_list, styles.card}>
                <div className={styles.imagen}>
                        <img src={img_center} alt="" />
                    </div>
                    <ul className={styles.list}>
                        <li>
                            Trabajamos en equipo  rumbo al exito!
                        </li>
                        <li>
                            No tenemos codigo de 
                            vestimenta
                        </li>
                    </ul>
                </div>
              
                <div className={styles.card_list, styles.card}>
                <div className={styles.imagen}>
                        <img src={img_right} alt="" />
                    </div>
                    <ul className={styles.list}>
                        <li>
                            Realizamos actividades 
                            para tu bienestar.
                        </li>
                        <li>
                            ¡Tenemos un parque 
                            frente a la oficina!
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.background_blue}></div>
        </div>
    );
}

