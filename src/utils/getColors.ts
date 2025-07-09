import { useMemo } from "react";

export type BenrogoPaletteColor = "scarlet" |"orange" | "green" | "cyan" | "blue" | "magenta";

type ColorVars = Record<string, string>;

export const getColorVars = (color: BenrogoPaletteColor): ColorVars =>
  Object.fromEntries(
    [100, 200, 300, 400, 500, 600].flatMap(n => [
      [`--base-${n}`, `var(--${color}-${n})`],
      [`--base-${n}-neon`, `var(--${color}-${n}-neon)`]
    ])
  );

export const useColorStyle = (color: BenrogoPaletteColor): ColorVars =>
  useMemo(() => getColorVars(color), [color]);