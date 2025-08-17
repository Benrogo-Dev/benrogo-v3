import { Switch as BaseSwitch } from '@base-ui-components/react/switch';
import * as React from 'react';
import styles from './Switch.module.scss';
import type { ThemeColor } from '@/types/colors';

interface SwitchProps extends BaseSwitch.Root.Props {
  label?: string;
  labelPosition?: 'top' | 'bottom' | 'left' | 'right';
  color?: ThemeColor;
}

const Switch = ({
  label,
  labelPosition,
  color = 'magenta',
  ...props
}: SwitchProps) => {
  const flexFlow = (
    labelPosition === 'top' ? 'column-reverse':
      labelPosition === 'bottom' ? 'column' :
        labelPosition === 'left' ? 'row-reverse' :
          'row'
  );

  return (
    <div className={styles.Container} style={{ flexFlow }}>
      <BaseSwitch.Root {...props} className={`${styles.Switch} color-${color}`}>
        <BaseSwitch.Thumb className={styles.Thumb} />
      </BaseSwitch.Root>
      {label}
    </div>
  );
};

export default Switch;