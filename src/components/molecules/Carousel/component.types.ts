import { IconsK } from '@components/atoms/Icon/Icon';
import { ReactElement } from 'react';

type TPosition = 'bottom' | 'left' | 'top' | 'right'
export interface IProps {
  defaultSection?: number;
  title?: string;
  sections: ReactElement[];
  className?: string;
  icon?: IconsK;
  iconCustom?: JSX.Element;
  unstacked?: TPosition;
}

export default IProps;
