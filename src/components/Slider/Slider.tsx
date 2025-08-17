import { Slider as BaseSlider } from '@base-ui-components/react/slider';
import * as React from 'react';
import styles from './Slider.module.scss';
import type { ThemeColor } from '@/types/colors';

interface SliderProps extends BaseSlider.Root.Props {
  color?: ThemeColor;
}

const Checkbox = ({
  color = 'magenta',
  ...props
}: SliderProps) => {
  return (
    <BaseSlider.Root {...props} className={`${styles.Checkbox} color-${color}`}>
      <BaseSlider.Control className={styles.Control}>
        <BaseSlider.Track className={styles.Track}>
          <BaseSlider.Indicator className={styles.Indicator} />
          <BaseSlider.Thumb className={styles.Thumb} />
        </BaseSlider.Track>
      </BaseSlider.Control>
    </BaseSlider.Root>
  );
};

export default Checkbox;