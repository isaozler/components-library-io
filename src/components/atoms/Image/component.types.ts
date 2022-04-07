import { ForwardedRef, FunctionComponent } from "react";

export type TFit = 'cover' | 'contain' | 'fill';

export interface IProps {
  className?: string;
  image: string;
  title?: string;
  alt?: string;
  width?: string;
  height?: string;
  href?: string;
  newWindow?: boolean;
  fit: TFit;
  linkWrapper?: FunctionComponent<any>;
  innerRef?: ForwardedRef<any>;
  ref?: ForwardedRef<any>;
}

export default IProps;
