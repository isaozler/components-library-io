import { FunctionComponent } from "react";

export type TMenu = {

}

export interface IProps {
  id: string;
  className?: string;
  menu: TMenu[],
  isFullWidth?: boolean,
  linkWrapper?: FunctionComponent<any>,
}

export default IProps;
