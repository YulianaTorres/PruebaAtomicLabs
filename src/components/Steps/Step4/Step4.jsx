import { React, useState, useEffect } from "react";
import styles from './Step4.module.css';
import astronauta from '../../../assets/astronauta4.png';
import icon from '../../../assets/icon3.png';
import check from '../../../assets/check.png';
import icon2 from '../../../assets/flecha2.png';
import uno from '../../../assets/checkmark4.png';
import dos from '../../../assets/checkmark4.png';
import tres from '../../../assets/checkmark4.png';
import cuatro from '../../../assets/icon4.png';
import Navbar from '../../views/Navbar/Navbar';
import Footer2 from '../Footer2/Footer2';
import { useNavigate } from 'react-router-dom';
import ModalTerms from '../Terminal/Terminals';

export default function Step2() {

    const [step] = useState("85");
    let navigate = useNavigate();

    
    const handleSubmit2 = (e) => {
        e.preventDefault();
        navigate('/step3');
    }
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => setOpenModal(true);


    return (
        <div className={styles.step_container}>
            <Navbar />
            <div className={styles.layout_padre}>
                <div className={styles.step_layout}>
                    <div className={styles.step_text}>
                        <div className={styles.step1_container}>
                            <div className={styles.header_step}>
                                <div className={styles.set1_bar}>
                                    <div className={styles.progress}>
                                        <div className={styles.progress_grid}>
                                            <img src={uno} alt="" />
                                            <img src={dos} alt="" className="" />
                                            <img src={tres} alt="" className="" />
                                            <img src={cuatro} alt="" className="" />
                                        </div>
                                        <progress value={step} max="100"></progress>
                                    </div>{" "}

                                </div>
                                <div className={styles.ab}>
                                    <img src={icon2} alt="" />
                                    <button className={styles.abs} onClick={handleSubmit2}> Regresar </button>
                                </div>
                                <div className={styles.step1_h1}>

                                    <img src={icon}></img>
                                    <h1>
                                        TERMINOS Y <span>CONDICIONES</span>{" "}
                                    </h1>
                                </div>
                                <ModalTerms open={openModal} setOpenModal={setOpenModal} />
                                <h2 className={styles.step1_p}>
                                    Por favor revisa nuestros terminos y condiciones para este servicio
                                </h2>
                                <p className={styles.terminos} onClick={handleOpenModal}>
                                    Consulta nuestros terminos y condiciones
                                </p>
                                <p className={styles.check} onClick={handleOpenModal}>
                                    <img src={check} alt="" />
                                  Acepto los terminos y condiciones
                                </p>
                            </div>

                        </div>
                        <button className={styles.btn}>Continuar</button>
                    </div>

                    <div className={styles.step_astronaut}>
                        <img src={astronauta}></img>
                    </div>
                </div>
                
            </div>
            <Footer2 />

        </div>



    );

}