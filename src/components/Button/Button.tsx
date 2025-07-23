import * as React from "react";
import styles from "./Button.module.scss";
import type { BenrogoPaletteColor } from "@/utils/getColors";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: BenrogoPaletteColor;
  children?: React.ReactNode;
}

const Checkbox = ({
  color = "magenta",
  children,
  ...props
}: ButtonProps) => {
  return (
    <button {...props} className={`${styles.Button} color-${color}`}>
      { children }
    </button>
  )
};

export default Checkbox;