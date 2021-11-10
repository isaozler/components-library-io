import React from 'react';
import styled, { css } from 'styled-components';

import { ButtonProps } from './Button';

const ButtonStyle = styled.button.attrs((props: ButtonProps) => ({
  backgroundColor: props.backgroundColor,
  size: props.size,
  color: props.color,
}))`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  color: ${props => props.color};
  background-color: ${props => !props.backgroundColor ? 'transparent' : props.backgroundColor};
  ${props => ButtonSizes[props.size || 'medium']}
`;

const ButtonPrimary = styled(ButtonStyle)`
  background-color: #1ea7fd;
`

const ButtonSecondary = styled(ButtonStyle)`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
`

const ButtonSizes = {
  small: css`
    font-size: 12px;
    padding: 10px 16px;
  `,
  medium: css`
    font-size: 14px;
    padding: 11px 20px;
  `,
  large: css`
    font-size: 16px;
    padding: 12px 24px;
  `,
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  backgroundColor,
  label,
  size='medium',
  color='black',
  ...props
}: ButtonProps) => {
  const Component = primary ? ButtonPrimary : ButtonSecondary;

  return (
    <Component
      type="button"
      backgroundColor={backgroundColor}
      size={size}
      color={color}
      {...props}
    >
      {label}
    </Component>
  );
};
