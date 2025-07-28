import * as React from "react";
import styles from "./Logo.module.scss";
import type { ThemeColor } from "@/types/colors";

interface LogoProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  color?: ThemeColor;
  size?: "small" | "medium" | "large";
  imageUrl: string;
  text?: string;
  glow?: boolean;
}

const Logo = ({
  color = "magenta",
  size = "small",
  imageUrl,
  text = "",
  glow = false,
  ...props
}: LogoProps) => {
  return (
    <div
      className={`${styles.Logo} color-${color} ${styles[size]}`}
      {...(glow && { 'data-glow': 1 })}
      {...props}
    >
      <img
        className={styles.LogoImage}
        src={imageUrl}
        alt={`${text} logo`}
      />
      {
        text && <p className={styles.LogoText}>{text}</p>
      }
    </div>
  )
};

export default Logo;