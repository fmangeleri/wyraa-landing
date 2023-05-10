import type { NextPage } from "next";
import Header from "../components/header";
import HeroSection from "../components/hero-section";
import CardSection from "../components/card-section";
import ApprovalSection from "../components/approval-section";
import BudgetSection from "../components/budget-section";
import ERPSection from "../components/e-r-p-section";
import Footer from "../components/footer";
import styles from "./index.module.css";
const LandingPage: NextPage = () => {
  return (
    <main className={styles.landingPage} id="main-container">
      <Header />
      <HeroSection />
      <CardSection />
      <ApprovalSection />
      <BudgetSection />
      <ERPSection />
      <Footer />
    </main>
  );
};

export default LandingPage;
