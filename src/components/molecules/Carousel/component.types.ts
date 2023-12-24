import { IconsK } from '@components/atoms/Icon/Icon';
import { ReactElement } from 'react';

type TPosition = 'bottom' | 'left' | 'top' | 'right'
type TOptions = {
  swipeDirection: 'vertical' | 'horizontal'
}
export interface IProps {
  defaultSection?: number;
  title?: string;
  sections: ReactElement[];
  className?: string;
  icon?: IconsK;
  iconCustom?: JSX.Element;
  unstacked?: TPosition;
  options?: TOptions;
}

export default IProps;
