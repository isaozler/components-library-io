import { IconsK } from '../Icon/Icon';
export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Color of the button text?
   */
  color?: string;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  borderRadius?: number;
  icon?: IconsK;
  onClick?: () => void;
}

export default ButtonProps;
