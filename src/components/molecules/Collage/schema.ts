import { ReactElement } from "react";

export type TContent = ReactElement;
export type TContents = TContent[];
export type TSection = TContents;

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
