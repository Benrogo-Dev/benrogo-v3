import * as React from "react";
import styles from "./BasePage.module.scss";
import { ParticleBackground, Navbar } from "@/components";

type BasePageProps = {
  children: React.ReactNode;
};

const BasePage = ({ children }: BasePageProps) => {
  return (
    <>
      <ParticleBackground />
      <div className={styles.basePage}>
        <Navbar />
        <div className={styles.content}>
            { children }
        </div>
      </div>
    </>
  );
};

export default BasePage;