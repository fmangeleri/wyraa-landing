import type { NextPage } from "next";
import styles from "./card-section.module.css";
const CardSection: NextPage = () => {
  return (
    <section className={styles.section2} id="section-2">
      <div className={styles.img2Container} id="img-2-container">
        <img className={styles.img2Icon} alt="" id="img-2" src="/img2@2x.png" />
      </div>
      <div className={styles.container2} id="texts-2">
        <h1 className={styles.h1} id="h1-2">
          Tarjetas corporativas para tus empleados
        </h1>
        <p className={styles.h2} id="h2-2">
          Empodera a tu equipo sin perder el control, distribui tarjetas
          virtuales y fisicas sin cargo, estableciendo límites gasto y
          restricciones de uso
        </p>
      </div>
    </section>
  );
};

export default CardSection;
