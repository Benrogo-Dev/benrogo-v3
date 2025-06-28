"use client"

import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <nav
      className={`${styles.navBar} ${isDropdownOpen ? styles.expanded : ""}`}
      suppressHydrationWarning
    >
      <div className={`${styles.navGroup} ${styles.navGroupLeft}`}>
        <div className={styles.topAlignmentContainer}>
          <Link
            href={"/"}
            className={styles.navItem}
          >
            <Image
              src="/benrogo-old.png"
              alt="Benrogo logo"
              width={40}
              height={40}
              priority
            />
            Benrogo
          </Link>
          <Image
            className={`${styles.dropdownIcon} ${styles.navItem} ${isDropdownOpen ? styles.open : ""}`}
            src="/arrow.svg"
            alt=""
            width={30}
            height={30}
            onClick={handleDropdown}
            priority
          />
        </div>
        <div className={styles.navDivider}></div>
        <Link
          href={"/linkies"}
          className={`${styles.navItem} ${styles.hoverUnderline}`}
        >
          Linkies
        </Link>
        <Link
          href={"/games"}
          className={`${styles.navItem} ${styles.hoverUnderline}`}
        >
          Games
        </Link>
        <Link
          href={"/partners"}
          className={`${styles.navItem} ${styles.hoverUnderline}`}
        >
          Partners
        </Link>
        <Link
          href={"/status"}
          className={`${styles.navItem} ${styles.hoverUnderline}`}
        >
          Status
        </Link>
        <Link
          href={"/about"}
          className={`${styles.navItem} ${styles.hoverUnderline}`}
        >
          About
        </Link>
      </div>
      <div className={`${styles.navGroup} ${styles.navGroupRight}`}>
        <p className={styles.navItem}>Version 3.0.0</p>
      </div>
    </nav>
  );
};

export default Navbar;