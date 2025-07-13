import { Checkbox as BaseCheckbox } from "@base-ui-components/react/checkbox";
import { Check } from "@mui/icons-material";
import type { BenrogoPaletteColor } from "@/utils/getColors";
import styles from "./Checkbox.module.scss";

interface CheckboxProps extends BaseCheckbox.Root.Props {
  label?: string;
  labelPosition?: "top" | "bottom" | "left" | "right";
  color?: BenrogoPaletteColor;
}

const Checkbox = ({
  label,
  labelPosition,
  color = "magenta",
  ...props
}: CheckboxProps) => {
  const flexFlow =
    labelPosition === "top"
      ? "column-reverse"
      : labelPosition === "bottom"
        ? "column"
        : labelPosition === "left"
          ? "row-reverse"
          : "row";

  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: BaseCheckbox.Root contains the input element
    <label className={styles.Label} style={{ flexFlow }}>
      <BaseCheckbox.Root
        {...props}
        className={`${styles.Checkbox} color-${color}`}
      >
        <BaseCheckbox.Indicator className={styles.Indicator}>
          <Check />
        </BaseCheckbox.Indicator>
      </BaseCheckbox.Root>
      {label}
    </label>
  );
};

export default Checkbox;
