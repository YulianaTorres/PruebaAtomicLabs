import React from 'react';

import styles from "./Terminals.module.css";
import importante from '../../../assets/importante.png';

export default function ModalTerms({ open, setOpenModal }) {
  const closeModal = () => setOpenModal(false);
  if (open) {
    return (
      <section className={styles.modal} onClick={closeModal}>
        <div className={styles.modal__content}>
          <img
            src={importante}
            alt="Importante"
            className={styles.modal__image}
          />
          <p className={styles.modal__title}>Términos y Condiciones</p>
          <p className={styles.modal__text}>
            Para llevar acabo las finalidades descritas en el presente Aviso de
            Privacidad, utilizaremos datos personales de identificación,
            contacto y laborales.
          </p>
          <p className={styles.modal__text}>
            Los datos personales que AtomicLabs recaba de usted, serán
            utilizados para las siguientes finalidades que son necesarias para
            ofrecer nuestros servicios
          </p>
          <p className={styles.modal__text}>
            ● AtomicLabs requiere utilizar sus datos personales para incluirlo
            en la base de datos que utilizamos para prestar los servicios de
            reclutamiento, selección de personal, administración de nómina y
            prestación de servicios. AtomicLabs utilizará sus datos personales
            para evaluar si es posible colocarlo en las vacantes de empleo de la
            compañía o de los clientes de AtomicLabs y para conocer sus
            aptitudes, antecedentes y referencias laborales. En este sentido,
            AtomicLabs utilizará sus datos personales para ponerse en contacto
            con usted en relación a las vacantes para las cuales podría ser
            candidato.
          </p>
        </div>
      </section>
    );
  }
  return null;
}