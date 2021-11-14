import { TFit } from '@components/atoms/Image/schema';

export interface IProps {
  defaultSection?: number;
  sections: {
    image: string;
    caption: string;
    fit?: TFit;
    href?: string;
    newWindow?: boolean;
  }[];
  className?: string;
}

export default IProps;
