export type TFit = 'cover' | 'contain' | 'fill';

export interface IProps {
  className?: string;
  image: string;
  alt?: string;
  width?: string;
  height?: string;
  href?: string;
  newWindow?: boolean;
  fit: TFit;
}

export default IProps;
