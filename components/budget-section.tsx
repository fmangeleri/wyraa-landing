import type { NextPage } from "next";
import styles from "./budget-section.module.css";
const BudgetSection: NextPage = () => {
  return (
    <section className={styles.section4} id="section-4">
      <div className={styles.container4} id="texts-4">
        <h1 className={styles.h1} id="h1-4">
          Crea y asigna presupuestos a tus equipos con reglas de negocio para
          controlar el gasto antes de que suceda.
        </h1>
      </div>
      <div className={styles.steps} id="steps-container">
        <div className={styles.flow} id="flow-container">
          <div className={styles.flow1} id="flow-1">
            <div className={styles.headerCard1}>
              <div className={styles.agents}>
                <div className={styles.agent1}>
                  <div className={styles.administrador}>ADMINISTRADOR</div>
                </div>
                <div className={styles.agent2}>
                  <div className={styles.administrador}>MANAGER</div>
                </div>
              </div>
              <div className={styles.creaElPresupuestoContainer}>
                <ul className={styles.creaElPresupuesto}>
                  Crea el presupuesto
                </ul>
              </div>
            </div>
            <div className={styles.imgFlow1}>
              <img
                className={styles.imgCard11Icon}
                alt=""
                src="/imgcard11@2x.png"
              />
              <img
                className={styles.imgCard12Icon}
                alt=""
                src="/imgcard12@2x.png"
              />
            </div>
          </div>
          <div className={styles.flow2} id="flow-2">
            <div className={styles.headerCard1}>
              <div className={styles.agents}>
                <div className={styles.agent1}>
                  <div className={styles.administrador}>ADMINISTRADOR</div>
                </div>
                <div className={styles.agent2}>
                  <div className={styles.administrador}>MANAGER</div>
                </div>
              </div>
              <div className={styles.creaElPresupuestoContainer}>
                <ul className={styles.creaElPresupuesto}>
                  Asigna el presupuesto a los colaboradores
                </ul>
              </div>
            </div>
            <div className={styles.imgFlow2}>
              <img
                className={styles.imgCard21Icon}
                alt=""
                src="/imgcard21@2x.png"
              />
              <img
                className={styles.imgCard22Icon}
                alt=""
                src="/imgcard22@2x.png"
              />
            </div>
          </div>
          <div className={styles.flow3} id="flow-3">
            <div className={styles.headerCard1}>
              <div className={styles.agents}>
                <div className={styles.agent1}>
                  <div className={styles.administrador}>ADMINISTRADOR</div>
                </div>
                <div className={styles.agent2}>
                  <div className={styles.administrador}>MANAGER</div>
                </div>
              </div>
              <div className={styles.creaElPresupuestoContainer}>
                <ul className={styles.creaElPresupuesto}>
                  Controla los gastos en tiempo real
                </ul>
              </div>
            </div>
            <div className={styles.imgFlow3}>
              <img
                className={styles.imgCard31Icon}
                alt=""
                src="/imgcard31@2x.png"
              />
              <img
                className={styles.imgCard32Icon}
                alt=""
                src="/imgcard32@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetSection;
