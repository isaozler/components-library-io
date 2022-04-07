import React, { Fragment } from 'react'
import LinkWrapper from '../LinkWrapper/component'
import IProps from './component.types'

import { Wrapper, Image } from './styles'

const Component = ({
  className,
  image,
  alt,
  title,
  width,
  height,
  href,
  newWindow,
  fit,
  linkWrapper,
  innerRef,
}: IProps) => {
  const wrapperProps = { width, height }
  const linkProps = {
    ...(newWindow ? { target: '_blank' } : {}),
  }
  const imageProps = {
    ...(fit ? { fit } : {}),
  }

  return (
    <Fragment>
      <Wrapper
        className={[className, 'image-wrapper'].join(' ')}
        {...wrapperProps}
      >
        {href ? (
          <LinkWrapper
            {...linkProps}
            linkWrapper={linkWrapper}
            innerRef={innerRef}
            href={href}
            rel={newWindow ? 'noreferrer' : ''}
          >
            <Image src={image} alt={alt} title={title} {...imageProps} />
          </LinkWrapper>
        ) : (
          <Image src={image} alt={alt} title={title} {...imageProps} />
        )}
      </Wrapper>
    </Fragment>
  )
}

export default Component
