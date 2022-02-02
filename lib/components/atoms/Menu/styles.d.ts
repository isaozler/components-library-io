/// <reference types="react" />
import IProps from './component.types';
export declare const Ul: import("styled-components").StyledComponent<"ul", any, IProps, keyof IProps>;
export declare const Li: import("styled-components").StyledComponent<"li", any, {
    isFullWidth?: boolean | undefined;
    isRoot?: boolean | undefined;
}, "isFullWidth" | "isRoot">;
export declare const A: import("styled-components").StyledComponent<"a", any, Partial<Pick<import("react").DetailedHTMLProps<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "key" | keyof import("react").AnchorHTMLAttributes<HTMLAnchorElement>> & {
    ref?: ((instance: HTMLAnchorElement | null) => void) | import("react").RefObject<HTMLAnchorElement> | null | undefined;
} & {
    onClick: (e: MouseEvent) => void;
}> & {
    [others: string]: any;
}, string | number>;
export declare const Menu: import("styled-components").StyledComponent<"nav", any, IProps, keyof IProps>;
