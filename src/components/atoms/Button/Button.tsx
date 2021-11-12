import React from 'react';
import { ButtonPrimary, ButtonSecondary } from './styles'
import ButtonProps from './schema';

import { Component as Icon } from '@components/atoms/Icon/Icon';

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  backgroundColor,
  label,
  size='medium',
  color='black',
  borderRadius=0,
  icon,
  ...props
}: ButtonProps) => {
  const Component = primary ? ButtonPrimary : ButtonSecondary;

  return (
    <Component
      type="button"
      backgroundColor={backgroundColor}
      size={size}
      color={color}
      borderRadius={borderRadius}
      {...props}
    >
      {icon ? <Icon icon={icon} color={color} /> : <></>}
      {label}
    </Component>
  );
};
