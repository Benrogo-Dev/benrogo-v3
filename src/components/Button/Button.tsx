import * as React from "react";
import styles from "./Button.module.scss";
import type { ThemeColor } from "@/types/colors";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ThemeColor;
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