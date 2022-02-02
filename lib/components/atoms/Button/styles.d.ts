/// <reference types="react" />
import ButtonProps from './Button.types';
export declare const ButtonSizes: {
    small: import("styled-components").FlattenSimpleInterpolation;
    normal: import("styled-components").FlattenSimpleInterpolation;
    large: import("styled-components").FlattenSimpleInterpolation;
};
export declare const Button: import("styled-components").StyledComponent<"button", any, Partial<Pick<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "key" | keyof import("react").ButtonHTMLAttributes<HTMLButtonElement>> & {
    ref?: ((instance: HTMLButtonElement | null) => void) | import("react").RefObject<HTMLButtonElement> | null | undefined;
} & ButtonProps> & {
    [others: string]: any;
}, string | number>;
export declare const ButtonLink: import("styled-components").StyledComponent<"a", any, ButtonProps, keyof ButtonProps>;
export declare const Label: import("styled-components").StyledComponent<"div", any, ButtonProps, keyof ButtonProps>;
export declare const Icon: import("styled-components").StyledComponent<"div", any, ButtonProps, keyof ButtonProps>;
declare type BadgeType = {
    badgeTextColor?: string;
    badge: string | number | boolean;
    color?: string;
};
export declare const Badge: import("styled-components").StyledComponent<"div", any, BadgeType, keyof BadgeType>;
export {};
