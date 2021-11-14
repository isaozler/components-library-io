import React, { Fragment } from 'react';
import GlobalStyle from '@components/globalStyle';

import IProps from './schema';

import { Wrapper, Column } from './styles';

const Component = ({ className, sizes, contents, hasSpaceBetween, isVertical }: IProps) => {
  return (
    <Fragment>
      <GlobalStyle />
      <Wrapper className={className} isVertical={isVertical}>
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
