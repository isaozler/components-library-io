import React, { ForwardedRef, Fragment } from 'react'
import ButtonProps from './Button.types'
import { Component as Icon } from '@components/atoms/Icon/Icon'
import { Button, ButtonLink, Label, Icon as IconWrapper, Badge } from './styles'

const ButtonComponent = (props: ButtonProps) => {
  const {
    className,
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
    isNewWindow = false,
    badge,
    badgeTextColor,
    badgeColor,
    isDisabled = false,
    linkWrapper,
    innerRef,
  } = props
  const Component = type === 'link' ? ButtonLink : Button
  const CustomIconComponent = iconCustom ? iconCustom : null

  return (
    <Fragment>
      <Component
        {...props}
        className={[className, 'button--wrapper'].join(' ')}
        type={type}
        backgroundColor={backgroundColor}
        size={size}
        color={color}
        colorHover={colorHover}
        border={border}
        isFullWidth={isFullWidth}
        iconAlignment={iconAlignment}
        underlined={underlined}
        underlinedHover={underlinedHover}
        target={isNewWindow ? '_blank' : ''}
        rel={isNewWindow ? 'noreferrer' : ''}
        disabled={isDisabled}
        linkWrapper={linkWrapper}
        innerRef={innerRef}
      >
        {icon || CustomIconComponent ? (
          <IconWrapper label={label} iconAlignment={iconAlignment} size={size}>
            {CustomIconComponent ? CustomIconComponent : <Icon icon={icon} />}
            {badge ? (
              <Badge
                badge={badge}
                color={badgeColor}
                badgeTextColor={badgeTextColor}
              >
                {typeof badge === 'boolean' ? '' : badge}
              </Badge>
            ) : (
              <></>
            )}
          </IconWrapper>
        ) : (
          <></>
        )}
        {!!label ? <Label iconAlignment={iconAlignment}>{label}</Label> : <></>}
      </Component>
    </Fragment>
  )
}

const RefButtonComponent = React.forwardRef(
  (props: ButtonProps, ref: ForwardedRef<any>) => {
    const {
      className,
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
      isNewWindow = false,
      badge,
      badgeTextColor,
      badgeColor,
      isDisabled = false,
      linkWrapper,
      // innerRef,
    } = props
    const Component = type === 'link' ? ButtonLink : Button
    const CustomIconComponent = iconCustom ? iconCustom : null

    return (
      <Fragment>
        <Component
          {...props}
          className={[className, 'button--wrapper'].join(' ')}
          type={type}
          backgroundColor={backgroundColor}
          size={size}
          color={color}
          colorHover={colorHover}
          border={border}
          isFullWidth={isFullWidth}
          iconAlignment={iconAlignment}
          underlined={underlined}
          underlinedHover={underlinedHover}
          target={isNewWindow ? '_blank' : ''}
          rel={isNewWindow ? 'noreferrer' : ''}
          disabled={isDisabled}
          linkWrapper={linkWrapper}
          innerRef={ref}
        >
          {icon || CustomIconComponent ? (
            <IconWrapper
              label={label}
              iconAlignment={iconAlignment}
              size={size}
            >
              {CustomIconComponent ? CustomIconComponent : <Icon icon={icon} />}
              {badge ? (
                <Badge
                  badge={badge}
                  color={badgeColor}
                  badgeTextColor={badgeTextColor}
                >
                  {typeof badge === 'boolean' ? '' : badge}
                </Badge>
              ) : (
                <></>
              )}
            </IconWrapper>
          ) : (
            <></>
          )}
          {!!label ? (
            <Label iconAlignment={iconAlignment}>{label}</Label>
          ) : (
            <></>
          )}
        </Component>
      </Fragment>
    )
  },
)

export const Component = React.forwardRef(
  (props: ButtonProps, ref: ForwardedRef<any>) => {
    const { linkWrapper: LinkWrapper, href, innerRef } = props

    return (
      <>
        {!!LinkWrapper ? (
          <LinkWrapper href={href} passHref ref={ref}>
            <RefButtonComponent {...props} ref={innerRef} />
          </LinkWrapper>
        ) : (
          <ButtonComponent {...props} />
        )}
      </>
    )
  },
)

export default Component
