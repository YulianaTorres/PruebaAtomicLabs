import { React, useState } from 'react';
import styles from './Caracteristicas.module.css';
import Button from '../../Button/Button';




export default function Caracteristicas() {
    const checkmark = require('../../../assets/checkmark.png'); 

    console.log(checkmark);
    const [rows] = useState([
        {
            caracteristicas: "Equipo inclusivo, honesto y auténtico",
            otros: checkmark,
            atomic: checkmark,
        },
        {
            caracteristicas: "Puntualidad es nuestro segundo nombre",
            otros: checkmark,
            atomic: checkmark,
        },
        {
            caracteristicas: "Siempre innovamos con nuestros pruductos",
            otros: checkmark,
            atomic: checkmark,
        },
        {
            caracteristicas:
                "Te ayudamos a crecer y a implementar nuevos conocimientos",
            otros: "",
            atomic: checkmark,
        },
        {
            caracteristicas: "Nos preocupamos por tu bienestar",
            otros: "",
            atomic: checkmark,
        },
        {
            caracteristicas: "El respesto es una parte fundamental",
            otros: "",
            atomic: checkmark,
        },
    ]);
  

    return (
        <div  className={styles.container}>
              
            <div className={styles.background_blue}>
                <div className={styles.tabla}>
                    <table>
                        <thead>
                            <tr>
                                <th className={styles.th} scope="col"></th>
                                <th className={styles.th, styles.title} scope="col">
                                    CARACTERÍSTICAS
                                </th>
                                <th className={styles.th, styles.title} scope="col">
                                    OTROS
                                </th>
                                <th className={styles.th} scope="col">
                                    ATOMIC
                                </th>
                            </tr>
                        </thead>
                        <tbody >
                            {rows.map((row) => (
                                <tr >
                                    <td className={styles.blanck} scope="row"></td>
                                    <td className={styles.td} scope="row">
                                        {row.caracteristicas}
                                    </td>
                                    <td>
                                    <img src={row.otros} alt="" />
                                    </td>
                                    <td >
                                    <img src={row.atomic} alt="" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        
                    </table>
                </div>
                <div className={styles.button_centrar}>
                <Button />

            </div>
            </div>
        </div>
       
    );

}