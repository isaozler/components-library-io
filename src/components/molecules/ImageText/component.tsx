import React, { Fragment } from 'react';
import GlobalStyle from '@components/globalStyle';

import ImageComponent from '@components/atoms/Image/component';

import IProps from './schema';

import { Wrapper, Column } from './styles';

const Component = ({
  className,
  title,
  sizes,
  contents,
  hasSpaceBetween,
  isVertical,
  image: {
    caption,
    image,
    fit,
    href,
    newWindow
  }
}: IProps) => {
  return (
    <Fragment>
      <GlobalStyle />
      <Wrapper className={className} isVertical={isVertical}>
        {(title && <h1>{title}</h1>) || <></>}
        <ImageComponent
          href={href}
          newWindow={newWindow}
          width="100%"
          height="100%"
          image={image}
          fit={fit || 'contain'}
          alt={caption}
        />
        {Array.from({ length: contents.length }).map((_, index) => {
          return (
            <Column
              key={`column-content--${index}`}
              isVertical={isVertical}
              hasSpaceBetween={hasSpaceBetween}
              sizes={sizes}
            >
              {contents[index]}
            </Column>
          );
        })}
      </Wrapper>
    </Fragment>
  );
};

export default Component;