import { React, useState, useEffect } from "react";
import styles from './Step1.module.css';
import astronauta from '../../../assets/step1.png';
import icon from '../../../assets/icon1.png';
import uno from '../../../assets/icon1.png';
import dos from '../../../assets/icon2.png';
import tres from '../../../assets/icon3.png';
import cuatro from '../../../assets/icon4.png';
import Navbar from '../../views/Navbar/Navbar';
import Footer2 from '../Footer2/Footer2';
import { useNavigate } from 'react-router-dom';


export default function Step1() {

    const [step] = useState("25");
    let navigate = useNavigate();
    const initialValues = { username: "", apellidos: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate(formValues)
        setIsSubmit(true);
        if (Object.keys(errors).length) {
            setFormErrors(errors);
        }
        else {

            navigate('/step2');
        }

    };

    useEffect(() => {

        if (Object.keys(formErrors).length === 0 && isSubmit) {
        }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        if (!values.username) {
            errors.username = "El nombres es requerido";
        } else if (values.username.length < 5) {
            errors.username = "El nombre debe tener minimo 5 caracteres";
        }
        if (!values.apellidos) {
            errors.apellidos = "Los apellidos son requeridos";
        } else if (values.apellidos.length < 5) {
            errors.apellidos = "El apellido debe tener minimo 5 caracteres";
        }

        return errors;
    };




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
                                <div className={styles.title}>
                                    <div className={styles.step1_h1}>
                                        <img src={icon}></img>
                                        <h1>
                                            TE QUEREMOS <span>CONOCER</span>{" "}
                                        </h1>
                                    </div>
                                    <p className={styles.step1_p}>
                                        Queremos saber que eres tu, por favor ingresa los siguientes
                                        datos:
                                    </p>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit} className={styles.step1_body}>
                                <div class={styles.input_icons, styles.inner_addon, styles.right_addon}>
                                    <p>Nombre (s)</p>
                                    <input
                                        type="text"
                                        name="username"
                                        className={styles.step_inputs, styles.input_field}
                                        placeholder=""
                                        value={formValues.username}
                                        onChange={handleChange}
                                    />
                                    <h3>{formErrors.username}</h3>
                                </div>
                                <div className={styles.input_icons, styles.inner_addon, styles.right_addon}>
                                    <p>Apellidos</p>
                                    <input
                                        type="text"
                                        name="apellidos"
                                        className={styles.step_inputs, styles.input_field}
                                        placeholder=""
                                        value={formValues.apellidos}
                                        onChange={handleChange}
                                    />
                                </div>
                                <h3>{formErrors.apellidos}</h3>
                                <button className={styles.btn}>Enviar</button>


                            </form>

                        </div>
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