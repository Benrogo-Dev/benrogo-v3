import Icon from '@mdi/react';
import type { ThemeColor } from '@/types/colors';
import type { IconProps } from '@mdi/react/dist/IconProps';

interface ColoredIconProps extends IconProps {
  color?: ThemeColor
};

const ColoredIcon = ({
  color = 'magenta',
  ...props
}: ColoredIconProps) => {
  return (
    <Icon color={color} {...props}/>
  );
};

export default ColoredIcon;