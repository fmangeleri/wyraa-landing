import type { NextPage } from "next";
import styles from "./footer.module.css";
const Footer: NextPage = () => {
  return (
    <footer className={styles.footer} id="footer">
      <p className={styles.copyright2023} id="copyright">
        Copyright @ 2023 Wyraa - All Rights Reserved.
      </p>
      <p className={styles.logoEnd} id="logo-footer">
        wyraa
      </p>
    </footer>
  );
};

export default Footer;
