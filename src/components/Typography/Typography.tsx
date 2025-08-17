import * as React from 'react';
import styles from './Typography.module.scss';
import type { ThemeColor } from '@/types/colors';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLParagraphElement> {
  glow?: boolean;
  color?: ThemeColor;
  fontSize?: number | string;
}

const Typography = ({
  glow = false,
  color,
  fontSize,
  children,
  ...props
}: LinkProps) => {
  return (
    <p
      className={`${styles.Typography} ${color && `color-${color}`}`}
      style={{ fontSize }}
      {...(glow && { 'data-glow': 1 })}
      {...props}
    >
      {children}
    </p>
  );
};

export default Typography;