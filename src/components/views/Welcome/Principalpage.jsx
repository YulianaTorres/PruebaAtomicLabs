import React from 'react';
import style from "./Principal.module.css";
import astronauta from "../../../assets/Group4032.png";
import direccion from "../../../assets/Group4013.png";
import Button from '../../Button/Button';

export default function Principalpage() {
    return (
        <div className={style.dashboard}>
            <div className={style.background_wrapper}>
                <div className={style.background_main}

                />
            </div>
            <div className={style.layoutpadre}>
                <div className={style.herolayout}>
                    <div className={style.astronaut}>
                        <img src={astronauta}></img>
                    </div>
                    <div className={style.herotext}>
                        <h1>
                            <a className={style.child1}>Desarrolla todo</a> <br />
                            <a className={style.child2}>
                                <span>tu POTENCIAL</span>
                            </a>
                            <br />{" "}
                            <a className={style.child3}>
                                dentro del equipo <br />
                                <a className={style.child4}>
                                    <span>ATOMIC</span>LABS
                                </a>
                            </a>
                        </h1>
                        <Button />

                    </div>


                </div>
            </div>
            <div className={style.info}>
                <a href=""><img src={direccion} width="80%" /></a>
                <a className={style.btnp}>Quiero Saber mas</a>
            </div>

        </div>
    );
}

