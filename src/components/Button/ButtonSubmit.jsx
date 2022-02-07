import React from 'react';

import styles from "./Buttonsubmit.module.css";
import { Link } from "react-router-dom";

export default function ButtonJoin() {
  return (
    
     <Link to="/Step2" style={{ textDecoration: 'none' }}>  
       <div className={styles.button} > Enviar   </div>
     </Link>
   
  );
}

