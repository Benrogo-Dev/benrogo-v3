"use client"

import { Link } from "@/components";
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
            className={`${styles.navItem} ${styles.hoverGlow}`}
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
        <Link href={"/linkies"} fontSize={18} hoverUnderline>Linkies</Link>
        <Link href={"/dashboard"} fontSize={18} hoverUnderline>Dashboard</Link>
        <Link href={"/partners"} fontSize={18} hoverUnderline>Partners</Link>
        <Link href={"/status"} fontSize={18} hoverUnderline>Status</Link>
        <Link href={"/about"} fontSize={18} hoverUnderline>About</Link>
      </div>
      <div className={`${styles.navGroup} ${styles.navGroupRight}`}>
        <SignInButton />
      </div>
    </nav>
  );
};

export default Navbar;