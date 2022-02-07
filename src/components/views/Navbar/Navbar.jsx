import { Fragment } from "react";
import styles from "./Navbar.module.css";
import logo from "../../../assets/logo.png";
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
}
  return (
    <Fragment>
      <header className={styles.navbar}>
         <div className={styles.navbar_logo}>
          <a onClick={handleSubmit} href="#">
              <img src={logo} />
          </a>
          </div>
      </header>
      <div className={styles.navbarpace} />
    </Fragment>
  );
}
