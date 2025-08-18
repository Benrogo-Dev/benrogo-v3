'use client';

import { Link, Logo, AccountButton } from '@/components';
import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import type { ThemeColor } from '@/types/colors';
import Icon from '@mdi/react';
import { mdiTriangle } from '@mdi/js';

interface NavbarProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  color?: ThemeColor;
}

const Navbar = ({
  color = 'magenta',
  ...props
}: NavbarProps) => {
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  const toggleExpansion = () => {
    setNavbarExpanded((prevState) => !prevState);
  };

  return (
    <nav
      className={`${styles.Navbar} color-${color}`}
      {...(navbarExpanded && { 'data-expanded': 1 })}
      {...props}
    >
      <div className={styles.NavbarTopGroup}>
        <Link href="/" hoverUnderline hoverScale clickShrink glow color="blue">
          <Logo imageUrl="/benrogo-old.png" text="Benrogo" color="blue" />
        </Link>
        <div className={styles.NavbarExpandArrowContainer} onClick={toggleExpansion}>
          <Icon
            path={mdiTriangle}
            className={styles.NavbarExpandArrow}
            size={1}
            rotate={navbarExpanded ? 180 : 270}
          />
        </div>
      </div>
      <Link href="/linkies" fontSize="1.2rem" hoverUnderline clickShrink glow>Linkies</Link>
      <Link href="/dashboard" fontSize="1.2rem" hoverUnderline clickShrink glow>Dashboard</Link>
      <Link href="/partners" fontSize="1.2rem" hoverUnderline clickShrink glow>Partners</Link>
      <Link href="/status" fontSize="1.2rem" hoverUnderline clickShrink glow>Status</Link>
      <Link href="/about" fontSize="1.2rem" hoverUnderline clickShrink glow>About</Link>
      <AccountButton />
    </nav>
  );
};

export default Navbar;
