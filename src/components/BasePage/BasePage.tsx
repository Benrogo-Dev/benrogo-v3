import * as React from 'react';
import styles from './BasePage.module.scss';
import { ParticleBackground, Navbar } from '@/components';

type BasePageProps = {
  children: React.ReactNode;
  error?: boolean;
};

const BasePage = ({
  children,
  error = false
}: BasePageProps) => {
  return (
    <>
      <ParticleBackground
        colors={error ? ['red'] : ['cyan', 'magenta']}
      />
      <div className={styles.basePage}>
        <Navbar color={error ? 'red' : 'magenta'} />
        { children }
      </div>
    </>
  );
};

export default BasePage;