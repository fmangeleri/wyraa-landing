import type { NextPage } from "next";
import styles from "./budget-section.module.css";
import Image from "next/image";
const BudgetSection: NextPage = () => {
  return (
    <section className={styles.section4} id="section-4">
      <div className={styles.container4} id="texts-4">
        <h1 className={styles.h1} id="h1-4">
          Crea y asigna presupuestos a tus equipos con reglas de negocio para
          controlar el gasto antes de que suceda.
        </h1>
      </div>
      <div className={styles.steps}>
        <Image className={styles.step1Icon} alt="" src="/step1@2x.png" width={350} height={440} />
        <Image className={styles.step1Icon} alt="" src="/step2@2x.png" width={350} height={440} />
        <Image className={styles.step1Icon} alt="" src="/step3@2x.png" width={350} height={440} />
      </div>
    </section>
  );
};

export default BudgetSection;
