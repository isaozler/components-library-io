import { ForwardedRef, FunctionComponent } from 'react';
export interface ButtonProps {
  children: any;
  className?: string;
  href?: string;
  rel?: string;
  isNewWindow?: boolean;
  onClick?: any;
  linkWrapper?: FunctionComponent<any>;
  innerRef?: ForwardedRef<any>;
  ref?: ForwardedRef<any>;
}

export default ButtonProps;
