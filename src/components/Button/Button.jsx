import React from 'react';

import styles from "./Button.module.css";
import { Link } from "react-router-dom";

export default function ButtonJoin() {
  return (
   
     <Link to="/Step1" style={{ textDecoration: 'none' }}>  
     <div className={styles.button} >¡Quiero ser parte!</div>
     </Link>
   
  );
}
