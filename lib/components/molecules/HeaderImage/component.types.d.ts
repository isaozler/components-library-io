/// <reference types="react" />
import { TFit } from '@components/atoms/Image/component.types';
import { IconsK } from '@components/atoms/Icon/Icon';
declare type TPosition = 'bottom' | 'left' | 'top' | 'right';
export interface IProps {
    defaultSection?: number;
    sections: {
        image: string;
        caption?: string;
        fit?: TFit;
        href?: string;
        newWindow?: boolean;
    }[];
    className?: string;
    icon?: IconsK;
    iconCustom?: JSX.Element;
    unstacked?: TPosition;
}
export default IProps;
