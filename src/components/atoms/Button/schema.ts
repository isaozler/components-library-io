import { IconsK } from '../Icon/Icon';
export interface ButtonProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  backgroundColorHover?: string;
  type?: 'link' | 'button';
  /**
   * How large should the button be?
   */
  size?: 'small' | 'normal' | 'large';
  /**
   * Color of the button text?
   */
  fontWeight?: 'normal' | 'bold' | string;
  color?: string;
  colorHover?: string;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  border?: {
    color: string;
    size: number;
    radius?: string;
    style?: 'solid' | 'dashed';
  };
  borderHover?: {
    color: string;
    size: number;
    radius?: string;
    style?: 'solid' | 'dashed';
  };
  icon?: IconsK;
  iconCustom?: JSX.Element;
  isFullWidth?: boolean;
  href?: string;
  underlined?: boolean;
  underlinedHover?: boolean;
  onClick?: () => void;
  iconAlignment?: 'left' | 'right';
}

export default ButtonProps;
