import React from 'react';
import styles from './Services.module.css';
import explora from "../../../assets/Group4035.png";
import guionNaranja from "../../../assets/guion-naranja.png";
import imagina from "../../../assets/Group4036.png";
import guionBlanco from "../../../assets/guion-blanco.png";
import conquista from "../../../assets/Group4037.png";

export default function Service() {

    return (
        <div className={styles.container} >
            <div className={styles.service}>
                <h1 className={styles.servicetext}>
                    SOMOS EL BRAZO DERECHO
                    <br />
                    <span>DE LA TECNOLOGIA</span>{" "}
                </h1>

            </div>
            <div className={styles.box}>
                <div className={styles.box1}>
                    <img src={explora} alt="" />
                    <img className={styles.box1guion} src={guionNaranja} alt="" />

                    <h1>EXPLORA</h1>
                    <ul>
                        <li>
                            Innovación y {" "}
                            <span>
                                creación <br /> tecnológica
                            </span>
                        </li>
                        <li>
                            <span>UI/UX</span>
                        </li>
                        <li>Innovación</li>
                    </ul>
                </div>
                <div className={styles.box2}>
                    <img src={imagina} alt="" />
                    <img className={styles.box2guion} src={guionBlanco} />
                    <h1>IMAGINA</h1>

                    <ul className={styles.box2list}>
                        <li>
                            <span> Estrategia </span>Digital
                        </li>
                        <li>
                            Big Data & <span>Analysis</span>
                        </li>
                        <li>
                            <span>Consultoria</span> Tecnológica
                        </li>
                        <li>
                            <span>Reducción </span>de costos TI
                        </li>
                    </ul>

                </div>
                <div className={styles.box3}>
                    <img src={conquista} alt="" />
                    <img className={styles.box3guion} src={guionNaranja} alt="" />
                    <h1>CONQUISTA</h1>
                    <ul>
                        <li>
                            Desarrollo tecnológico
                            <span>
                                <br />
                                a la medida <br />
                            </span>
                        </li>
                        <li>
                            <span>Ciberseguridad</span>
                        </li>
                        <li>
                            <span>Servicios de la Nube</span>
                        </li>
                    </ul>


                </div>
            </div>


        </div>
    );

}