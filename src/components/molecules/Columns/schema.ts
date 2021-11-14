import { ReactElement } from "react";

export interface IProps {
  className?: string;
  isVertical?: boolean;
  sizes?: number[] | string[];
  contents: ReactElement[];
  hasSpaceBetween?: boolean;
}

export default IProps;
