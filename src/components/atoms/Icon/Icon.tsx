import React from 'react';

import { default as ReactIcon } from '@mdi/react';
import * as Icons from '@mdi/js';

import { StyledElement } from './styles'

export type IconsK = keyof typeof Icons;

export interface IProps {
  icon?: IconsK;
  onClick?: () => void;
}

export const Component = ({
  icon,
  ...props
}: IProps) => {
  const Component = StyledElement;
  const IconPath = (icon && Icons[icon]) || null

  return (
    <Component {...props}>
      {IconPath
        ? <ReactIcon path={IconPath} {...props} />
        : <></>
      }
    </Component>
  );
};

export default Component;
