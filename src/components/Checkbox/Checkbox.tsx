import { Checkbox as BaseCheckbox } from "@base-ui-components/react/checkbox";
import * as React from "react";
import styles from "./Checkbox.module.scss";
import type { ThemeColor } from "@/types/colors";
import Icon from '@mdi/react';
import { mdiCheckBold } from "@mdi/js"

interface CheckboxProps extends BaseCheckbox.Root.Props {
  label?: string;
  labelPosition?: "top" | "bottom" | "left" | "right";
  color?: ThemeColor;
}

const Checkbox = ({
  label,
  labelPosition,
  color = "magenta",
  ...props
}: CheckboxProps) => {
  const flexFlow = (
    labelPosition === "top" ? "column-reverse":
    labelPosition === "bottom" ? "column" :
    labelPosition === "left" ? "row-reverse" :
    "row"
  );

  return (
    <label className={styles.Label} style={{ flexFlow }}>
      <BaseCheckbox.Root {...props} className={`${styles.Checkbox} color-${color}`}>
        <BaseCheckbox.Indicator className={styles.Indicator}>
          <Icon path={mdiCheckBold} size={0.9} />
        </BaseCheckbox.Indicator>
      </BaseCheckbox.Root>
      {label}
    </label>
  )
};

export default Checkbox;