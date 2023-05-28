import type { NextPage } from 'next';
import styles from './header.module.css';
const Header: NextPage = () => {
  return (
    <header
      className={styles.head}
      id='header'
    >
      <h3
        className={styles.logo}
        id='logo-header'
      >
        wyraa
      </h3>
      <div
        className={styles.menu}
        id='menu'
      >
        <a
          className={styles.navLink}
          href='#section-2'
        >
          <h2
            className={styles.controlDeGastos}
            id='menu-2'
          >
            Tarjetas corporativas
          </h2>
        </a>

        <a
          className={styles.navLink}
          href='#section-3'
        >
          <h2
            className={styles.controlDeGastos}
            id='menu-1'
          >
            Control de gastos
          </h2>
        </a>

        <a
          className={styles.navLink}
          href='#section-5'
        >
          <h2
            className={styles.controlDeGastos}
            id='menu-3'
          >
            Automatizacion de facturas
          </h2>
        </a>
        <button className={styles.menuButton}>
          <p
            className={styles.contactanos}
            id='menu-button-text'
          >
            Contactanos
          </p>
        </button>
      </div>
    </header>
  );
};

export default Header;
