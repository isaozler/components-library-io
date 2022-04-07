import { ForwardedRef, FunctionComponent, ReactElement } from "react";
import { TFit } from '@components/atoms/Image/component.types';
export interface IProps {
    className?: string;
    title?: string;
    isVertical?: boolean;
    sizes?: number[] | string[];
    contents: ReactElement[];
    hasSpaceBetween?: boolean;
    image: {
        image: string;
        caption: string;
        fit?: TFit;
        href?: string;
        newWindow?: boolean;
    };
    linkWrapper?: FunctionComponent<any>;
    innerRef?: ForwardedRef<any>;
    ref?: ForwardedRef<any>;
}
export default IProps;
