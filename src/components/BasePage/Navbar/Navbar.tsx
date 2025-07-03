"use client"

import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.scss";
import { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SignInButton from "./SignInButton";

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
            className={`${styles.navItem} ${styles.hoverUnderline}`}
          >
            <Image
              src="/benrogo-old.png"
              alt="Benrogo logo"
              width={40}
              height={40}
              priority
            />
            <p>Benrogo</p>
          </Link>
          <PlayArrowIcon
            className={`${styles.dropdownIcon} ${styles.navItem} ${isDropdownOpen ? styles.open : ""}`}
            onClick={handleDropdown}
            fontSize="large"
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
          href={"/dashboard"}
          className={`${styles.navItem} ${styles.hoverUnderline}`}
        >
          Dashboard
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
        <SignInButton />
      </div>
    </nav>
  );
};

export default Navbar;