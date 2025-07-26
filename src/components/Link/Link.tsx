import * as React from "react";
import styles from "./Link.module.scss";
import type { ThemeColor } from "@/types/colors";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  hoverUnderline?: boolean;
  glow?: boolean;
  color?: ThemeColor;
  fontSize?: number | string;
}

const Link = ({
  hoverUnderline = false,
  glow = false,
  color = "magenta",
  fontSize,
  children,
  ...props
}: LinkProps) => {
  return (
    <a
      {...props}
      className={`${styles.Link} color-${color}`}
      style={{ fontSize }}
      {...(hoverUnderline && { 'data-hover-underline': 1 })}
      {...(glow && { 'data-glow': 1 })}
    >
      {children}
    </a>
  );
};

export default Link;