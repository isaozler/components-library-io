import React, { ForwardedRef, Fragment } from 'react'
import ComponentProps from './component.types'
import { Link } from './styles'

const LinkComponent = React.forwardRef(
  (props: ComponentProps, ref: ForwardedRef<any>) => {
    const {
      children,
      className,
      isNewWindow = false,
      linkWrapper,
      // innerRef,
    } = props

    return (
      <Fragment>
        <Link
          {...props}
          className={className}
          target={isNewWindow ? '_blank' : ''}
          rel={isNewWindow ? 'noreferrer' : ''}
          linkWrapper={linkWrapper}
          innerRef={ref}
        >
          {children}
        </Link>
      </Fragment>
    )
  },
)

export const Component = (props: ComponentProps) => {
  const { linkWrapper: LinkWrapper, href, innerRef, rel } = props

  return (
    <>
      {LinkWrapper ? (
        <LinkWrapper href={href} rel={rel} passHref>
          <LinkComponent {...props} ref={innerRef} />
        </LinkWrapper>
      ) : (
        <LinkComponent {...props} />
      )}
    </>
  )
}

export default Component
