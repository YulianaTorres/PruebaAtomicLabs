import { Fragment } from "react";
import styles from "./Steps.module.css";
import pasos from "../../assets/next.png";

export default function Steps({
  steps = [
    "Contratación remota",
    "Entrevista con el área de RH",
    "Prueba Práctica",
    "Entrevista técnica",
  ],
}) {
  return (
    <div className={styles.steps}>
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        const stepElement = (
          <p key={`step-${index}`} className={styles.step}>
            {step}
          </p>
        );
        if (isLast) {
          return stepElement;       
        } else {
          return (
            <Fragment key={`step-${index}`}>
              {stepElement}
              <img
                src={pasos}
                alt="Siguiente paso"
                className={styles.stepimage}
                
              />
            </Fragment>
          );
        }
      })}
    </div>
  );
}
