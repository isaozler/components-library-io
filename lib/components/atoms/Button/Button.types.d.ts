/// <reference types="react" />
import { IconsK } from '../Icon/Icon';
export interface ButtonProps {
    className?: string;
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
    label?: string;
    /**
     * Optional click handler
     */
    border?: {
        color: string;
        size: string;
        radius?: string;
        style?: 'solid' | 'dashed';
    };
    borderHover?: {
        color: string;
        size: string;
        radius?: string;
        style?: 'solid' | 'dashed';
    };
    icon?: IconsK;
    iconCustom?: JSX.Element;
    isFullWidth?: boolean;
    href?: string;
    isNewWindow?: boolean;
    underlined?: boolean;
    underlinedHover?: boolean;
    onClick?: () => void;
    iconAlignment?: 'left' | 'right';
    badge?: number | string | boolean;
    badgeTextColor?: string;
    badgeColor?: string;
}
export default ButtonProps;
