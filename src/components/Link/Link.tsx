import * as React from "react";
import styles from "./Link.module.scss";
import type { BenrogoPaletteColor } from "@/utils/getColors";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  hoverUnderline?: boolean;
  color?: BenrogoPaletteColor;
  fontSize?: number | string;
}

const Link = ({
  hoverUnderline = false,
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
    >
      {children}
    </a>
  );
};

export default Link;