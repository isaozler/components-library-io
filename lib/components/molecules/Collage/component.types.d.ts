import { ReactElement } from "react";
export declare type TContent = ReactElement;
export declare type TContents = TContent[];
export declare type TSection = TContents;
export interface IProps {
    className?: string;
    title?: string;
    sections?: TSection[];
    contents?: ReactElement[];
    spotlight?: ReactElement;
    sizes?: [string | undefined, string | undefined];
    hasSpaceBetween?: boolean;
    isReversed?: boolean;
}
export default IProps;
