import type { NextPage } from 'next';
import styles from './header.module.css';
import Link from 'next/link';
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
        <Link
          className={styles.navLink}
          href='#section-2'
        >
          <h2
            className={styles.controlDeGastos}
            id='menu-2'
          >
            Tarjetas corporativas
          </h2>
        </Link>

        <Link
          className={styles.navLink}
          href='#section-3'
        >
          <h2
            className={styles.controlDeGastos}
            id='menu-1'
          >
            Control de gastos
          </h2>
        </Link>

        <Link
          className={styles.navLink}
          href='#section-5'
        >
          <h2
            className={styles.controlDeGastos}
            id='menu-3'
          >
            Automatizacion de facturas
          </h2>
        </Link>
      </div>
    </header>
  );
};

export default Header;
