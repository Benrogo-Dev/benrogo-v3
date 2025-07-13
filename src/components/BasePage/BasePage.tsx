import type * as React from "react";
import styles from "./BasePage.module.scss";
import BenrogoThemeProvider from "./BenrogoThemeProvider";
import Navbar from "./Navbar";
import ParticleBackground from "./ParticleBackground";

type BasePageProps = {
  children: React.ReactNode;
};

const BasePage = ({ children }: BasePageProps) => {
  return (
    <>
      <ParticleBackground />
      <div className={styles.basePage}>
        <BenrogoThemeProvider>
          <Navbar />
          <div className={styles.content}>{children}</div>
        </BenrogoThemeProvider>
      </div>
    </>
  );
};

export default BasePage;
