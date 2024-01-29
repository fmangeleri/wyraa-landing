import type { NextPage } from "next";
import styles from "./approval-section.module.css";
import Image from "next/image";
const ApprovalSection: NextPage = () => {
  return (
    <section className={styles.section3} id="section-3">
      <div className={styles.container3} id="texts-3">
        <h1 className={styles.h1} id="h1-3">
          Personaliza flujos de aprobación y asigna presupuestos
        </h1>
        <p className={styles.h2} id="h2-3">
          Crea políticas de gasto y cadenas de aprobación completamente
          personalizables según las necesidades de tu empresa. Ya sean personas
          individuales, departamentos o hasta múltiples aprobadores, nosotros
          nos adaptamos.
        </p>
      </div>
      <div className={styles.img3Container} id="img-3-container">
        <Image className={styles.img3Icon} alt="" id="img-3" src="/img3@2x.png" width={500} height={478} />
      </div>
    </section>
  );
};

export default ApprovalSection;
