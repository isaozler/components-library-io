import React from 'react'

import ImageComponent from '@components/atoms/Image/component'

import IProps from './component.types'

import { Wrapper, Column } from './styles'

const Component = ({
  className,
  title,
  sizes,
  contents,
  hasSpaceBetween,
  isVertical,
  image: { caption, image, fit, href, newWindow },
  linkWrapper,
  innerRef,
}: IProps) => {
  return (
    <Wrapper className={className} isVertical={isVertical}>
      {(title && <h1>{title}</h1>) || <></>}
      <ImageComponent
        className="imagetext-image"
        href={href}
        newWindow={newWindow}
        width="100%"
        height="100%"
        image={image}
        fit={fit ?? 'contain'}
        alt={caption}
        linkWrapper={linkWrapper}
        innerRef={innerRef}
      />
      {Array.from({ length: contents.length }).map((_, index) => {
        return (
          <Column
            className="imagetext-column"
            key={`column-content--${index}`}
            isVertical={isVertical}
            hasSpaceBetween={hasSpaceBetween}
            sizes={sizes}
          >
            {contents[index]}
          </Column>
        )
      })}
    </Wrapper>
  )
}

export default Component
