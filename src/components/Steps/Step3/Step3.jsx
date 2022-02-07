import { React, useState, useEffect } from "react";
import styles from './Step3.module.css';
import astronauta from '../../../assets/astronauta2.png';
import icon from '../../../assets/icon3.png';
import icon2 from '../../../assets/flecha2.png';
import uno from '../../../assets/checkmark4.png';
import dos from '../../../assets/checkmark4.png';
import tres from '../../../assets/icon3.png';
import cuatro from '../../../assets/icon4.png';
import Navbar from '../../views/Navbar/Navbar';
import Footer2 from '../Footer2/Footer2';
import { useNavigate } from 'react-router-dom';


export default function Step3() {
  
  const [step] = useState("75");
  let navigate = useNavigate();
 


  const handleSubmit2 = (e) => {
    e.preventDefault();
    navigate('/step2');
  }


  const initialValues = { phone: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
   
    if (Object.keys(errors).length) {
      setFormErrors(errors);
    }
    else {
     
      setIsSubmit(true);
      navigate('/step4');
    }

  };

  useEffect(() => {

    if (Object.keys(formErrors).length === 0 && isSubmit) {
    

    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
 
    if (!values.phone) {
      errors.phone = "El código es requerido";
    } else{}
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
                <div className={styles.ab}>
                  <img src={icon2} alt="" />
                  <button className={styles.abs} onClick={handleSubmit2}> Regresar </button>
                  </div>
                <div className={styles.step1_h1}>
             
                  <img src={icon}></img>
                  <h1>
                    CÓDIGO DE  <span>VERIFICACIÓN</span>{" "}
                  </h1>
                </div>
                <h2 className={styles.step1_p}>
                  Te envíamos un SMS al número:
                </h2>
                
                <p>Ingresa el codigo de verificación</p>
              </div>
              <form onSubmit={handleSubmit} className={styles.step1_body}>
                <div class={styles.input_icons, styles.inner_addon, styles.right_addon}>
                  <p className={styles.codigo}>Código de verificación</p>
                  <input
                    type="text"
                    name="phone"
                    className={styles.step_inputs, styles.input_field}
                    placeholder=""
                    onChange={handleChange}
                    />
                  </div>
                  <h3>{formErrors.phone}</h3>

                <button onClick={handleSubmit} className={styles.btn}>Validar Código</button>

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