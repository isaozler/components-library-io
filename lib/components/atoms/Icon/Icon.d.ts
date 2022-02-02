import * as Icons from '@mdi/js';
export declare type IconsK = keyof typeof Icons;
export interface IProps {
    icon?: IconsK;
    onClick?: () => void;
}
export declare const Component: ({ icon, ...props }: IProps) => JSX.Element;
export default Component;
