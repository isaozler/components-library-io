import { IconsK } from '@components/atoms/Icon/Icon';
import { ReactElement } from 'react';
declare type TPosition = 'bottom' | 'left' | 'top' | 'right';
declare type TOptions = {
    swipeDirection: 'vertical' | 'horizontal';
};
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
