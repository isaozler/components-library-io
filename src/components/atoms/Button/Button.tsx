import React, { Fragment } from 'react';
import GlobalStyle from '@components/globalStyle';

import ButtonProps from './schema';

import { Component as Icon } from '@components/atoms/Icon/Icon';

import { Button, ButtonLink, Label, Icon as IconWrapper } from './styles'

export const Component = (props: ButtonProps) => {
  const {
    backgroundColor,
    label,
    size = 'normal',
    color = 'black',
    colorHover = 'black',
    border,
    icon,
    iconCustom,
    isFullWidth = false,
    iconAlignment = 'right',
    type = 'button',
    underlined = false,
    underlinedHover = false,
  } = props;
  const Component = type === 'link' ? ButtonLink : Button;
  const CustomIconComponent = iconCustom ? iconCustom : null;

  return (
    <Fragment>
      <GlobalStyle />
      <Component
        type="button"
        backgroundColor={backgroundColor}
        size={size}
        color={color}
        colorHover={colorHover}
        border={border}
        isFullWidth={isFullWidth}
        iconAlignment={iconAlignment}
        underlined={underlined}
        underlinedHover={underlinedHover}
        {...props}
      >
        {
          icon || CustomIconComponent ?
            <IconWrapper iconAlignment={iconAlignment} size={size}>
              {
                CustomIconComponent ? CustomIconComponent : <Icon icon={icon} />
              }
            </IconWrapper>
            : <></>
        }
        <Label iconAlignment={iconAlignment}>{label}</Label>
      </Component>
    </Fragment>
  );
};

export default Component;
