import type { NextPage } from "next";
import styles from "./e-r-p-section.module.css";
const ERPSection: NextPage = () => {
  return (
    <section className={styles.section5} id="section-5">
      <div className={styles.container5} id="container-5">
        <div className={styles.img5Container} id="img-5-container">
          <img
            className={styles.img5Icon}
            alt=""
            id="img-5"
            src="/img5@2x.png"
          />
        </div>
        <div className={styles.container51} id="texts-5">
          <h1 className={styles.h1} id="h1-5">
            Automatiza tu contabilidad
          </h1>
          <p className={styles.h2} id="h2-5">
            Elimina tareas manuales, scanea facturas y tickets de compra,
            nuestro algoritmo de Inteligencia Artificial extrae los datos y lo
            sincroniza automaticamente con tu ERP
          </p>
        </div>
      </div>
      <div className={styles.erps} id="erps">
        <div className={styles.erpLine1} id="erp-line-1">
          <img
            className={styles.erp1Icon}
            alt=""
            id="erp-1"
            src="/erp-1@2x.png"
          />
          <img
            className={styles.erp1Icon}
            alt=""
            id="erp-2"
            src="/erp-2@2x.png"
          />
          <img
            className={styles.erp1Icon}
            alt=""
            id="erp-3"
            src="/erp-3@2x.png"
          />
        </div>
        <div className={styles.erpLine2} id="erp-line-2">
          <img
            className={styles.erp1Icon}
            alt=""
            id="erp-4"
            src="/erp-4@2x.png"
          />
          <img
            className={styles.erp1Icon}
            alt=""
            id="erp-5"
            src="/erp-5@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default ERPSection;
