import * as React from "react";
import styles from "./Rating.module.scss";
import type { ThemeColor } from "@/types/colors";

interface RatingProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  color?: ThemeColor;
}

const Rating = ({
  value = 5,
  max = 5,
  color = "magenta",
  ...props
}: RatingProps) => {
  return (
    <div {...props} className={`${styles.Rating} color-${color}`}>
      <div className={styles.RatingBar} style={{width: `${value / max * 100}%`}} />
    </div>
  )
};

export default Rating;